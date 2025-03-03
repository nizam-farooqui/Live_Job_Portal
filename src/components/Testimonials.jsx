import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { reviews } from '../data/reviewsData';
import Quote from '../assets/blockquote.svg';

const Testimonials = () => {
  return (
    <section className="max-w-4xl mx-auto flex flex-col justify-center mb-12 px-4">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold capitalize text-white">Our Client</h2>
        {/* <p className="mt-2 text-gray-600">What members are saying.</p> */}
      </div>

      <div className="relative select-none px-4">
        <blockquote>
        <img
            className="absolute z-[-1] bottom-[-3rem] right-[-0.5rem]"
            src={Quote}
            alt="quote"
          />

          <img
            className="absolute z-[-1] top-[-1rem] left-[-1rem] rotate-180"
            src={Quote}
            alt="quote"
          />
          
        </blockquote>

        <Splide
          options={{
            perPage: 1,
            autoplay: true,
            speed: 1000,
            rewind: true,
            rewindByDrag: true,
          }}
        >
          {reviews.map((review) => (
            <SplideSlide key={review.id}>
              <div className="flex items-center bg-white p-12 rounded-xl gap-4">
                <img
                  className="w-36 h-36 rounded-full object-cover mb-4 mx-auto"
                  src={review.image}
                  alt=""
                />
                <div className="flex flex-col justify-center">
                  <p className="text-gray-700 text-lg mb-4">{review.text}</p>
                  <div className="flex items-center justify-start gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, index) => (
                        <span
                          key={index}
                          className={`text-2xl ${index < 4 ? 'text-[#FF6F59]' : 'text-gray-300'}`}
                        >
                          &#9733;
                        </span>
                      ))}
                    </div>
                    <p className="font-semibold">{review.name}</p>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default Testimonials;
