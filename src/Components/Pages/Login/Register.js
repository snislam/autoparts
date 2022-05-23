import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    if (user || guser) {
        navigate(from, { replace: true })
    }

    if (loading || gloading) {
        return <Loading />
    }

    const onSubmit = data => {
        const { email, password } = data;
        createUserWithEmailAndPassword(email, password)
        reset();
    }

    return (
        <div className='px-12 md:px-0'>
            <div className='w-full md:w-1/2 mx-auto border-2 rounded-md shadow-md p-10 my-20 '>
                <h1 className='text-2xl font-semibold text-center mb-5'>Registration</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type='text'
                        placeholder='Enter your name'
                        className='w-full border-2 rounded-md p-3'
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'This field is required.'
                            }
                        })}
                    />
                    <label className="label">
                        <span className="label-text-alt">
                            {errors.name?.type === 'required' && <p className='text-warning'>{errors.name?.message}</p>}
                        </span>
                    </label>

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

                    <p className='text-red mt-3'>{error?.message || gerror?.message}</p>

                    <p className='mb-3'>Already have an account? <Link to='/login' className='text-primary'>Please Login.</Link></p>

                    <input className='w-full border-2 rounded-md p-3 bg-blue-600 hover:bg-blue-700 duration-700 text-white font-semibold' type="submit" value='Register' />
                </form>
                <SocialLogin signInWithGoogle={signInWithGoogle} />
            </div>
        </div>
    );
};

export default Register;