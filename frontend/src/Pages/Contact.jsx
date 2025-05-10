import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='pt-10 text-2xl text-center border-t'>
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className='flex flex-col justify-center gap-10 my-10 md:flex-row mb-28'>
        <img className='w-full md:max-w-[450px] max-h-[600px] object-cover rounded-md' src={assets.contact_us_1} alt="" />
        <div className='flex flex-col items-start justify-center gap-6'>
          <p className='text-xl font-semibold text-gray-800'>OUR STORE</p>
          <p className='text-gray-500'>Shop no.911 Pheonix Mall <br/> Viman Nagar, Pune, India</p>
          <p className='text-gray-500'>+1-212-456-7890 <br/> contact@chanelforyou.com</p>
          <p className='text-xl font-semibold text-gray-800'>CAREERS AT CHANEL</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <p className='px-8 py-4 text-sm transition-all duration-500 border border-black cursor-pointer hover:bg-black hover:text-white'>Explore Jobs</p>
        </div>
      </div>

    </div>
  )
}

export default Contact
