import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        const addedProduct = { ...data }
        fetch(`http://localhost:5000/products`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(addedProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Product added')
                    reset();
                }
            })
    }
    return (
        <div>
            <h1>AddProduct</h1>
            <form onClick={handleSubmit(onSubmit)} className=''>


                <div className="form-control w-full my-3">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder='Product name'
                        className="input input-bordered w-full"
                        {...register('name', {
                            required: {
                                value: true,
                                message: "This field is required"
                            }
                        })}
                    />
                    <label className="label">
                        <span className="label-text-alt">
                            {errors?.name?.type === 'required' && <p className='text-red-500'>{errors.name.message}</p>}
                        </span>
                    </label>
                </div>



                <div className="form-control w-full my-3">
                    <label className="label">
                        <span className="label-text">Price per piece</span>
                    </label>
                    <input
                        type="number"
                        placeholder='Product Price'
                        className="input input-bordered w-full"
                        {...register('price', {
                            required: {
                                value: true,
                                message: "This field is required"
                            }
                        })}
                    />
                    <label className="label">
                        <span className="label-text-alt">
                            {errors?.price?.type === 'required' && <p className='text-red-500'>{errors.price.message}</p>}
                        </span>
                    </label>
                </div>


                <div className="form-control w-full my-3">
                    <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder='Product Quantity'
                        className="input input-bordered w-full"
                        {...register('quantity', {
                            required: {
                                value: true,
                                message: "This field is required"
                            }
                        })}
                    />
                    <label className="label">
                        <span className="label-text-alt">
                            {errors?.quantity?.type === 'required' && <p className='text-red-500'>{errors.quantity.message}</p>}
                        </span>
                    </label>
                </div>


                <div className="form-control w-full my-3">
                    <label className="label">
                        <span className="label-text">Minimum Order Quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder='Minimum Order Quantity'
                        className="input input-bordered w-full"
                        {...register('min_order_qnt', {
                            required: {
                                value: true,
                                message: "This field is required"
                            }
                        })}
                    />
                    <label className="label">
                        <span className="label-text-alt">
                            {errors?.min_order_qnt?.type === 'required' && <p className='text-red-500'>{errors.min_order_qnt.message}</p>}
                        </span>
                    </label>
                </div>

                <div className="form-control w-full my-3">
                    <label className="label">
                        <span className="label-text">Product Description</span>
                    </label>
                    <input
                        type="text"
                        placeholder='Product Description'
                        className="input input-bordered w-full"
                        {...register('description', {
                            required: {
                                value: true,
                                message: "This field is required"
                            }
                        })}
                    />
                    <label className="label">
                        <span className="label-text-alt">
                            {errors?.description?.type === 'required' && <p className='text-red-500'>{errors.description.message}</p>}
                        </span>
                    </label>
                </div>

                <div className="form-control w-full my-3">
                    <label className="label">
                        <span className="label-text">Product img link</span>
                    </label>
                    <input
                        type="text"
                        placeholder='Product img link'
                        className="input input-bordered w-full"
                        {...register('img', {
                            required: {
                                value: true,
                                message: "This field is required"
                            }
                        })}
                    />
                    <label className="label">
                        <span className="label-text-alt">
                            {errors?.img?.type === 'required' && <p className='text-red-500'>{errors.img.message}</p>}
                        </span>
                    </label>
                </div>

                <input className='btn btn-primary w-full' type="submit" value='Place Order' />

            </form>
        </div>
    );
};

export default AddProduct;