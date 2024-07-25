import Image from "next/image";
import Page from "./page";
import {Hero, Platform, RowClass, ShowCase} from "./_sections";
import AboutUs from "./_sections/about-us/about-us";

export default function Home() {
  return (
   <main>
    <Hero/>
    <AboutUs/>
    <Platform/>
    <ShowCase/>
    <RowClass/>
   </main>
  );
}
