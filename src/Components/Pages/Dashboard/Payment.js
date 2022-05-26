import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import CkeckoutForm from './CheckOutForm';

const stripePromise = loadStripe('pk_test_51L1trSH9rKtnD4mbKyOo1LnMYbzJEv2KXug78Ayi9Q9YZ1oouUNbpTBxqXhw8khvsaygnxEUOD9LabzwUWPXBYw600pcwZNvrd');

const Payment = () => {
    const { id } = useParams();
    const { data, isLoading } = useQuery('sorder', () => fetch(`https://morning-bayou-19534.herokuapp.com/order/${id}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='bg-slate-50 w-full md:w-1/2  p-5 flex justify-center flex-col mx-auto mt-10'>
            <h2 className='text-accent font-semibold text-lg'>Hello {data[0].name}, please check and pay.</h2>
            <div>
                <h3>Product name: <span className='text-purple-700 font-bold'>{data[0].productName}</span></h3>
                <p>Please pay only <span className='text-purple-700 font-bold'>${data[0].totalPrice}</span> for completing order.</p>
            </div>
            <div className='p-10'>
                <Elements stripe={stripePromise}>
                    <CkeckoutForm data={data[0]} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;