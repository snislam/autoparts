import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const OrderRow = ({ order, index, refetch }) => {
    const { productName, totalPrice, quantity } = order;


    const handleDelete = () => {
        fetch(`http://localhost:5000/order/${order._id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.warning('Succesfully cancelde.')
                    refetch();
                }
            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td>{quantity} pc.</td>
            <td>${totalPrice}</td>
            <td>
                {
                    !order.paid ? <Link to={`/dashboard/payment/${order._id}`} className='btn btn-accent'>Pay</Link> : <p className='text-2xl text-primary'>Paid</p>
                }
            </td>
            <td>
                {
                    !order.paid ? <button onClick={handleDelete} className='btn btn-accent'>Cancel</button> : <p className='text-success'>Transection Id: {order.transectionId}</p>
                }
            </td>
        </tr>
    );
};

export default OrderRow;