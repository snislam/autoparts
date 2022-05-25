import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth)


    if (loading) {
        return <Loading />
    }

    const handleProfileUpdate = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const number = e.target.number.value;
        const updatedUser = { name, email, number }

        fetch(`http://localhost:5000/user/update/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(updatedUser)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.success('Information Saved')
                    e.target.number.value = ''
                }
            })
    }

    return (
        <div>
            <h1 className='text-3xl font-semibold'>MY Profile</h1>
            <form onSubmit={handleProfileUpdate} className='w-full md:w-3/5' action="">

                <div class="form-control w-full">
                    <label class="label">
                        <span class="label-text">Your Name</span>
                    </label>
                    <input
                        type="text"
                        name='name'
                        value={user.displayName}
                        readOnly
                        class="input input-bordered w-full" />
                </div>

                <div class="form-control w-full">
                    <label class="label">
                        <span class="label-text">Your Email</span>
                    </label>
                    <input
                        type="email"
                        name='email'
                        value={user.email}
                        readOnly
                        class="input input-bordered w-full" />
                </div>

                <div class="form-control w-full">
                    <label class="label">
                        <span class="label-text">Phone Number</span>
                    </label>
                    <input
                        type="text"
                        name='number'
                        placeholder='Enter your mobile number'
                        class="input input-bordered w-full" />
                </div>

                <input className='btn btn-primary w-full mt-5' type="submit" value="Save Info" />


            </form>
        </div>
    );
};

export default MyProfile;