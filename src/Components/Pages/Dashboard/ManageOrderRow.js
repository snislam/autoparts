import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ManageOrderRow = ({ order, index, refetch }) => {
    const { productName, quantity, totalPrice, name, email, productId } = order;
    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [productId])

    const handelDeliver = () => {
        const id = order._id;
        const orderUpdate = { shipped: true }
        const productUpdate = { quantity: (product.quantity - order.quantity) }
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(orderUpdate)
        }).then(res => res.json())
            .then(data => {
                if (data.matchedCount > 0) {
                    toast.success('Successfully delivered')
                    refetch();
                }
                console.log(data)
            });


        fetch(`http://localhost:5000/products/${productId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(productUpdate)
        }).then(res => res.json())
            .then(data => {
                if (data.matchedCount > 0) {
                    toast.success('Product quantity also updated')
                    refetch();
                }
                console.log(data)
            });
    }

    const handleDelete = () => {
        // <label for="confirmation-modal" class="btn modal-button">open modal</label>
        const confirmation = window.confirm('Are sure to cancel it?');

        if (confirmation) {
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
        } else {
            toast("Order kept!")
        }
    }


    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{productName}</td>
            <td>{quantity} pc.</td>
            <td>${totalPrice}</td>
            <td>
                {
                    !order.paid ? <span className='text-2xl text-red-500 font-semibold outline-2'>Unpaid</span> : <p className='text-2xl text-primary'>Paid</p>
                }
            </td>
            <td>
                {
                    (!order.shipped && order.paid) && <p className='text-lg'>Pending</p>
                }
                {
                    (order.shipped) && <p className='text-lg'>shipped</p>
                }
                {

                    (!order.paid) && <p className='text-lg text-red-700'>---</p>
                }
            </td>
            <td>
                {
                    (!order.shipped && order.paid) && <button onClick={handelDeliver} className='btn btn-primary'>Deliver</button>
                }
                {
                    (order.shipped) && <p className='text-lg'>Completed</p>
                }
                {

                    (!order.paid) && <button onClick={handleDelete} className='btn btn-warning'>Cancel</button>
                }
            </td>
        </tr>
    );
};

export default ManageOrderRow;