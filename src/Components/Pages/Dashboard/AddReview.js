import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit, formState: { errors }, reset } = useForm()


    const onSubmit = data => {
        const review = { ...data, email: user.email, name: user.displayName }
        console.log(review)

        fetch(`http://localhost:5000/review/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount || data.acknowledged) {
                    toast.success('Review added')
                    reset();
                }
            })



    }

    return (
        <div>
            <h1 className='text-3xl font-semibold'>Add review</h1>
            <form onClick={handleSubmit(onSubmit)} className=''>
                <div className="form-control w-full my-3">
                    <label className="label">
                        <span className="label-text">Give Rating</span>
                    </label>
                    <input
                        type="number"
                        placeholder='Enter your rating (1-5)'
                        className="input input-bordered w-full"
                        {...register('ratings', {
                            required: {
                                value: true,
                                message: "This field is required"
                            },
                            min: {
                                value: 1,
                                message: "Less than 1 is not accepted"
                            },
                            max: {
                                value: 5,
                                message: "More than 5 is not accepted"
                            }
                        })}
                    />
                    <label className="label">
                        <span className="label-text-alt">
                            {errors?.ratings?.type === 'required' && <p className='text-red-500'>{errors.ratings.message}</p>}
                            {errors?.ratings?.type === 'min' && <p className='text-red-500'>{errors.ratings.message}</p>}
                            {errors?.ratings?.type === 'max' && <p className='text-red-500'>{errors.ratings.message}</p>}
                        </span>
                    </label>
                </div>

                <div className="form-control w-full my-3">
                    <label className="label">
                        <span className="label-text">Your Review</span>
                    </label>
                    <input
                        type="text"
                        placeholder='Write your review'
                        className="input input-bordered w-full"
                        {...register('review', {
                            required: {
                                value: true,
                                message: "This field is required"
                            }
                        })}
                    />
                    <label className="label">
                        <span className="label-text-alt">
                            {errors?.review?.type === 'required' && <p className='text-red-500'>{errors.review.message}</p>}
                        </span>
                    </label>
                </div>

                <input className='btn btn-primary w-full' type="submit" value='Place Order' />

            </form>
        </div>
    );
};

export default AddReview;