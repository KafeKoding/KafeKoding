import Image from 'next/image'
import React from 'react'
import { LogoKK } from '../../../public/img/landing'
import Link from 'next/link'


const Navbar = () => {
  return (
    <section className='flex justify-between items-center px-12 py-5'>
        <div className='flex items-center'>
            <Image src={LogoKK} alt='Logo Kafekoding'/>
            <span className='font-bold text-[#02366E] text-xl pl-2'>Kafekoding</span>
        </div>
        <div className='z-30'>
            <ul className='flex items-center font-semibold text-[#02366E]'>
              <Link href={'/'}>
                <li className='pl-6'>Home</li>
              </Link>
              <Link href={'/class'}>
                <li className='pl-6'>Class</li>
              </Link>
              <Link href={'/class'}>
                <li className='pl-6'>Mentor</li>
              </Link>
              <Link href={'/class'}>
                <li className='pl-6'>About</li>
              </Link>
              <Link href={'/class'}>
                <li className='ml-[92px] border-2 text-white w-24 h-12 items-center justify-center flex rounded-full'>Login</li>
              </Link>
              <p className='font-bold ml-3 text-2xl text-white'>|</p>
              <Link href={'/class'}>
                <li className='ml-3 text-black bg-white w-24 h-12 items-center justify-center flex rounded-full'>Register</li>
              </Link>
            </ul>
        </div>
    </section>
  )
}

export default Navbar