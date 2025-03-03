import { useEffect, useState } from 'react'
import JobCard from '../components/JobCard'
import cities from '../data/CityName';



function Careers() {
  let data = [
    {jobRole:"Frontend",location:"Noida"},
    {jobRole:"Backend",location:"New Delhi"},
    {jobRole:"Full Stack",location:"Mumbai"},
    {jobRole:"Software Development",location:"New York"},
    {jobRole:"PHP developer",location:"London"}
    

  ]


  const [cityVisible,setCityVisible] = useState(false);
  const [filteredData,setFilteredData] = useState(cities);
  const [city,setCity] = useState('');
  console.log(filteredData.length)

  useEffect(() => {
    setFilteredData( cities.filter((d)=>d.toLowerCase().includes(city.toLowerCase())))
    
  }, [city])
  
  



  return (
        
      <div className="p-8">
        <h2 className="text-3xl text-white text-center font-bold mb-6">Find your Jobs</h2>
        <form className='flex justify-center items-center' >

        <input type="text" placeholder='Job Role' className='w-1/5 border rounded-lg p-2 m-2 bg-[rgb(249,249,249)] placeholder:text-black' />
        <select type="text" placeholder='Job Type' className='w-1/5 border rounded-lg p-2 m-2 bg-[rgb(249,249,249)] placeholder:text-black' >
        <option value="hybrid">Hybrid</option>
        <option value="remote">Remote</option>
        <option value="on_site">On-Site</option>
        </select>
        <div className='w-1/5  m-2 relative' >
          <input type="text" placeholder='Job Location' className=' w-full border rounded-lg p-2  bg-[rgb(249,249,249)] placeholder:text-black' 
          value={city}
          onFocus={()=>setCityVisible(true)} 
          // onBlur={()=>setCityVisible(false)} 
          onChange={(e)=>setCity(e.target.value)} />
          <ul className={`absolute left-0 bg-white w-full max-h-[55vh] shadow-[0px_0px_5px_gray] overflow-y-auto ${cityVisible?"block":"hidden"}   `}>
            {
              filteredData.map((d)=>{
                return (
                  <li onClick={()=>{
                    setCity(d)
                    setCityVisible(false)

                  } 
                }className='border-t p-2 bg-gray-100 cursor-pointer hover:bg-blue-700 hover:text-white '>{d}</li>
                )
              })
            }

          </ul>
        </div>
        <select type="text" placeholder='Job Experience' className='w-1/5 border rounded-lg p-2 m-2 bg-[rgb(249,249,249)] placeholder:text-black' >
        <option value="fresher">Fresher</option>
        <option value="1-3">1-3 yrs</option>
        <option value="3-5">3-5 yrs</option>
        <option value="5-8">5-8 yrs</option>
        <option value="8+">8+ yrs</option>
        
        </select>
        <button type="submit" className='w-1/5 border rounded-lg p-2 m-2 text-white cursor-pointer bg-blue-600 hover:bg-green-600 '>Search</button>

    
    </form>
          <p className="text-3xl text-white text-center font-bold my-6">Hot jobs</p>
        <div className="max-h-96 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {
              data.map((job)=>{
                return (
                  <JobCard jobRole={job.jobRole} location = {job.location}/>
                )
              })
            }

            </div>
        </div>
      </div>
    
  )
}

export default Careers