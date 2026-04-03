import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';
import { FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image';

const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Sarah Chen',
    position: 'Startup Founder',
    message:
      'Thang doesn\'t just write code, he solves business problems. He built our entire MVP infrastructure in half the time we expected, and it scaled flawlessly from day one.',
  },
  {
    image: '/t-avt-2.png',
    name: 'Alex Rivera',
    position: 'Community Manager',
    message:
      'The custom tournament system he built for our café completely revolutionized how we run events. It\'s intuitive, real-time, and perfectly tailored to our users\' needs.',
  },
  {
    image: '/t-avt-3.png',
    name: 'Michael Chang',
    position: 'Lead Designer',
    message:
      'Rare to find an engineer who understands systems architecture and user experience equally well. Every tool he builds feels cohesive and polished.',
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className='h-[400px]'
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
              {/* Avatar, name, position */}
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                <div className='flex flex-col justify-center text-center'>
                  {/* Avatar */}
                  <div className='mb-2 mx-auto'>
                    <Image
                      src={person.image}
                      width={100}
                      height={100}
                      alt={person.name}
                      className='rounded-full'
                    />
                  </div>
                  {/* Name */}
                  <div className='text-lg font-bold tracking-tight'>{person.name}</div>
                  {/* Position */}
                  <div className='text-[12px] uppercase font-extralight tracking-widest text-accent'>
                    {person.position}
                  </div>
                </div>
              </div>

              {/* Quote & message */}
              <div className='bg-primary/20 flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/10 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20 mt-4 xl:mt-0 p-6 rounded-lg'>
                {/* Quote icon */}
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                </div>
                {/* message */}
                <div className='xl:text-lg text-center md:text-left text-white/70'>
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
