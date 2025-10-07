import React from 'react';
import { Link } from 'react-router';
import ProductCard from '../Components/ProductCard';
import useProducts from '../Hooks/useProducts';
import SkeletonLoader from '../Components/SkeletonLoader';

const Home = () => {

    // const products = useLoaderData()

    const { products, loading } = useProducts()
    // console.log(data)
    const featureProducts = products.slice(0, 6)
    // console.log(products)

    return (
        <div>

            <div className='flex justify-between items-center py-5 '>
                <h1 className='text-3xl font-semibold'>featured Products</h1>
                <Link className='btn btn-outline' to="/products">See All Products</Link>
            </div>
            {
                loading ? <SkeletonLoader></SkeletonLoader> : <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

                    {
                        featureProducts.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                    }
                </div>
            }



        </div>
    );
};

export default Home;