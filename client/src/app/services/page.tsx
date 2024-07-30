import React from 'react'

const Page = () => {

  const services = [
    {
      slno:1,
      title:"Third-Party Inspection",
      desc:"Comprehensive inspection services in Electrical, Instrumentation, and Mechanical domains across various industries."
    },
    {
      slno:2,
      title:"Electrical Safety Audit",
      desc:"Thorough audits to ensure compliance with electrical safety standards."
    },
    {
      slno:3,
      title:"Thermography Testing",
      desc:"Advanced thermal imaging inspections to identify potential issues."
    },
    {
      slno:4,
      title:"Electrical Design Review",
      desc:"Detailed reviews of electrical designs to ensure they meet required standards and specifications."
    },
    {
      slno:5,
      title:"Technical Solutions",
      desc:"Expert technical advice and solutions tailored to client needs."
    },
    {
      slno:6,
      title:"Engineering Design",
      desc:"Professional engineering design services to support various industrial projects."
    },
    {
      slno:7,
      title:"Vendor Assessment",
      desc:"Evaluation and assessment of vendors to ensure quality and reliability."
    },
    {
      slno:8,
      title:"Facility Audit",
      desc:"Comprehensive audits of facilities to ensure compliance with industry standards."
    },
  ]

  return (
    <>
    <div className="pt-[120px] m-4">

      <div className="flex gap-[150px] grid-cols-2 relative">

        <h1 className="font-medium text-7xl __className_24f709 my-[30px] flex gap-2 items-baseline sticky top-[200px] h-fit">
          <div className="w-[80px] bg-ter h-[36px]"></div>
          Services
        </h1>

        <div className="grid grid-cols-2 gap-5">
          <div className="">
            {
              services.map((item,index) => index%2==0?(
                <div key={index} className="border border-pri rounded-[20px] h-[500px] grid content-end p-6 mb-6 bg-pri text-sec relative">
                  <span className="text-[14px] flex gap-1 items-center font-medium text-ter absolute top-6 left-6"><svg className="fill-ter w-[14px] aspect-square" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Icon_Cross Hatch/Large"><path id="Cross Hatch" fillRule="evenodd" clipRule="evenodd" d="M240 191.987V138.022L138.022 240H191.987L240 191.987ZM79.7958 240L240 79.7958V25.8309L25.8309 240H79.7958ZM0 207.606L207.606 0H153.641L0 153.641V207.606ZM0 95.4154L95.4154 0H41.4504L0 41.4504V95.4154Z"></path></g></svg>0{index+1}</span>
                    <h2 className='__className_24f709 text-4xl pb-3'>{item.title}</h2>
                    <p>{item.desc}</p>
                </div>
              ):(<></>))
            }
          </div>

          <div className="pt-[200px]">
            {
              services.map((item,index) => index%2!=0?(
                <div key={index} className="border border-pri rounded-[20px] h-[500px] grid content-end p-6 mb-6 bg-pri text-sec relative">
                  <span className="text-[14px] flex gap-1 items-center font-medium text-ter absolute top-6 left-6"><svg className="fill-ter w-[14px] aspect-square" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Icon_Cross Hatch/Large"><path id="Cross Hatch" fillRule="evenodd" clipRule="evenodd" d="M240 191.987V138.022L138.022 240H191.987L240 191.987ZM79.7958 240L240 79.7958V25.8309L25.8309 240H79.7958ZM0 207.606L207.606 0H153.641L0 153.641V207.606ZM0 95.4154L95.4154 0H41.4504L0 41.4504V95.4154Z"></path></g></svg>0{index+1}</span>
                    <h2 className='__className_24f709 text-4xl pb-3'>{item.title}</h2>
                    <p>{item.desc}</p>
                </div>
              ):(<></>))
            }
          </div>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default Page