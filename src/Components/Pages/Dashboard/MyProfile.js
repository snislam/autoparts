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
        const education = e.target.education.value;
        const location = e.target.location.value;
        const city = e.target.city.value;
        const linkdin = e.target.linkdin.value;
        const updatedUser = { name, email, number, education, location, city, linkdin }

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
                }
            })
    }

    return (
        <div>
            <h1 className='text-3xl font-semibold'>MY Profile</h1>
            <form onSubmit={handleProfileUpdate} className='w-full md:w-3/5' action="">

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input
                        type="text"
                        name='name'
                        value={user.displayName}
                        readOnly
                        className="input input-bordered w-full" />
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input
                        type="email"
                        name='email'
                        value={user.email}
                        readOnly
                        className="input input-bordered w-full" />
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Phone Number</span>
                    </label>
                    <input
                        type="text"
                        name='number'
                        placeholder='Enter your mobile number'
                        className="input input-bordered w-full" />
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Education</span>
                    </label>
                    <input
                        type="text"
                        name='education'
                        placeholder='Education ex. HSC'
                        className="input input-bordered w-full" />
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input
                        type="text"
                        name='location'
                        placeholder='Location'
                        className="input input-bordered w-full" />
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">City</span>
                    </label>
                    <input
                        type="text"
                        name='city'
                        placeholder='City Name'
                        className="input input-bordered w-full" />
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">LinkdIn Profile link</span>
                    </label>
                    <input
                        type="text"
                        name='linkdin'
                        placeholder='LinkdIn Profile link'
                        className="input input-bordered w-full" />
                </div>

                <input className='btn btn-primary w-full mt-5' type="submit" value="Save Info" />


            </form>
        </div>
    );
};

export default MyProfile;