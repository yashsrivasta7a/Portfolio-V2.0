import Image from "next/image";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floatingnav";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/grid";

export default function Home(){
  return(
<main className="bg-black-100 flex justify-center items-center flex-coloverflow-hidden">
  <div className="w-full">
   <FloatingNav
   navItems={[{
    name :"Home" , link :'/',icon:<FaHome/>}
   ]}/>
    <Hero />
    <Grid />
  </div>
</main>
  );
}