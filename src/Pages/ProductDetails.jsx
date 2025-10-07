import React from 'react';
import { Link, useParams } from 'react-router';
import useProducts from '../Hooks/useProducts';

const ProductDetails = () => {
    let { id } = useParams();

    const { products, loading } = useProducts();
    // console.log(products)

    const product = products.find(p => (p.id) === Number(id))
    // console.log(product)

    if (loading) return <p>loading .......</p>

    const { name, image, price, category, description } = product || {};



    const handleAddToWishList = () => {
        const existingList = JSON.parse(localStorage.getItem('wishlist'))
        let updatedList = []
        if (existingList) {
            const isDuplicate = existingList.some(p => p.id === product.id)
            if (isDuplicate) return alert('Sorry vai')
            updatedList = [...existingList, product]
        } else {
            updatedList.push(product)
        }
        localStorage.setItem('wishlist', JSON.stringify(updatedList))
    }


    return (
        <div className="card bg-base-100 border shadow-sm ">
            <figure className='h-48 overflow-hidden'>
                <img className='w-full object-cover'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>Category: {category}</p>
                <p>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleAddToWishList} className="btn btn-outline">Add to Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;