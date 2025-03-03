import React from 'react'
import notFound from '../assets/404.jpg'



function NotFound() {
  return (
    <div className='flex justify-center items-center'>
        <img src={notFound} alt="Not found" />

    </div>
  )
}

export default NotFound