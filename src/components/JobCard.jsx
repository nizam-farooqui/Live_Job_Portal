import React from 'react'

function JobCard(params) {
    let {jobRole,location} = params;
  return (
    <div>
        <div className="bg-gray-200 p-6 rounded-lg text-white">
          <span className='flex items-center gap-2'>

              <h3 className="text-xl text-black font-bold">{jobRole}</h3>
              <p className="text-black font-bold">(0-3yrs) </p>
          </span>


              <p className="text-black">{location} </p>

              <span className='flex justify-between'>

              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer">
                View job
              </button>
              <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer">
                Apply Now
              </button>
              </span>
            </div>
    </div>
  )
}

export default JobCard