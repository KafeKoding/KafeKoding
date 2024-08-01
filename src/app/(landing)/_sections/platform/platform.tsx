import Image from 'next/image'
import React from 'react'
import { BgVector, PlatformGroup1, PlatformGroup2, PlatformGroup3 } from '../../../../../public/img/landing'
import { title } from 'process'
import Link from 'next/link'

export default function Platform() {
    const GroupPlatform = [
        {
            title: 'Kelas Diskusi',
            Image: PlatformGroup1,
            paragraf: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias cupiditate corrupti eum ad maiores ratione praesentium facere beatae nostrum alias?',
            Button: 'Yuk Diskusi Sekarang',
        },
        {
            title: 'Explorasi Projek',
            Image: PlatformGroup2,
            paragraf: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias cupiditate corrupti eum ad maiores ratione praesentium facere beatae nostrum alias?',
            Button: 'Yuk Jelajahi',
        },
        {
            title: 'Blogging',
            Image: PlatformGroup3,
            paragraf: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias cupiditate corrupti eum ad maiores ratione praesentium facere beatae nostrum alias?',
            Button: 'Yuk Diskusi Sekarang',
        },
    ]
    return (
        <section className=' '>
            <Image src={BgVector} alt='' className='absolute h-[700px]'/>
            <div className=' grid grid-cols-3 gap-10 text-center pt-52 px-16 '>
                {GroupPlatform.map((item, i) => (
                    <ul key={i} className='bg-slate-100  rounded-b-full z-50'>
                        <li>
                            <Image src={item.Image} alt='' className='w-24 ' />
                            <span className='font-bold'>{item.title}</span>
                            <p className='pt-5 p-4'>{item.paragraf}</p>
                            <Link href={''}>
                            <button className='bg-[#F4C247] font-semibold w-full h-12 rounded-b-xl mt-5  text-white'>{item.Button}</button>
                            </Link>

                        </li>
                    </ul>
                ))}
            </div>

        </section>
    )
}
