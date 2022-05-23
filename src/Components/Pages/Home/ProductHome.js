import React from 'react';
import { useQuery } from 'react-query';
import SingleProductCard from './SingleProductCard';

const ProductHome = () => {
    const { data: products, isLoading } = useQuery('products', () => fetch('products.json').then(res => res.json()))
    let productsArr;

    if (isLoading) {
        return <p>Loading....</p>
    }

    products.length > 6 ? productsArr = products.slice(0, 6) : productsArr = products;

    return (
        <div className='px-12'>
            <h2 className='text-5xl text-secondary text-center font-bold py-12'>Our Products</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
                {
                    productsArr.map(product => <SingleProductCard
                        key={product._id}
                        product={product}
                    />)
                }
            </div>
        </div>

    );
};

export default ProductHome;