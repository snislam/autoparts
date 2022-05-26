import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import ProductsRow from './ProductsRow';

const ManageProducts = () => {
    const { data: products, isLoading, refetch } = useQuery('allProductsManage', () => fetch('https://morning-bayou-19534.herokuapp.com/products', {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h1 className='text-3xl font-semibold mb-5'>Manage Products</h1>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Minimum Order Quantity</th>
                        <th>Price</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => <ProductsRow
                            key={product._id}
                            product={product}
                            index={index}
                            refetch={refetch}
                        />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;