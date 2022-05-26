import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import SingleProductCard from './SingleProductCard';

const ProductHome = () => {
    const { data: products, isLoading } = useQuery('products', () => fetch('https://morning-bayou-19534.herokuapp.com/products').then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='px-12 py-12'>
            <h2 className='text-5xl text-secondary text-center font-bold py-12'>Our Products</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
                {
                    products.map(product => <SingleProductCard
                        key={product._id}
                        product={product}
                    />)
                }
            </div>
        </div>

    );
};

export default ProductHome;