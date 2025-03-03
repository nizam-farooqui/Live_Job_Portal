import React from 'react'
import Swal from 'sweetalert2'
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import "./Contact.css"

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData);

    fetch("http://localhost:3000/mail",{
      method:"POST",
      body:formData,
    })

    
  };

  return (
    <section className="contact flex justify-center text-white mb-10 ">
      <div className='mt-35 ml-40 margin-left: 40px text-white '>
        <h2 className='text-3xl mb-10 font-bold  '>Contact Us</h2>
        <form onSubmit={onSubmit}enctype="multipart/form-data">
          <div className='text-white'>
            <span className=' flex  gap-2 items-center '>

              <FaPhoneAlt className=' ' />
              <h3 className='text-xl'>Phone Number</h3>
            </span>
            <h4 >  <a href='tel:+917217011346' className=' flex gap-3 items-center w-fit text-center  mt-2.5 hover:bg-green-400  hover:shadow-[0px_0px_10px_green] ml-5'>+91-7217011346</a>
            </h4>
          </div>

          <div className='flex flex-col gap-2 '>
            <span className='  mt-3 flex gap-1 items-center '>

              <IoIosMail className='' />
              <h3 className='text-xl mt-2.'>Mail us</h3>
            </span>

            <h4>   <a href='mailto:aradhya@oddiant.com' className='flex w-fit  gap-5 items-center hover:bg-green-400  hover:shadow-[0px_0px_10px_green]  ml-5'>hi@oddiant.com</a>
            </h4>
          </div>
          <div className='flex flex-col gap-2 '>
            <span className=' flex gap-1 items-center  mt-4'>
              <FaLocationDot className='' />
              <h3 className='text-xl '>   Location </h3>
            </span>
            <h4 className='ml-5'>123, xyz street, abc city, 123456</h4>
          </div>
        </form>

      </div>
      <form onSubmit={onSubmit} className='flex flex-col items-center justify-center gap-5 w-1/2 ml-70 mt-4  p-2 bg-[rgba(0,0,0,0.1)]' enctype="multipart/form-data">

        <h2 className='text-4xl font-black'>Get In Touch</h2>


        <div className='flex  justify-evenly w-full'>

          <a href='tel:+917217011346' className=' w-[20%] flex border rounded-4xl p-2  gap-3 items-center bg-[#3E3E45] text-white cursor-pointer  hover:shadow-[0px_0px_10px_green] hover:bg-green-700'>
            <span className='border p-2 bg-white rounded-[50%]'>

              <FaPhoneAlt className='text-black' />
            </span>
            Call us
          </a>

          <a href='mailto:aradhya@oddiant.com' className=' w-[20%] flex border rounded-4xl p-2 gap-3 items-center bg-[#3E3E45] text-white cursor-pointer hover:shadow-[0px_0px_10px_green] hover:bg-green-700'>
            <span className='border p-2 bg-white rounded-[50%]'>

              <IoIosMail className='text-black' />
            </span>
            Mail us
          </a>



        </div>
        <p>Please complete the form below, and a representative will get back to you!</p>

        <div className='flex justify-evenly w-full'>
          <input required type="text" className='border w-[80%] border-gray-400 bg-[rgb(249,249,249)] text-black rounded-sm h-[40px] p-5' placeholder='Full Name' name='name' />
        </div>
        <div className='flex justify-between w-[80%] gap-1'>
          <input required type="email" className='border  border-gray-400 bg-[rgb(249,249,249)] text-black rounded-sm h-[40px] p-5' placeholder='Email' name='email' />

          <input required type="text" className='border  border-gray-400 bg-[rgb(249,249,249)] text-black rounded-sm h-[40px] p-5' placeholder=' Phone Number' name='phone' />
        </div>
        <div className='flex justify-evenly w-full'>
          <select required type="text" className='border w-[80%] border-gray-400 bg-[rgb(249,249,249)] text-black rounded-sm h-[40px] px-5' name='department'>
            <option selected value="finance" className='bg-[rgb(249,249,249)] text-black'>Finance</option>
            <option value="sale&marketing" className='bg-[rgb(249,249,249)] text-black'>Sale & Marketing</option>
            <option value="hr" className='bg-[rgb(249,249,249)] text-black'>H.R</option>
            <option value="it" className='bg-[rgb(249,249,249)] text-black'>IT</option>
            <option value="CSR" className='bg-[rgb(249,249,249)] text-black'>CSR</option>
            <option value="operation" className='bg-[rgb(249,249,249)] text-black'>Operation</option>

          </select>
        </div>
        <div className='flex justify-evenly w-full'>
          <input required type="text" className='border w-[80%]  border-gray-400 bg-[rgb(249,249,249)] text-black rounded-sm h-[40px] p-5' placeholder='Comments' name='comment' />
        </div>

        <div className='flex w-[80%] justify-between '>

        <div className="input-box">
          <label for="fileUpload" class="custom-file-upload">Upload File</label>
          <input type="file" id="fileUpload" name='file' />
        </div>



        
          <button className=' rounded-lg px-5 py-2 bg-blue-600 text-white cursor-pointer hover:bg-green-900' type='Submit'>Submit</button>
        
        </div>








      </form>





      {/*           
        <div className="input-box">
          <input type="text" className="field" placeholder='Full Name' name='name' required />
        </div>
        <div className="input-box">
          <input type="email" className="field" placeholder='Enter your Email' name='email' required />
        </div>
        <div className="input-box">
          <input type="text" className="field" placeholder='Enter your Phone Number' name='phone' required />
        </div>
        <div className="input-box">
          <textarea name="message" className="field mess" placeholder='Enter your message' required></textarea>
        </div>
        <div className="input-box">
          <input type="file" className="field" name="attachment" />
        </div>
        <button type="submit">Send Message</button> 
        </div>
      </form>
      */}
    </section>
  );
};

export default Contact;
