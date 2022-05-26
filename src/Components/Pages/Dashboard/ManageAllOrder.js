import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import ManageOrderRow from './ManageOrderRow';

const ManageAllOrder = () => {
    const { data: orders, isLoading, refetch } = useQuery('allOrders', () => fetch('http://localhost:5000/allorders', {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h1 className='text-3xl font-semibold mb-5'>Manage All Orders</h1>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Payment Status</th>
                        <th>Status</th>
                        <th>Shipment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <ManageOrderRow
                            key={order._id}
                            order={order}
                            index={index}
                            refetch={refetch}
                        />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageAllOrder;