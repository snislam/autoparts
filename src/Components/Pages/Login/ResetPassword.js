import React from 'react';
import { useForm } from 'react-hook-form';

const ResetPassword = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const onSubmit = data => {
        console.log(data)
        reset()
    }

    return (
        <div className='px-12 md:px-0'>
            <div className='w-full md:w-1/2 p-10 mx-auto my-20 rounded-md shadow-md'>
                <h1 className='text-2xl font-semibold text-center mb-5'>Reset password</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type='email'
                        placeholder='Enter your email'
                        className='w-full border-2 rounded-md p-3'
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'This field is required.'
                            },
                            pattern: {
                                value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                                message: 'Enter a correct email'
                            }
                        })}
                    />
                    <label className="label">
                        <span className="label-text-alt">
                            {errors.email?.type === 'required' && <p className='text-warning'>{errors.email?.message}</p>}
                            {errors.email?.type === 'pattern' && <p className='text-warning'>{errors.email?.message}</p>}
                        </span>
                    </label>

                    <input className='w-full border-2 rounded-md p-3 bg-blue-600 hover:bg-blue-700 duration-700 text-white font-semibold' type="submit" value='Reset now' />
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;