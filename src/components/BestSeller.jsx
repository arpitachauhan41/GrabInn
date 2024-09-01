import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const {products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);
    useEffect(()=>{
        const bestProduct = products.filter((item)=>(item.bestseller));
        setBestSeller(bestProduct.slice(0,5));
    },[])
    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={'BEST'} text2={'SELLERS'}/>
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Discover our best sellers, the most-loved pieces that our customers can't get enough of. These top picks are popular for a reason—they combine style, comfort, and quality in ways that resonate with fashion enthusiasts. From versatile wardrobe staples to statement pieces that turn heads, our best sellers showcase the very best of what GrabInn has to offer. Shop now and find out why these items are everyone’s favorites!</p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6'>
                {bestSeller.map((item, index)=>(
                    <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
                ))}
            </div>
        </div>
    )
}

export default BestSeller
