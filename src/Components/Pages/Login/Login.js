import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
        reset();
    }

    return (
        <div className='px-12 md:px-0'>
            <div className='w-full md:w-1/2 mx-auto border-2 rounded-md shadow-md p-10 my-20 '>
                <h1 className='text-2xl font-semibold text-center mb-5'>Login</h1>
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

                    <input
                        type='password'
                        placeholder='Enter your password'
                        className='w-full border-2 rounded-md p-3'
                        {...register("password", {
                            required: {
                                value: true,
                                message: 'This field is required.'
                            },
                            minLength: {
                                value: 6,
                                message: 'Please enter minimum six character'
                            }
                        })}
                    />
                    <label className="label">
                        <span className="label-text-alt">
                            {errors.password?.type === 'required' && <p className='text-warning'>{errors.password?.message}</p>}
                            {errors.password?.type === 'minLength' && <p className='text-warning'>{errors.password?.message}</p>}
                        </span>
                    </label>

                    <p className='mb-3'>New to AutoParts? <Link to='/register' className='text-primary'>Create an account.</Link></p>


                    <input className='w-full border-2 rounded-md p-3 bg-blue-600 hover:bg-blue-700 duration-700 text-white font-semibold' type="submit" value='Login' />

                    <p className='mt-3'>Forgot Password? <Link to='/resetpassword' className='text-primary'>Reset.</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;