import React from 'react';

const SkeletonLoader = ({count = 6}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>

            {
                Array.from({ length: count }).map((_, index) => (
                    <div key={index} className="flex w-52 flex-col gap-4">
                            <div  className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>

                    </div>

                ))}


        </div>
    );
};

export default SkeletonLoader;

