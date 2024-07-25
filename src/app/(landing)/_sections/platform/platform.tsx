import Image from 'next/image'
import React from 'react'
import { PlatformGroup1, PlatformGroup2, PlatformGroup3 } from '../../../../../public/img/landing'
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
        <section className='pt-16 px-16 bg-blue-200 p-16 '>
            <div className=' grid grid-cols-3 gap-10 text-center'>
                {GroupPlatform.map((item, i) => (
                    <ul key={i} className='bg-slate-300 p-3 rounded-xl'>
                        <li>
                            <Image src={item.Image} alt='' className='w-24 ' />
                            <span className='font-bold'>{item.title}</span>
                            <p className='pt-5'>{item.paragraf}</p>
                            <Link href={''}>
                            <button className='bg-blue-600 font-semibold p-3 mt-5 rounded-xl text-white'>{item.Button}</button>
                            </Link>

                        </li>
                    </ul>
                ))}
            </div>

        </section>
    )
}
