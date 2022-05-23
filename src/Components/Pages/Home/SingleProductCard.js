import React from 'react';

const SingleProductCard = ({ product }) => {
    const { name, price, quantity, min_order_qnt, img, description
    } = product;
    return (
        <div className='rounded-md shadow-sm'>
            <img className='w-full h-64' src={img} alt={name} />
            <div className='p-5'>
                <h2 className='text-2xl font-bold'>{name}</h2>
                <p className='my-1 text-base text-gray-700 font-medium'>Price: ${price}</p>
                <p className='my-1 text-base text-gray-700 font-medium'>Available: {quantity}</p>
                <p className='my-1 text-base text-gray-700 font-medium'>Minimum order quantity: {min_order_qnt}</p>
                <p className='my-1 text-base text-gray-700 font-medium'>{description}</p>
                <button className='btn'>Order Now</button>
            </div>
        </div>
    );
};

export default SingleProductCard;