import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { reviews } from '../data/reviewsData';
import Quote from '../assets/blockquote.svg';
import client from '../assets/client-1.png';
import client2 from '../assets/client2.png';
import client3 from '../assets/client-3.png';




const Testimonials = () => {
  return (


    <div className='bg-gray-100  '>




      <div>


        <section>
          <div className='min-h-screen  py-16 px-6 sm:px-16'>
            <div className='max-w-7xl mx-auto text-center'>
              {/* Company Title */}
              {/* <h1 className='text-4xl font-extrabold text-rose-900 mb-20'>About Us</h1> */}
              <div className=' p-8 shadow-xl rounded-lg mb-8'>
                <h2 className='text-3xl font-semibold text-red-600 mb-8'>About Us</h2>
                <p className='text-lg  text-black mb-6'>
                  Oddiant Techlabs LLP is a is a bootstrapped, asset light start-up consulting firm for IT, HR, Manpower & Recruitment, staffing services, head quartered at Noida, U.P., India, catering IT, NON-IT, FinTech, Sales, Internet, BPO/ITES, NBFC, SaaS, Health Tech, Hospitality, Healthcare & Pharma, & more clients across globe for finding the best solutions for their requirements and with the end-to-end services 24X7X365.
                </p>
                {/* <h2 className="text-2xl font-semibold text-gray-800 mb-4">About</h2> */}
                <p className="text-lg  text-black">
                  We believe in as you are more than a resume, and as a recruiter its our job to connect talent’s with opportunities.
                </p>
              </div>

              <div className='p-8 shadow-xl rounded-lg '>
                <h3 className="text-3xl font-semibold text-red-600 mb-4">Our Mission</h3>
                <p className="text-lg  text-black">
                  Our mission is to deliver exceptional IT consulting services and high-quality staffing solutions that meet the unique needs of businesses across industries. We are committed to providing expert guidance, innovative technologies, and a tailored approach to help our clients achieve operational excellence. By sourcing, recruiting, and placing top-tier talent, we empower organizations to build dynamic teams that drive success. Our focus is on fostering long-term relationships, ensuring our clients and candidates thrive in an ever-evolving technological landscape.
                </p>
              </div>

              {/* Company Brief Section */}
              

              {/* Testimonial Section */}
              <div className=' p-5  rounded-lg mb-8 ml-10'>
                <h2 className='text-3xl font-semibold text-red-500 mb-8'>Vision </h2>
                <div className="space-y-8">
                  {/* Testimonial 1 */}
                  <div className='flex flex-col items-center justify-center md:flex-row md:space-x-6'>
                    <p className="text-lg  text-black mb-4 md:mb-0 md:w-2/3">
                      Our vision is to empower businesses by providing innovative solutions & manpower consulting and top-tier talent through staffing, and recruitment services. We aim to be the trusted partner for organizations seeking to drive growth, enhance performance, and stay ahead of technological advancements. By connecting the best minds with the brightest opportunities, we strive to foster a future where businesses can seamlessly navigate the digital landscape with confidence, agility, and success.
                    </p>
                    <div className="flex items-center space-x-4">
                      {/* <div className="w-12 h-12 rounded-full bg-gray-300"></div>  */}
                      {/* <div className="text-left">
                  <p className="font-semibold text-gray-800">John Doe</p>
                  <p className="text-blue-500">CEO, TechCorp</p>
                </div> */}
                    </div>
                  </div>

                  {/* Testimonial 2 */}
                  {/* <div className="flex flex-col items-center md:flex-row md:space-x-6">
              <p className="text-lg  text-black mb-4 md:mb-0 md:w-2/3">
                "We’ve partnered with many tech companies over the years, but none have delivered results like this one. Their innovation and reliability have made them our go-to partner for all IT solutions."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                <div className="text-left">
                  <p className="font-semibold text-gray-800">Jane Smith</p>
                  <p className="text-blue-500">CTO, Innovate LLC</p>
                </div>
              </div>
            </div> */}

                  {/* Testimonial 3 */}
                  {/* <div className="flex flex-col items-center md:flex-row md:space-x-6">
              <p className="text-lg  text-black mb-4 md:mb-0 md:w-2/3">
                "The level of expertise and customer care this company offers is unmatched. Their team goes above and beyond to ensure success at every stage of the project."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-300"></div> 
                <div className="text-left">
                  <p className="font-semibold text-gray-800">Michael Lee</p>
                  <p className="text-blue-500">Founder, BusinessBoost</p>
                </div>
              </div>
            </div> */}
                </div>
              </div>
              {/* <div className='pt-24 block md:pt-[7rem] lg:grid grid-cols-2 gap-10 p-8 shadow-2xl'>
                <img src={client} className='rounded-md mx-auto h-[15rem] md:h-[20rem]' />
                <p className='text-[1rem] md:text-[1.45rem] pt-10 mx-auto max-w-[35rem] lg:pt-0 lg:text-[1.2rem]    text-black'>
                  DAAJ Technologies limited continues to be a top tier company from Africa implementing the technology of the internet of things to better the value of life .
                  At DAAJ , we create and automate all for the goal of simple control via artificial intelligence The Corporations tentacles spread from residential to commercial,
                  Real Estate, Industrial Applications, Agriculture Applications, Interior Designs, Entertainment Security and Surveillance amongst all others.
                  If you're looking for a technology partner that can help you turn your vision into reality, look no further.
                  Get in touch with us today and let's start a conversation about how we can help take your business to the next level.
                </p>
              </div> */}
              
          
              <h1 className='capitalize text-center text-2xl font-bold mb-8 lg:mt-16  text-red-600'>meet our team</h1>
              <div className="flex items-center space-x-4">
                
              </div>
              <div className='flex justify-center  '>
                <div className='flex flex-col'>

              <div className="flex items-center space-x-4 mt-10 ">
                <div className="w-12 h-12 rounded-full bg-gray-300"></div> 
                <div className="text-left ">
                  <p className="font-semibold text-gray-800">Aradhya Saxena </p>
                  <p className="text-blue-500"> CEO and Founder</p>
                </div>
                
              </div>

              <div className="flex items-center space-x-4 mt-10 ">
                <div className="w-12 h-12 rounded-full bg-gray-300"></div> 
                <div className="text-left ">
                  <p className="font-semibold text-gray-800">	Saloni  </p>
                  <p className="text-blue-500">Business Partner</p>
                </div>
                
              </div>
              <div className="flex items-center space-x-4 mt-10 ">
                <div className="w-12 h-12 rounded-full bg-gray-300"></div> 
                <div className="text-left ">
                  <p className="font-semibold text-gray-800">Himanshu Walia </p>
                  <p className="text-blue-500">Sr. Resource Manager </p>
                </div>
                
              </div>




              <div className="flex  items-center space-x-4 mt-10 ">
                <div className="w-12 h-12 rounded-full bg-gray-300"></div> 
                <div className="text-left">
                  <p className="font-semibold text-gray-800 ">Nimrat Kaur Bagga </p>
                  <p className="text-blue-500  ">Business Development Manager</p>
                </div>
                </div>
              </div>
              <div className='lg:flex justify-evenly  mx-auto'>
                {/* <div className='md:flex justify-center h-[42rem] md:h-80 w-[19rem] md:w-[40rem] mr-8 mb-16 mx-auto'>
                  <img src={client3} className='rounded-md' />
                  <div className='pl-4 pt-8'>
                    <h2 className='text-xl'>
                      Damilola Ayeni
                    </h2><p className='text-sm font-thin mt-[-3.5px] mb-4'>(Founder & chief executive)</p>
                    <p className='text-base   text-black'>
                      “DAAJ Technologies is tailored to identify and address the unique needs of each individual ,
                      ensuring maximum satisfaction and creating solutions that resonates with people on a personal level.
                      This will empower individuals to curate their living environments in a way that truly reflects who they are and enhances their daily lives.”
                    </p>
                  </div>
                </div> */}
                <div className='md:flex justify-center h-[42rem] md:h-80 w-[19rem] md:w-[40rem] mr-10 mb-16 mx-auto'>
                  <img src={client2} className=' h-65  ' />
                  <div className='pr- pt-8 mr-30'>
                    <h2 className='text-xl mr-20   '>
                    Aradhya Saxena
                    </h2>
                    <p className='text-sm font-thin mt-[-3.5px] mb-4 mr-20'>(CEO and Founder)
                      
                    </p>
                    <p className='  text-base   text-black'>
                      “DAAJ began as a solution-oriented team, driven by the belief that technology integration into everyday lives can enhance the quality, financial prospects, and work efficiency.”
                    </p>
                  </div>
                </div>
                </div>

              </div>
              {/* <div className='flex flex-wrap w-4/5 sm:h-[650px] overflow-hidden m-auto justify-between mt-auto  '>
                <div className='sm:w-1/3 my-10 sm:m-auto text-center flex flex-col'>
                  <img className='w-52 m-auto bg-[url("/images/bg-pattern-small-circle.svg")] bg-no-repeat bg-cover rounded-xl' src="/images/illustration-passionate.svg" alt="" />
                  <h1 className='text-2xl my-5 tracking-[5px] text-red-500' >PASSIONATE</h1>
                  <p className='text-base my-5 sm:w-3/4 m-auto leading-[26px]  t text-black'>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
                </div>
                <div className='sm:w-1/3 my-10 sm:m-auto text-center flex flex-col'>
                  <img className='w-52 m-auto bg-[url("/images/bg-pattern-small-circle.svg")] bg-no-repeat bg-cover rounded-xl' src="/images/illustration-resourceful.svg" alt="" />
                  <h1 className='text-2xl my-5 tracking-[5px] text-red-500'>RESOURCEFUL</h1>
                  <p className='text-base my-5 sm:w-3/4 m-auto leading-[26px]   text-black'>Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
                </div>
                <div className='sm:w-1/3 my-10 sm:m-auto text-center flex flex-col'>
                  <img className='w-52 m-auto bg-[url("/images/bg-pattern-small-circle.svg")] bg-no-repeat bg-cover rounded-xl' src="images/illustration-friendly.svg" alt="" />
                  <h1 className='text-2xl my-5 tracking-[5px] text-red-500'>FRIENDLY</h1>
                  <p className='text-base my-5 sm:w-3/4 m-auto leading-[26px]  text-black'> We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
                </div>
              </div> */}



            </div>
          </div>

        </section>
      </div>



    </div>
  );
};

export default Testimonials;