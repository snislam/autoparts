import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    const { name, email, _id } = user;

    const makeAdmin = () => {
        fetch(`https://morning-bayou-19534.herokuapp.com/user/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ role: 'admin' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.result.modifiedCount > 0) {
                    toast.success('Successfully added as an admin.')
                    refetch();
                }
            })
    }

    const deleteUser = () => {
        fetch(`https://morning-bayou-19534.herokuapp.com/user/${email}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.warning('User deleted.')
                    refetch();
                }
            })
    }

    return (
        <tr key={_id}>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>
                {
                    user.role === 'admin' ? <span className='bg-purple-500 text-white p-2 rounded-md'>Admin</span> : <button onClick={makeAdmin} className='btn'>Make Admin</button>
                }
            </td>
            <td>
                {
                    user.role === 'admin' ? <span className='bg-purple-500 text-white p-2 rounded-md'>Permenant</span> : <button onClick={deleteUser} className='btn'>Delet User</button>
                }
            </td>
        </tr>
    );
};

export default UserRow;