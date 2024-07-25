import React from "react";
import {
  Rectangle1,
  Rectangle2,
  Rectangle3,
  Rectangle4,
} from "../../../../../public/img/landing";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="px-16">
      <h2 className="font-bold text-xl text-center">Tentang Kami</h2>
      <div className="grid grid-cols-2 gap-10 justify-center mx-auto pt-10 items-center ">
        <div className="">
            <div className="flex">
                <Image src={Rectangle1} alt="" className="p-3"/>
                <Image src={Rectangle2} alt="" className="p-3"/>
            </div>
            <div className="flex pt-2">
            <Image src={Rectangle3} alt="" className="p-3"/>
            <Image src={Rectangle4} alt="" className="p-3"/>
            </div>
        </div>
        <div>
          <p className="font-semibold">
            Kafe koding merupakan sebuah komunitas belajar yang bergerak
            dibidang IT, berdiri pada tanggal 1 Agustus 2013 Tujuan dibentuknya
            komunitas ini ialah dilandasi dengan keinginan untuk berbagi ilmu
            bagi masyarakat ekonomi rendah dan masyarakat yang putus sekolah
            Kami menerima siapapun yang ingin belajar bersama kami dalam
            mengasah kemampuan softskill dibidang IT hingga siap untuk dunia
            kerja
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad at labore, earum quam autem recusandae, alias aperiam in ipsum quod doloribus eaque praesentium facere nam asperiores mollitia distinctio voluptatum voluptatibus, eos optio sed expedita! Dolore pariatur culpa quaerat voluptatem suscipit! Lorem ipsum, dolor sit amet consectetur 
          </p>
        </div>
      </div>
    </section>
  );
}
