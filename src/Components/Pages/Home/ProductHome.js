import React, { useState } from 'react';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import SingleProductCard from './SingleProductCard';

const ProductHome = () => {
    const [products, setProducts] = useState()
    const { data, isLoading } = useQuery('products', () => fetch('https://morning-bayou-19534.herokuapp.com/products').then(res => res.json()))

    useEffect(() => {
        setProducts(data);
    }, [data])

    const handleAsendingOrder = () => {
        fetch('https://morning-bayou-19534.herokuapp.com/asending-products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }

    const handleDesendingOrder = () => {
        fetch('https://morning-bayou-19534.herokuapp.com/desending-products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='px-12 py-12'>
            <h2 className='text-5xl text-secondary text-center font-bold pt-12 pb-7'>Our Products</h2>
            <div className='pb-3 flex flex-col items-center justify-center'>
                <h3 className='text-slate-900 pb-3'>Sort Products</h3>
                <div>
                    <button onClick={handleAsendingOrder} className='py-2 px-4 border border-slate-200 rounded-lg'>Low to High Price</button>
                    <button onClick={handleDesendingOrder} className='py-2 px-4 border border-slate-200 rounded-lg'>High to Low Price</button>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {
                    products?.map(product => <SingleProductCard
                        key={product._id}
                        product={product}
                    />)
                }
            </div>
        </div>

    );
};

export default ProductHome;