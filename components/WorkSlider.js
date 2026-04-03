import 'swiper/css';
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'RobinHUD',
          path: '/project1.png',
          link: 'https://github.com/justpassingByte',
          description: 'Real-time decision support system',
        },
        {
          title: 'Testictour',
          path: '/project2.png',
          link: 'https://github.com/justpassingByte',
          description: 'Community tournament platform',
        },
        {
          title: 'TFT Portfolio',
          path: '/project.png',
          link: 'https://github.com/justpassingByte',
          description: 'Player identity & profile system',
        },
        {
          title: 'Netsla',
          path: '/project4.png',
          link: 'https://github.com/justpassingByte',
          description: 'Gaming café tournament ecosystem',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, imageIndex) => {
                return (
                  <Link href={image.link || '#'} key={imageIndex} target="_blank">
                    <div className='relative rounded-lg overflow-hidden flex items-center group'>
                      <div className='flex items-center justify-center relative overflow-hidden group'>
                        <Image
                          src={image.path}
                          alt={image.title}
                          width={500}
                          height={300}
                          className="rounded-lg"
                        />
                        {/* overlay gradient */}
                        <div className='absolute inset-0 bg-gradient-to-l from-transparent
                        via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80
                        transition-all duration-700'>
                        </div>
                        {/* title + description */}
                        <div className='absolute bottom-0 translate-y-full
                        group-hover:-translate-y-10 group-hover:xl:-translate-y-20
                        transition-all duration-300'>
                          <div className='flex flex-col items-start px-2'>
                            <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                              <div className='delay-100'>{image.title}</div>
                              <div className='text-xl translate-y-[500%]
                              group-hover:translate-y-0 transition-all duration-300
                              delay-200'> <BsArrowRight /> </div>
                            </div>
                            <div className='text-[11px] text-white/70 tracking-wide delay-150 translate-y-[500%] group-hover:translate-y-0 transition-all duration-300'>
                              {image.description}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
