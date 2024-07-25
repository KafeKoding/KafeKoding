import Image from 'next/image'
import React from 'react'
import { LogoKK } from '../../../public/img/landing'


const Navbar = () => {
  return (
    <section className='flex justify-between items-center px-16 py-5'>
        <div className='flex items-center'>
            <Image src={LogoKK} alt='Logo Kafekoding'/>
            <span className='font-bold text-xl pl-2'>Kafekoding</span>
        </div>
        <div>
            <ul className='flex font-semibold'>
                <li className='pl-6'>Home</li>
                <li className='pl-6'>Class</li>
                <li className='pl-6'>Mentor</li>
                <li className='pl-6'>About</li>
                <li className='pl-6'>Register</li>
            </ul>
        </div>
    </section>
  )
}

export default Navbar