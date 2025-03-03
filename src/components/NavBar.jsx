import React from 'react'
import logo from '../assets/comlogo.png'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='px-8 py-4 bg-black flex justify-between text-white '>
        <Link to={'/'}><img className='h-[50px]' src={logo} alt="logo" /></Link>

        <ul className='flex justify-evenly gap-7 items-center'>
            <Link to={'/company'}><li className='hover:underline cursor-pointer hover:text-gray-500'>Company</li></Link>
            <Link to={'/solutions'}><li className='hover:underline cursor-pointer hover:text-gray-500'>Solutions</li></Link>
            <Link to={'/careers'}><li className='hover:underline cursor-pointer hover:text-gray-500'>Careers</li></Link>
            <Link to={'/contact-us'}><li className='hover:underline cursor-pointer hover:text-gray-500'>Contact us</li></Link>

        </ul>

    </nav>
  )
}

export default NavBar