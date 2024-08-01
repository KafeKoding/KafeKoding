import Image from 'next/image'
import React from 'react'
import { Rectangle5, Rectangle6 } from '../../../../../public/img/landing'
import { title } from 'process'
import Link from 'next/link'
export default function ShowCase() {
    const GroupShowCase = [
        {
            Image: Rectangle5,
            title: 'Research Aplikasi Line dengan case study bagaimana cara meningkatkan User',
            tech: 'UI/UX Design',
            button: 'Lihat',
        },
        {
            Image: Rectangle6,
            title: 'Perancangan dan Pembuatan website kafe koding menggunakan HTML & CSS',
            tech: 'HTML & CSS',
            button: 'Lihat',
        },
        {
            Image: Rectangle5,
            title: 'Membuat Platform Galeri photos menggunakan Front End',
            tech: 'JavaScript',
            button: 'Lihat',
        },
    ]
    return (
        <section className='px-16 pt-32'>
            <h2 className='text-center font-bold text-xl'>Show Case</h2>
            <div className='grid grid-cols-3 gap-5 pt-10'>
                {GroupShowCase.map((item, i) => (
                    <ul key={i} className='flex justify-center'>
                        <li>
                            <Image src={item.Image} alt='' className=' '/>
                            <p className='font-semibold text-center w-[300px] pt-5'>
                                {item.title}
                            </p>
                            <div className='pt-4 flex-col flex items-center text-center '>
                                <i className='text-[12px]  text-slate-700 '>{item.tech}</i>
                                <div className=' flex items-center'>
                                <Link href={''}>
                                    <button className='bg-blue-700 mt-5 text-white px-3 p-1  font-semibold rounded-lg'>
                                        {item.button}
                                    </button>
                                </Link>
                                </div>

                            </div>
                        </li>
                    </ul>
                ))}
            </div>
        </section>
    )
}
