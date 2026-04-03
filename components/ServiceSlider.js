import {
  RxDesktop,
  RxCode,
  RxLayers,
  RxMobile,
  RxRocket,
  RxArrowTopRight,
  RxMagicWand,
} from "react-icons/rx";

const serviceData = [
  {
    icon: <RxCode />,
    title: 'Data & Analytics',
    description: 'Leaderboards, performance tracking, and interactive dashboards that transform complex datasets into clear insights.',
  },
  {
    icon: <RxMagicWand />,
    title: 'AI Integration',
    description: 'Engineering intelligent agents, RAG pipelines, and automated workflows that turn raw data into actionable decisions.',
  },
  {
    icon: <RxDesktop />,
    title: 'Full-Stack & Cross-Platform',
    description: 'Web, mobile, and desktop — end-to-end from database design and API architecture to polished, responsive interfaces.',
  },
  {
    icon: <RxLayers />,
    title: 'Real-Time Systems',
    description: 'Building low-latency data pipelines for live dashboards, instant notifications, and multiplayer experiences.',
  },
  {
    icon: <RxRocket />,
    title: 'Cloud & DevOps',
    description: 'Deploying production systems with containerized infrastructure, automated pipelines, and zero-downtime scaling.',
  },
  {
    icon: <RxMobile />,
    title: 'Product & UX',
    description: 'Designing complete user journeys — multi-language support, responsive layouts, and intuitive flows that feel native.',
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
      className='h-[240px] sm:h-[300px]'
    > 
    {serviceData.map((item,index)=>{
      return (
      <SwiperSlide key={index}>
          <div className="glass glass-hover h-full px-6 py-6
          flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer
          justify-between">

          <div className="text-3xl text-accent sm:mb-3"> 
            {item.icon}
          </div>  
          
          <div className="flex-1 sm:mb-3">
            <div className="mb-1 text-[15px] font-semibold text-white/90">{item.title}</div>
            <p className="text-[12px] leading-relaxed text-white/40 font-light">{item.description}</p>
          </div>
          
          <div className="text-2xl flex items-center sm:items-start">
            <RxArrowTopRight className="group-hover:rotate-45
            group-hover:text-accent transition-all duration-300 text-white/30"/>
          </div>
          </div>
      </SwiperSlide>
   )
    })}

    </Swiper>
  )
};

export default ServiceSlider;
