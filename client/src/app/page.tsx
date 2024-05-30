"use client"
import Hero from "@/components/Hero";
import { AnimatedCardBody, AnimatedCardContainer, AnimatedCardItem } from "@/components/ui/AnimatedCard";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards ";
import Image from "next/image";
import { title } from "process";

export default function page() {
  const coreFeatures = [
    {
      slno:"01",
      title:"Lorem, ipsum.",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolore, ullam, optio provident possimus enim vitae incidunt obcaecati ea labore minus autem animi dignissimos nemo ut, "
    },
    {
      slno:"01",
      title:"Lorem, ipsum.",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolore, ullam, optio provident possimus enim vitae incidunt obcaecati ea labore minus autem animi dignissimos nemo ut, "
    },
    {
      slno:"01",
      title:"Lorem, ipsum.",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolore, ullam, optio provident possimus enim vitae incidunt obcaecati ea labore minus autem animi dignissimos nemo ut, "
    },
    {
      slno:"01",
      title:"Lorem, ipsum.",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolore, ullam, optio provident possimus enim vitae incidunt obcaecati ea labore minus autem animi dignissimos nemo ut, "
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
        <h1 className="text-center mx-auto text-6xl w-[min(1100px,100%)] text-pri font-light leading-[70px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus suscipit Lorem, ipsum dolor.ipsum
        </h1>

        <h2 className="text-center mx-auto w-[min(1000px,100%)] text-pri mt-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet a illum odio illo deserunt quasi non ipsum doloribus ullam quis. Sunt voluptatem sequi, aut ullam maxime fuga modi dicta sit Lorem ipsum dolor sit amet, consectetur adipisicing.
        </h2>
      </section>

      <section className="mx-[100px]">
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
        
      </section>

      <section className="rounded-[25px] bg-[#fbffe9] text-black m-4 pt-8 pb-12 relative">
        <h1 className="font-light text-5xl border-b border-gray-300 pb-8 px-16 mb-[60px]">Our Services</h1>

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
        <h1 className="font-light text-5xl border-y border-gray-300 p-8 mt-[80px] px-16 mb-[60px]">Lorem, ipsum.</h1>
        <div className="relative">
          <p className="bg-sec text-black w-[500px] rounded-[25px] text-sm p-5 ml-16 z-10 relative">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius molestiae nulla tempora aspernatur harum dolorum porro vitae voluptate possimus veritatis!
          </p>
          <img className="w-full mt-[-30px]" src="./images/img4.png" alt="" />
          <p className="bg-sec text-black w-[500px] rounded-[25px] text-sm p-5 ml-auto mr-16">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius molestiae nulla tempora aspernatur harum dolorum porro vitae voluptate possimus veritatis!
          </p>
        </div>
      </section>

      <section className="my-[150px]">
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
      </section>
  
      <section className="mt-[80px]">
        <InfiniteMovingCards items={reviews} direction="right" speed="normal" pauseOnHover={true}/>
      </section>


    </main>
  );
}
