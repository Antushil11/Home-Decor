import React, { useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { loadWishlist } from '../utils/localStorage';

const Wishlist = () => {
    const [wishList, setWishList] = useState(() => loadWishlist())
    const [sortOrder, setSortOrder] = useState('none')

    // useEffect(() => {
    //     const savedList = JSON.parse(localStorage.getItem('wishlist'))
    //     if (savedList) setWishList(savedList)
    // }, [])


    if (!wishList.length) return <p className='text-center'>No Data avabliable</p>



    const sortedItem = (() => {
        if (sortOrder === 'price-asc') {
            return [...wishList].sort((a, b) => a.price - b.price)
        } else if (sortOrder === 'price-dsc') {
            return [...wishList].sort((a, b) => b.price - a.price)
        }
        else {
            return wishList;
        }
    })()



    const handleRemove = (id) => {
        const existingList = JSON.parse(localStorage.getItem('wishlist'))
        let updatedList = existingList.filter(p => p.id !== id)

        ////for ui update
        setWishList(updatedList)

        localStorage.setItem('wishlist', JSON.stringify(updatedList))

    }



    ////////////

    const totalByCategory = {}

    wishList.forEach(product => {
        const category = product.category;
        totalByCategory[category] = (totalByCategory[category] || 0) + product.price;
    })


    const chartData = Object.keys(totalByCategory).map(category => ({
        category,
        total: totalByCategory[category]
    }))



    return (
        <div className='space-y-6'>
            <div>
                <div className='flex justify-between items-center py-5 '>
                    <h1 className='text-3xl font-semibold'>wishList{''}
                        <span className='text-sm text-gray-500'>({wishList.length}) Products Found.</span>
                    </h1>

                    <label className='form-control w-full max-w-xs'>
                        <select
                            value={sortOrder}
                            className='select select-bordered'
                            onChange={e => setSortOrder(e.target.value)}
                        >
                            <option value="none">Sort by Price</option>
                            <option value="price-asc">Low-&gt;High</option>
                            <option value="price-dsc">High-&gt;Low</option>
                        </select>

                    </label>

                </div>
            </div>


            <div className=''>
                {
                    sortedItem.map(p => <div key={p.id} className="card card-side bg-base-100 shadow-sm mt-4 border-2 ">
                        <figure>
                            <img className='w-60 h-full '
                                src={p.image}
                                alt={p.name} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{p.name}</h2>
                            <p>{p.category}</p>

                            <p className='font-semibold'>${p.price}</p>
                            <div className="card-actions justify-end">
                                <button onClick={() => handleRemove(p.id)} className="btn btn-outline">Remove </button>
                            </div>
                        </div>
                    </div>)
                }

            </div>


            {/* chart */}

            <div className='space-y-2'>
                <h3 className='text-xl font-semibold'>Wishlist Summary</h3>
                <div className='bg-base-100 border rounded-xl p-4 h-80'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart

                            data={chartData}

                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="category" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="total" fill="#8884d8" />

                        </BarChart>
                    </ResponsiveContainer>
                </div>

            </div>
        </div>
    );
};

export default Wishlist;



