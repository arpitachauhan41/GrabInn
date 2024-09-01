import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

function LatestCollection() {
    const { products } = useContext(ShopContext); 
    const [ LatestProducts, setLatestProducts ] = useState([]);
    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[])
    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Explore our latest collections, where fashion meets innovation. From contemporary designs to timeless classics, we’ve curated a selection that caters to every style. Whether you’re looking for chic everyday wear or standout pieces for special occasions, our new arrivals offer something for everyone. Stay ahead of the trends and refresh your wardrobe with our newest additions.</p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {LatestProducts.map((item, index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                ))}
            </div>
        </div>
    )
}

export default LatestCollection
