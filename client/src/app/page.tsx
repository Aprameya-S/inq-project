"use client"
import Hero from "@/components/Hero";
import { AnimatedCardBody, AnimatedCardContainer, AnimatedCardItem } from "@/components/ui/AnimatedCard";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards ";
import Image from "next/image";
import { title } from "process";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function page() {
 

  const services = [
    {
      slno:1,
      title:"Inspections And Audits",
      desc:"Comprehensive inspections and audits, leveraging advanced tools and expert knowledge to uphold stringent safety and quality protocols across diverse industrial sectors.",
      tags:["Third-Party Inspection","Facility Audit","Electrical Safety Audit"]
    },
    {
      slno:2,
      title:"Design And Review",
      desc:"Rigorous evaluation process to ensure all electrical, instrumentation, and mechanical designs comply with the latest engineering standards.",
      tags:["Engineering Design","Electrical Design Review","Technical Solutions"]
    },
    {
      slno:3,
      title:"Testing And Assessments",
      desc:"Detailed testing and assessments utilizing cutting-edge techniques to ensure our clients meet the highest industry standards for quality and safety.",
      tags:["Thermography Testing","Vendor Assessment"]
    },
  ]

  const reviews = [
    {
      quote:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias inventore accusantium voluptatem a quis in nemo odio dolore ipsa quae!",
      name:"odio dolore",
      title:"ipsum dolor"
    },
    {
      quote:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias inventore accusantium voluptatem a quis in nemo odio dolore ipsa quae!",
      name:"odio dolore",
      title:"ipsum dolor"
    },
    {
      quote:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias inventore accusantium voluptatem a quis in nemo odio dolore ipsa quae!",
      name:"odio dolore",
      title:"ipsum dolor"
    },
    {
      quote:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias inventore accusantium voluptatem a quis in nemo odio dolore ipsa quae!",
      name:"odio dolore",
      title:"ipsum dolor"
    },

  ]
  
  return (

    <main className="">
      <Hero/>

      <section className="my-[150px]">
        <h1 className="text-center mx-auto text-4xl w-[min(1150px,100%)] tracking-tight text-[#989797] font-medium leading-[50px]">
        Our comprehensive service portfolio encompasses third-party inspections, safety audits, facility audits, expediting activities, progress monitoring, and design reviews of Electro Mechanical Equipment. Equipped to handle inspections and audits for a wide range of industrial equipment and systems while ensuring adherence to stringent safety and quality standards.
        </h1>
      </section>

      {/* <section className="mx-[100px]">
        {
          coreFeatures.map((item:any,index:number) => (
          <div key={index} className="mb-[150px] grid grid-cols-2">  
            <div className="sticky top-5 h-fit">
              <div className="flex gap-1 mb-[60px]">
                <span className="text-sm uppercase font-medium text-ter border border-ter px-3 py-2 rounded-full">Core feature</span>
                <span className="text-sm font-medium text-black bg-ter rounded-full aspect-square w-[37.6px] grid justify-center items-center">{item.slno}</span>
              </div>

              <h3 className="text-sec text-4xl mb-[30px] font-light">{item.title}</h3>
              <div className="text-black bg-sec p-5 rounded-[15px] w-[600px]">
                {item.desc}
              </div>

            </div>
          
            <AnimatedCardContainer className="bg-ter rounded-[20px] py-[0px]">
              <AnimatedCardBody className="w-[500px] aspect-square">
                <img/>
              </AnimatedCardBody>
            </AnimatedCardContainer>
          </div>
          ))
        }
        
      </section> */}

      <section className="rounded-[25px] text-black pt-8 mb-4 pb-12 relative">
        {/* <h1 className="font-light text-5xl border-b border-gray-300 pb-8 px-16 mb-[60px]">Our Services</h1>

        <div className="px-16 grid grid-cols-3 gap-[60px]">
          <div className="bg-black rounded-[30px] overflow-hidden">
            <img className="my-[-30px]" src="./images/img1.png"/>
            <div className="p-7">
              <h3 className="text-sec mb-2">Daily Recap</h3>
              <p className="text-pri text-sm">Summarize daily activities, emotions, and thoughts, promote mindfulness and help gather data for the Memory Vault. Input information about activities, places visited, interactions, and mood to create a detailed record for reflection and memory retrieval.</p>
            </div>
          </div>
          <div className="bg-black rounded-[30px] overflow-hidden">
            <img className="my-[-30px]" src="./images/img2.png"/>
            <div className="p-7">
              <h3 className="text-sec mb-2">Daily Recap</h3>
              <p className="text-pri text-sm">Summarize daily activities, emotions, and thoughts, promote mindfulness and help gather data for the Memory Vault. Input information about activities, places visited, interactions, and mood to create a detailed record for reflection and memory retrieval.</p>
            </div>
          </div>
          <div className="bg-black rounded-[30px] overflow-hidden">
            <img className="my-[-30px]" src="./images/img3.png"/>
            <div className="p-7">
              <h3 className="text-sec mb-2">Daily Recap</h3>
              <p className="text-pri text-sm">Summarize daily activities, emotions, and thoughts, promote mindfulness and help gather data for the Memory Vault. Input information about activities, places visited, interactions, and mood to create a detailed record for reflection and memory retrieval.</p>
            </div>
          </div>
        </div>
        <h1 className="font-light text-5xl border-y border-gray-300 p-8 mt-[80px] px-16 mb-[60px]">Lorem, ipsum.</h1> */}
        <div className="relative">
          <p className="bg-pri text-sec w-[500px] rounded-[20px] text-md p-5 ml-16 z-10 relative">
            We strive to establish strategic partnerships with our clients by delivering reliable and efficient inspection and quality services.
          </p>
          <img className="w-full mt-[-30px]" src="./images/cards.png" alt="" />
          <p className="bg-pri text-sec w-[500px] rounded-[20px] text-md p-5 ml-auto mr-16">
            Our goal is to help our clients achieve their operational objectives while upholding the highest levels of safety and quality in every project.
          </p>
        </div>
      </section>

      <h1 className="font-medium text-7xl mx-4 my-[30px]  flex gap-2 items-baseline __className_24f709">
        <div className="w-[80px] bg-ter h-[36px]"></div>
        What we do
      </h1>
      <section className="m-4 grid grid-cols-2 grid-rows-2 h-[600px] rounded-[20px] overflow-hidden border border-pri">
        <Link href='/' className="border-r border-pri relative row-span-2 group p-6 overflow-hidden">
          <h2 className="font-semibold text-4xl flex justify-between __className_24f709">
            {services[0].title}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" w-[30px] aspect-square transition-all"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
          </h2>

          <p className="font-medium mt-2">{services[0].desc}</p>

          <div className="flex flex-wrap gap-3 left-0 px-6 absolute bottom-8 group-hover:bottom-[-100%] transition-all duration-500">
            <span className="bg-[#e3e3e3] border border-gray-400 font-medium flex gap-2 items-center rounded-full px-4 py-1">
              <div className="bg-red-600 w-[10px] h-[10px] rounded-full "></div>
              {services[0].tags[0]}
            </span>
            <span className="bg-[#e3e3e3] border border-gray-400 font-medium flex gap-2 items-center rounded-full px-4 py-1">
              <div className="bg-red-600 w-[10px] h-[10px] rounded-full "></div>
              {services[0].tags[1]}
            </span>
            <span className="bg-[#e3e3e3] border border-gray-400 font-medium flex gap-2 items-center rounded-full px-4 py-1">
              <div className="bg-red-600 w-[10px] h-[10px] rounded-full "></div>
              {services[0].tags[2]}
            </span>
          </div>
          
          <div className="absolute bottom-[-100%] group-hover:bottom-0 transition-all duration-500 left-0">
            <Marquee className="font-bold text-[150px] leading-[1]" speed={200}>
              {services[0].title}
              <span className="text-[14px] flex gap-1 items-center font-medium"><svg className="fill-ter w-[40px] aspect-square mx-[20px]" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Icon_Cross Hatch/Large"><path id="Cross Hatch" fillRule="evenodd" clipRule="evenodd" d="M240 191.987V138.022L138.022 240H191.987L240 191.987ZM79.7958 240L240 79.7958V25.8309L25.8309 240H79.7958ZM0 207.606L207.606 0H153.641L0 153.641V207.606ZM0 95.4154L95.4154 0H41.4504L0 41.4504V95.4154Z"></path></g></svg></span>
            </Marquee>
          </div>
        </Link>

        <Link href='/' className="border-b border-pri relative group p-6 overflow-hidden">
          <h2 className="font-semibold text-4xl flex justify-between __className_24f709">
            {services[1].title}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" w-[30px] aspect-square transition-all"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
          </h2>

          <p className="font-medium mt-2">{services[1].desc}</p>

          <div className="flex flex-wrap gap-3 left-0 px-6 absolute bottom-8 group-hover:bottom-[-100%] transition-all duration-500">
            <span className="bg-[#e3e3e3] border border-gray-400 font-medium flex gap-2 items-center rounded-full px-4 py-1">
              <div className="bg-red-600 w-[10px] h-[10px] rounded-full "></div>
              {services[1].tags[0]}
            </span>
            <span className="bg-[#e3e3e3] border border-gray-400 font-medium flex gap-2 items-center rounded-full px-4 py-1">
              <div className="bg-red-600 w-[10px] h-[10px] rounded-full "></div>
              {services[1].tags[1]}
            </span>
            <span className="bg-[#e3e3e3] border border-gray-400 font-medium flex gap-2 items-center rounded-full px-4 py-1">
              <div className="bg-red-600 w-[10px] h-[10px] rounded-full "></div>
              {services[1].tags[2]}
            </span>
          </div>
          
          <div className="absolute bottom-[-100%] group-hover:bottom-0 transition-all duration-500 left-0">
            <Marquee className="font-bold text-[100px] leading-[1]" speed={200}>
              {services[1].title}
              <span className="text-[14px] flex gap-1 items-center font-medium"><svg className="fill-ter w-[40px] aspect-square mx-[20px]" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Icon_Cross Hatch/Large"><path id="Cross Hatch" fillRule="evenodd" clipRule="evenodd" d="M240 191.987V138.022L138.022 240H191.987L240 191.987ZM79.7958 240L240 79.7958V25.8309L25.8309 240H79.7958ZM0 207.606L207.606 0H153.641L0 153.641V207.606ZM0 95.4154L95.4154 0H41.4504L0 41.4504V95.4154Z"></path></g></svg></span>
            </Marquee>
          </div>
        </Link>

        <Link href='/' className=" relative group p-6 overflow-hidden">
          <h2 className="font-semibold text-4xl flex justify-between __className_24f709">
            {services[2].title}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" w-[30px] aspect-square transition-all"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
          </h2>

          <p className="font-medium mt-2">{services[2].desc}</p>

          <div className="flex flex-wrap gap-3 left-0 px-6 absolute bottom-8 group-hover:bottom-[-100%] transition-all duration-500">
            <span className="bg-[#e3e3e3] border border-gray-400 font-medium flex gap-2 items-center rounded-full px-4 py-1">
              <div className="bg-red-600 w-[10px] h-[10px] rounded-full "></div>
              {services[2].tags[0]}
            </span>
            <span className="bg-[#e3e3e3] border border-gray-400 font-medium flex gap-2 items-center rounded-full px-4 py-1">
              <div className="bg-red-600 w-[10px] h-[10px] rounded-full "></div>
              {services[2].tags[1]}
            </span>
            
          </div>
          
          <div className="absolute bottom-[-100%] group-hover:bottom-0 transition-all duration-500 left-0">
            <Marquee className="font-bold text-[100px] leading-[1]" speed={200}>
              

              {services[2].title}
              <span className="text-[14px] flex gap-1 items-center font-medium"><svg className="fill-ter w-[40px] aspect-square mx-[20px]" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Icon_Cross Hatch/Large"><path id="Cross Hatch" fillRule="evenodd" clipRule="evenodd" d="M240 191.987V138.022L138.022 240H191.987L240 191.987ZM79.7958 240L240 79.7958V25.8309L25.8309 240H79.7958ZM0 207.606L207.606 0H153.641L0 153.641V207.606ZM0 95.4154L95.4154 0H41.4504L0 41.4504V95.4154Z"></path></g></svg></span>
              
            
            </Marquee>
          </div>
        </Link>
      </section>

      {/* <section className="my-[150px]">
        <h1 className="text-center mx-auto text-6xl w-[min(1100px,100%)] text-pri font-light leading-[70px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus suscipit Lorem, ipsum dolor.ipsum
        </h1>

        <h2 className="text-center mx-auto w-[min(1000px,100%)] text-pri mt-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet a illum odio illo deserunt quasi non ipsum doloribus ullam quis. Sunt voluptatem sequi, aut ullam maxime fuga modi dicta sit Lorem ipsum dolor sit amet, consectetur adipisicing.
        </h2>
      </section>

      <section className="rounded-[25px] border border-sec m-4 overflow-hidden">
        <h1 className="text-sec text-5xl font-light mt-8 mx-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque minus aspernatur repudiandae mollitia cum inventore nobis distinctio porro repellat odio.</h1>

        <h2 className="border border-ter rounded-[20px] mx-16 px-5 py-8 text-ter flex text-[30px] my-[50px] items-center gap-4">
          <div className=" w-[30px] h-[30px] bg-sec rounded-full"></div>
          Lorem ipsum dolor sit amet consectetur adipis
        </h2>

        <p className="bg-sec text-black w-[500px] rounded-[25px] text-sm p-5 ml-16 z-10 relative mb-[-100px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius molestiae nulla tempora aspernatur harum dolorum porro vitae voluptate possimus veritatis!
          </p>
        <img className="z-[-1] relative" src="./images/img5.png" alt="" />
      </section> */}


  
      {/* <section className="mt-[80px] ">
        <InfiniteMovingCards items={reviews} direction="right" speed="normal" pauseOnHover={true}/>
      </section> */}


    </main>
  );
}
