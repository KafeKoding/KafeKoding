import React from 'react'
import { LogoHTML, LogoLAravel, LogoMsql, LogoPHP } from '../../../../../public/img/landing'
import Image from 'next/image'

export default function RowClass() {
    const GroupClass=[
        {
            Image:LogoHTML,
            time:'kosong',
            title:'Kelas HTML & CSS',
            button:'Gabung Sekarang'
        },
        {
            Image:LogoPHP,
            time:'kosong',
            title:'Kelas PHP',
            button:'Gabung Sekarang'
        },
        {
            Image:LogoLAravel,
            time:'kosong',
            title:'Kelas Laravel',
            button:'Gabung Sekarang'
        },
        {
            Image:LogoMsql,
            time:'kosong',
            title:'Kelas MysQl',
            button:'Gabung Sekarang'
        },
    ]
  return (
    <section className='px-16 pt-10'>
        <h2 className='font-bold text-xl text-center'>Kelas Kafe Koding</h2>
        <div className='pt-5 grid grid-cols-4'>
            {GroupClass.map((item,i)=>(
                <ul key={i}>
                    <li>
                        <Image src={item.Image} alt=''/>
                    </li>
                </ul>
            ))}

        </div>
    </section>
  )
}
