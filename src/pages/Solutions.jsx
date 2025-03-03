import React from 'react'
import Service from '../components/Service'
import services from '../data/Services'

function Solutions() {
  return (
    <div className='text-white'>
      <h1 className='text-5xl font-bold text-center m-2 '>Services Offered</h1>
      

      {
        services.map((service)=>{
          return(
            <div>

            <h2 className='text-center font-bold text-xl m-3 '>{service.serviceType}</h2>
            <div className='flex flex-wrap items-center justify-center my-3'>
            {
              service.serviceNames.map((s)=>{
                return (
                  <Service name={s.name} img={s.img} desc={s.desc} />
                )
                
              })
              
            }
            </div>
            </div>
          )
        })
      }




    </div>
  )
}

export default Solutions