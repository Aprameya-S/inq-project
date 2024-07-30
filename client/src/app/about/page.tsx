import React from 'react'

const Page = () => {
  return (
    <div className="pt-[120px] m-4">
      <h1 className="font-medium text-7xl __className_24f709 my-[30px] flex gap-2 items-baseline">
        <div className="w-[80px] bg-ter h-[36px]"></div>
        Who we are
      </h1>


      <section className="grid grid-cols-2 gap-8">
        
        <div className="grid text-[18px]">
          <h2 className='text-left col-span-4 py-6 w-[min(500px,100%)]'>
            I & Q Consultancy, headquartered in Bangalore, is a distinguished provider of third-party inspection services. Established as a partnership firm, we uphold an unwavering commitment to delivering exceptional quality and safety in every inspection. Our team of seasoned professionals brings decades of collective experience and expertise across various industrial sectors, ensuring our clients receive the highest standard of service.
          </h2>

          <h2 className='text-right col-span-4 py-6 w-[min(630px,100%)] place-self-end'>
          Specializing in Electrical, Instrumentation, and Mechanical inspections, our dedicated team of highly qualified freelancers comprises industry experts. We serve diverse sectors including Power, Aerospace, Defence, Railways, Healthcare, Automotive, Steel, Cement, Infrastructure, Petrochemicals, and Renewable Energy.
          </h2>
        </div>

        <div className="">
          <img src="images/red.png" alt="" />
          <div className="grid grid-cols-2 bg-pri text-qua">
            <p className='border-r border-qua p-4 text-[18px]'><b className='text-[30px] font-semibold __className_24f709 tracking-wider'>20+</b> Inspections</p>
            <p className=' p-4 text-[18px]'><b className='text-[30px] font-semibold __className_24f709 tracking-wider'>30+</b> Partners</p>
          </div>
        </div>
      </section>
      
      
      <section className="my-[100px]">
        <h1 className="text-center mx-auto text-4xl w-[min(1150px,100%)] tracking-tight text-[#989797] font-medium leading-[50px]">
          Our comprehensive service portfolio encompasses third-party inspections, safety audits, facility audits, expediting activities, progress monitoring, and design reviews of Electro Mechanical Equipment. We are equipped to handle inspections and audits for a wide range of industrial equipment and systems, ensuring adherence to stringent safety and quality standards.
        </h1>
      </section>


      <section className='bg-[#e3e3e3] px-[100px] pb-[80px] rounded-[20px]'>
        <h1 className='text-center text-6xl font-medium pb-[60px] pt-[80px] __className_24f709'>Leadership</h1>

        <div className="grid grid-cols-2 justify-items-center">
          <div className=" w-[500px]">
            <h3 className='text-center font-medium text-ter text-sm'>TECHNICAL HEAD</h3>
            <img className='bg-gray-900 w-[250px] aspect-[5/7] mx-auto' src="" alt="" />
            <h2 className='text-center __className_24f709 text-[24px] py-2'>Sarvana Kumar</h2>
            <p className='text-center'>Bringing over 20 years of expertise in electrical and instrumentation inspections, Mr. Sarvana Kumar is also a Lead Auditor in ISO 9001:2008.</p>
          </div>

          <div className=" w-[500px]">
            <h3 className='text-center font-medium text-ter text-sm'>COORDINATOR</h3>
            <img className='bg-gray-900 w-[250px] aspect-[5/7] mx-auto' src="" alt="" />
            <h2 className='text-center __className_24f709 text-[24px] py-2'>Ambika</h2>
            <p className='text-center'>As our experienced coordinator, Ms. Ambika plays a pivotal role in ensuring seamless operations and effective client communication. Her extensive background in inspection coordination enhances project efficiency and client satisfaction.</p>
          </div>
        </div>
      </section>


      
    </div>
  )
}

export default Page