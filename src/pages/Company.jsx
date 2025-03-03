// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/splide/dist/css/splide.min.css';
// import { reviews } from './reviewsData';
import Quote from '../assets/blockquote.svg';
import client from '../assets/client-1.png';
import client2 from '../assets/client2.png';
import client3 from '../assets/client-3.png';
import Testimonials from '../components/Testimonials';




const Company = () => {
  return (
    

   <div className=''>
   <div>
    

      <section>
      <div className='min-h-screen  py-16 px-6 sm:px-16'>
      <div className='max-w-7xl mx-auto text-center'>
        {/* Company Title */}
        <h1 className='text-4xl font-extrabold text-rose-900 mb-20'>About Us</h1>
        <div className='p-8 shadow-xl rounded-lg '>
          <h3 className="text-3xl font-semibold text-red-600 mb-4">Our Mission</h3>
          <p className="text-lg  text-white">
            Our mission is to transform the way businesses use technology by creating innovative solutions that streamline operations, increase productivity, and enable sustainable growth.
          </p>
        </div>

        {/* Company Brief Section */}
        <div className=' p-8 shadow-xl rounded-lg mb-8'>
          <h2 className='text-3xl font-semibold text-red-600 mb-8'>Company Brief</h2>
          <p className='text-lg  text-white mb-6'>
            We are a leading innovator in the tech industry, committed to delivering the highest quality products and services to our clients. Our passion for excellence drives us to continuously improve and push the boundaries of technology.
          </p>
          {/* <h2 className="text-2xl font-semibold text-gray-800 mb-4">About</h2> */}
          <p className="text-lg  text-white">
            Founded in 2010, our company has grown to become a trusted name in providing cutting-edge solutions for businesses around the world. We specialize in software development, AI solutions, and IT consulting services. Our team of experts works tirelessly to ensure customer satisfaction and deliver results that exceed expectations.
          </p>
        </div>

        {/* Testimonial Section */}
        <div className=' p-5  rounded-lg mb-8 ml-10'>
          <h2 className='text-3xl font-semibold text-red-500 mb-8'>What Our Clients Say</h2>
          <div className="space-y-8">
            {/* Testimonial 1 */}
            <div className='flex flex-col items-center md:flex-row md:space-x-6'>
              <p className="text-lg  text-white mb-4 md:mb-0 md:w-2/3">
                "Working with this company has been a game-changer for our business. Their attention to detail, combined with cutting-edge technology, has helped us achieve remarkable growth. Highly recommended!"
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-300"></div> {/* Placeholder for photo */}
                <div className="text-left">
                  <p className="font-semibold text-gray-800">John Doe</p>
                  <p className="text-blue-500">CEO, TechCorp</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col items-center md:flex-row md:space-x-6">
              <p className="text-lg  text-white mb-4 md:mb-0 md:w-2/3">
                "We’ve partnered with many tech companies over the years, but none have delivered results like this one. Their innovation and reliability have made them our go-to partner for all IT solutions."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-300"></div> {/* Placeholder for photo */}
                <div className="text-left">
                  <p className="font-semibold text-gray-800">Jane Smith</p>
                  <p className="text-blue-500">CTO, Innovate LLC</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="flex flex-col items-center md:flex-row md:space-x-6">
              <p className="text-lg  text-white mb-4 md:mb-0 md:w-2/3">
                "The level of expertise and customer care this company offers is unmatched. Their team goes above and beyond to ensure success at every stage of the project."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-300"></div> {/* Placeholder for photo */}
                <div className="text-left">
                  <p className="font-semibold text-gray-800">Michael Lee</p>
                  <p className="text-blue-500">Founder, BusinessBoost</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='pt-24 block md:pt-[7rem] lg:grid grid-cols-2 gap-10 p-8 shadow-2xl'>
        <img src={client} className='rounded-md mx-auto h-[15rem] md:h-[20rem]'/>
        <p className='text-[1rem] md:text-[1.45rem] pt-10 mx-auto max-w-[35rem] lg:pt-0 lg:text-[1.2rem]    text-white'>
          DAAJ Technologies limited continues to be a top tier company from Africa implementing the technology of the internet of things to better the value of life . 
          At DAAJ , we create and automate all for the goal of simple control via artificial intelligence The Corporations tentacles spread from residential to commercial, 
          Real Estate, Industrial Applications, Agriculture Applications, Interior Designs, Entertainment Security and Surveillance amongst all others. 
          If you're looking for a technology partner that can help you turn your vision into reality, look no further. 
          Get in touch with us today and let's start a conversation about how we can help take your business to the next level.
        </p>
      </div>
      <h1 className='capitalize text-center text-2xl font-bold mb-8 lg:mt-16  text-red-600'>meet our team</h1>
      <div className='lg:flex justify-evenly p-6 mx-auto'>
        <div className='md:flex justify-center h-[42rem] md:h-80 w-[19rem] md:w-[40rem] mr-8 mb-16 mx-auto'>
         <img src={client3} className='rounded-md'/>
         <div className='pl-4 pt-8'>
          <h2 className='text-xl'>
            Damilola Ayeni
          </h2><p className='text-sm font-thin mt-[-3.5px] mb-4'>(Founder & chief executive)</p>
          <p className='text-base   text-white'>
            “DAAJ Technologies is tailored to identify and address the unique needs of each individual , 
            ensuring maximum satisfaction and creating solutions that resonates with people on a personal level. 
            This will empower individuals to curate their living environments in a way that truly reflects who they are and enhances their daily lives.”
          </p>
         </div>
        </div>
        <div className='md:flex justify-center h-[42rem] md:h-80 w-[19rem] md:w-[40rem] mr-10 mb-16 mx-auto'>
  <img src={client2} className='rounded-md mx-auto h-[15rem] md:h-[20rem] ml-15   '/>
  <div className='pr- pt-8 mr-30'>
    <h2 className='text-xl mr-20 ml-20 mb-0.5 mt-[-4px] '>
      Engr. Oluwaseun Anjola
    </h2>
    <p className='text-sm font-thin mt-[-3.5px] mb-4'>
      (Co-Founder & Lead Engineer)
    </p>
    <p className='  text-base   text-white'> 
      “DAAJ began as a solution-oriented team, driven by the belief that technology integration into everyday lives can enhance the quality, financial prospects, and work efficiency.”
    </p>
  </div>
</div>

      </div>
        <div className='flex flex-wrap w-4/5  overflow-hidden m-auto justify-between mt-auto '>
      <div className='sm:w-1/3 my-1 sm:m-auto text-center flex flex-col'>
        <img className='w-52 m-auto bg-[url("/images/bg-pattern-small-circle.svg")] bg-no-repeat bg-cover rounded-xl' src="/images/illustration-passionate.svg" alt="" />
        <h1 className='text-2xl my-5 tracking-[5px] text-red-500' >PASSIONATE</h1>
        <p className='text-base my-5 sm:w-3/4 m-auto leading-[26px]  t text-white'>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
      </div>
      <div className='sm:w-1/3 my-1 sm:m-auto text-center flex flex-col'>
        <img className='w-52 m-auto bg-[url("/images/bg-pattern-small-circle.svg")] bg-no-repeat bg-cover rounded-xl' src="/images/illustration-resourceful.svg" alt="" />
        <h1 className='text-2xl my-5 tracking-[5px] text-red-500'>RESOURCEFUL</h1>
        <p className='text-base my-5 sm:w-3/4 m-auto leading-[26px]   text-white'>Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
      </div>
      <div className='sm:w-1/3 my-1 sm:m-auto text-center flex flex-col'>
        <img className='w-52 m-auto bg-[url("/images/bg-pattern-small-circle.svg")] bg-no-repeat bg-cover rounded-xl' src="images/illustration-friendly.svg" alt="" />
        <h1 className='text-2xl my-5 tracking-[5px] text-red-500'>FRIENDLY</h1>
        <p className='text-base my-5 sm:w-3/4 m-auto leading-[26px]  text-white'> We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
      </div>
    </div>

        
        
      </div>
    </div>

      </section>
      </div>


      <Testimonials/>
    </div>
  );
};

export default Company;