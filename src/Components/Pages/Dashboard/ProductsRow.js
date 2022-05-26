import React from 'react';
import { toast } from 'react-toastify';

const ProductsRow = ({ product, index, refetch }) => {
    const { name, quantity, min_order_qnt, price } = product;

    const handleDelete = () => {
        // <label for="confirmation-modal" class="btn modal-button">open modal</label>
        const confirmation = window.confirm('After deleteing it, It remove frome homepage also.');

        if (confirmation) {
            fetch(`https://morning-bayou-19534.herokuapp.com/products/${product._id}`, {
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
            toast("Product kept!")
        }
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{quantity} pc.</td>
            <td>{min_order_qnt} pc.</td>
            <td>${price}</td>
            <td><button onClick={handleDelete} className='btn'>Delete</button></td>
        </tr>
    );
};

export default ProductsRow;