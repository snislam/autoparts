import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';
import OrderRow from './OrderRow';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const { data: myOrders, isLoading, refetch } = useQuery('myOrders', () => fetch(`https://morning-bayou-19534.herokuapp.com/orders?email=${user.email}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))



    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h1>My orders</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Payment</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map((order, index) => <OrderRow key={order._id} order={order} refetch={refetch} index={index} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;