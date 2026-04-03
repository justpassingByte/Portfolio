// icons
import {
  RxDesktop,
  RxCode,
  RxLayers,
  RxMobile,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";


// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: 'Web Applications',
    description: 'Full-stack web products built for real users — fast, clean, and production-ready.',
  },
  {
    icon: <RxCode />,
    title: 'Backend Systems',
    description: 'APIs, services, and databases that power your product at scale.',
  },
  {
    icon: <RxLayers />,
    title: 'Real-time Systems',
    description: 'Live data, events, and interactions — built for speed and responsiveness.',
  },
  {
    icon: <RxMobile />,
    title: 'Mobile & Desktop',
    description: 'Cross-platform apps that bring your product to any device.',
  },
  {
    icon: <RxRocket />,
    title: 'Deployment & Infrastructure',
    description: 'Docker, VPS, CI/CD — your product shipped and running reliably in production.',
  },
];

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { Swiper,SwiperSlide } from "swiper/react";
import {FreeMode,Pagination} from 'swiper'

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320:{
          slidesPerView:1,
          spaceBetween:15,
        },
        640:{
          slidesPerView:3,
          spaceBetween:15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable:true,
      }}
      modules={[FreeMode,Pagination]}
      className='h-[200px] sm:h-[300px]'
    > 
    {serviceData.map((item,index)=>{
      return (
      <SwiperSlide key={index}>
          <div className="bg-[rgba(65,47,123,0.15)] h-full rounded-lg px-6 py-8
          flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65
          ,169,0.15)] transition-all duration-300">

          <div className="text-4xl text-accent mb-4"> 
            {item.icon}
          </div>  
          <div className="mb-8">
            <div className="mb-2 text-lg">{item.title}</div>
            <p className="max-w-[350px] leading-normal">{item.description}</p>
          </div>
          <div className="text-3xl">
            <RxArrowTopRight className="group-hover:rotate-45
            group-hover:text-accent translate-all duration-300"/>
          </div>
          </div>
      </SwiperSlide>
   )
    })}

    </Swiper>
  )
};

export default ServiceSlider;
