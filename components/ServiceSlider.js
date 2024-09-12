// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";


// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Responsive Design',
    description: 'Create visually appealing and optimized designs for all devices, from mobile to desktop.',
  },
  {
    icon: <RxPencil2 />,
    title: 'UI/UX Design',
    description: 'Design intuitive user interfaces and enhance the user experience for seamless interaction.',
  },
  {
    icon: <RxDesktop />,
    title: 'Front-end Dev',
    description: 'Build modern web interfaces using HTML, CSS, and JavaScript.',
  },
  {
    icon: <RxReader />,
    title: 'Back-end Dev',
    description: 'Handle data and manage servers using Node.js and databases like MongoDB.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO Optimization',
    description: 'Optimize your website to improve search engine rankings and drive more traffic.',
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
