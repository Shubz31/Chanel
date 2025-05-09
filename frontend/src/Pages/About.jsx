import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets';
import NewsLetterBox from '../Components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='pt-8 text-2xl text-center border-t'>
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className='flex flex-col gap-16 my-10 md:flex-row'>
        <img className='w-full md:max-w-[450px]' src={assets.about_us_1} alt="" />
        <div className='flex flex-col justify-center gap-6 text-gray-600 md:w-2/4'>
          <p className='text-2xl text-gray-800'>CHANEL IS AN INDEPENDENT COMPANY THAT BELIVES IN THE FREEDOM OF CREATION, CULTIVATES HUMAN POTENTIAL AND ACTS TO HAVE A POSITIVE IMPACT IN THE WORLD.</p>
          <p className='text-gray-700'>We offer a unique work environment, grounded in creating the conditions for people to perform at their best and feel fulfilled and confident in their work. We facilitate this through three pillars.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p className='text-gray-700'>We ensure everyone is nourished to grow, be inspired and feel included for the long term. Such as, Protecting the first 100 days for our people to create meaningful relationships and understand our culture at the beginning of their journey with Chanel. Enabling our people to consider meaningful flexibility within their métier</p>
        </div>
      </div>
      <div className='py-4 text-2xl'>
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className='flex flex-col mb-20 text-sm md:flex-row'>
        <div className='flex flex-col gap-5 px-10 py-8 border border-gray-200 md:px-16 sm:py-20'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We Meticulously select and vet each product to ensure it meets our stringent quality standards. </p>
        </div>
        <div className='flex flex-col gap-5 px-10 py-8 border border-gray-200 md:px-16 sm:py-20'>
          <b>Convenience:</b>
          <p className='text-gray-600'>With our user friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className='flex flex-col gap-5 px-10 py-8 border border-gray-200 md:px-16 sm:py-20'>
          <b>Exceptional Customer:</b>
          <p className='text-gray-600'>Our team od dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>

    <NewsLetterBox />

    </div>
  )
}

export default About
