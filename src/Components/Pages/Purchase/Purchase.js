import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';

const Purchase = () => {
    const [user, loading] = useAuthState(auth)
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { data: product, isLoading } = useQuery('singleProduct', () => fetch(`http://localhost:5000/purchase/${id}`).then(res => res.json()));


    if (isLoading || loading) {
        return <Loading />
    }

    const { img, name, price, quantity, min_order_qnt } = product;
    const onSubmit = data => {
        const totalPrice = data.quantity * price;
        const order = { ...data, totalPrice }
        console.log(order)

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(order)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('OrderPlaced. Go to dashboard and pay.')
                    reset();
                }
            })
    }

    return (
        <div className='w-4/5 shadow-md bg-slate-50 mx-auto my-10 grid grid-cols-1 sm:grid-cols-2 gap-3 p-10 justify-between items-start'>
            <div className='w-full py-5 px-5 mx-auto'>
                <h1 className='text-center my-5 text-3xl font-semibold'>Product Information</h1>
                <p className='mb-5'><span className='font-bold text-lg'>Product Name:</span> {name} /piece</p>
                <p className='mb-5'><span className='font-bold text-lg'>Price:</span> ${price} /piece</p>
                <p className='mb-5'><span className='font-bold text-lg'>Minimum order quantity :</span> {min_order_qnt} Pieces</p>
                <p className='mb-5'><span className='font-bold text-lg'>Available quantity :</span> {quantity} Pieces</p>
                <p className='mb-5'><span className='font-bold text-lg'>Product image :</span></p>
                <img src={img} alt={name} />
            </div >
            <div className='w-full py-5 px-5 mx-auto'>
                <h2 className='text-center my-5 text-3xl font-semibold'>Fill the info to Order</h2>
                <form onClick={handleSubmit(onSubmit)} className=''>
                    <div className="form-control w-full my-3">
                        <label className="label">
                            <span className="label-text">Your name</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={user.displayName}
                            readOnly
                            className="input input-bordered w-full"
                            {...register('name')}
                        />
                    </div>

                    <div className="form-control w-full my-3">
                        <label className="label">
                            <span className="label-text">Your email</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={user.email}
                            readOnly
                            className="input input-bordered w-full"
                            {...register('email')}
                        />
                    </div>

                    <div className="form-control w-full my-3">
                        <label className="label">
                            <span className="label-text">Your address</span>
                        </label>
                        <input
                            type="text"
                            placeholder='Address'
                            className="input input-bordered w-full"
                            {...register('address', {
                                required: {
                                    value: true,
                                    message: "This field is required"
                                }
                            })}
                        />
                        <label className="label">
                            <span className="label-text-alt">
                                {errors?.address?.type === 'required' && <p className='text-red-500'>{errors.address.message}</p>}
                            </span>
                        </label>
                    </div>

                    <div className="form-control w-full my-3">
                        <label className="label">
                            <span className="label-text">Order Quantity</span>
                        </label>
                        <input
                            type="number"
                            placeholder='Quentity'
                            defaultValue={min_order_qnt}
                            className="input input-bordered w-full"
                            {...register('quantity', {
                                required: {
                                    value: true,
                                    message: "This field is required"
                                },
                                min: {
                                    value: min_order_qnt,
                                    message: "Order quantity should be more or equal to min quantity."
                                },
                                max: {
                                    value: quantity,
                                    message: "Order quantity should be less or equal to available quantity."
                                }
                            })}
                        />
                        <label className="label">
                            <span className="label-text-alt">
                                {errors?.quantity?.type === 'required' && <p className='text-red-500'>{errors.quantity.message}</p>}
                                {errors?.quantity?.type === 'min' && <p className='text-red-500'>{errors.quantity.message}</p>}
                                {errors?.quantity?.type === 'max' && <p className='text-red-500'>{errors.quantity.message}</p>}
                            </span>
                        </label>
                    </div>

                    <div className="form-control w-full my-3">
                        <label className="label">
                            <span className="label-text">Your phone number</span>
                        </label>
                        <input
                            type="number"
                            placeholder='Phone number'
                            className="input input-bordered w-full"
                            {...register('phone', {
                                required: {
                                    value: true,
                                    message: "This field is required"
                                }
                            })}
                        />
                        <label className="label">
                            <span className="label-text-alt">
                                {errors?.phone?.type === 'required' && <p className='text-red-500'>{errors.phone.message}</p>}
                            </span>
                        </label>
                    </div>

                    <input className='btn btn-primary w-full' type="submit" value='Place Order' />

                </form>
            </div>
        </div >
    );
};

export default Purchase;