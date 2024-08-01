import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BgSlide, LogoHero } from '../../../../../public/img/landing'

export default function Hero() {
    return (
        <section className='px-16 flex  justify-between items-center'>
            <Image src={BgSlide}alt='' className='absolute right-0 h-[650px] top-0'/>
            <div  className=' z-30'>
                <h2 className='text-5xl font-bold w-96 text-[#02366E]'>Selamat Datang Di Kafe Koding</h2>
                <p className='w-[500px] pt-5'>Kafe koding merupakan sebuah komunitas belajar yang bergerak dibidang IT dan juga tempat sharing ilmu programing dan seputar dunia IT</p>
                <Link href={''}>
                    <button className='mt-5 bg-[#02366E] p-3 font-bold rounded-lg text-white'>
                        Bergabung Sekarang
                    </button>
                </Link>
            </div>
            <div className='z-50'>
                <Image src={LogoHero} alt='' className='w-[500px]'/>
            </div>
        </section>
    )
}
