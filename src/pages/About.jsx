import React from 'react'
import Title from './../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from './../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At GrabInn, we believe that fashion should be fun, accessible, and personal. Our mission is to make your shopping experience as effortless and enjoyable as possible by offering a curated selection of stylish clothing that reflects the latest trends and timeless classics.</p>
          <p>Whether you’re searching for everyday essentials or standout statement pieces, GrabInn is here to help you express yourself through fashion. Explore our collections and experience a shopping destination where style meets convenience.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At GrabInn, our mission is to empower individuals to express their unique style by providing a carefully curated selection of fashionable clothing. We strive to create a shopping experience that is not only enjoyable but also personalized, offering quality pieces that resonate with your lifestyle. We believe that fashion should be accessible, inspiring, and a reflection of who you are.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>At GrabInn, we prioritize quality above all else. Each piece of clothing is carefully selected and thoroughly inspected to meet our high standards. We ensure that every item you purchase is made with premium materials and crafted with care, so you can feel confident in your choices and enjoy long-lasting wear.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Your time is valuable, and we’ve designed GrabInn to make shopping as seamless as possible. From easy navigation to swift checkout and reliable delivery, we ensure a hassle-free experience from start to finish. Whether you're on-the-go or relaxing at home, shopping for your favorite fashion pieces has never been easier.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>At GrabInn, our customers are at the heart of everything we do. We are committed to providing you with a superior shopping experience, from the moment you browse our collections to the time your order arrives. Our dedicated support team is always ready to assist with any questions or concerns, ensuring your satisfaction every step of the way. Your happiness is our top priority.</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About