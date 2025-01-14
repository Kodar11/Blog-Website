"use client";
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios';

const Header = () => {

  const [email, setEmail] = useState("")

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);

    const response = await axios.post('https://blog-website-loq9b46bv-kodar11s-projects.vercel.app/api/email', formData);

    if (response.data.success) {
      toast.success("Subscribed")
      setEmail("")
    }
    else {
      toast.error("Error")
    }
  }
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center'>
        <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto' />
        <button className='flex items-center gap-2 font-medium py-1 px- sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>Get Started <Image src={assets.arrow} alt='' /> </button>
      </div>
      <div className="text-center my-8" >
        <h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs</h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas consequuntur rem alias repudiandae enim? Aperiam quo sint dignissimos sed animi.</p>
        <form onSubmit={onSubmitHandler} action="" className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]">
          <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='Enter your email' className='pl-4 outline-none' />
          <button type='submit' className="border-1 border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white">Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default Header