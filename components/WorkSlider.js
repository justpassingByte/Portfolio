'use client';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper';
import Image from 'next/image';
import { BsArrowRight, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Link from 'next/link';
import { useState } from 'react';

const projects = [

  {
    title: 'Testictour',
    paths: ['/testictour.PNG'],
    link: 'http://16.176.11.53',
    description: 'Community tournament platform',
  },
  {
    title: 'TFT Grimoire',
    paths: ['/tftgrimoire.PNG', '/tftgrimoire-2.png'],
    link: 'http://16.176.11.53:3000',
    description: 'Player identity & profile system',
  },
  {
    title: 'RobinHUD',
    paths: ['/robinhud.PNG', '/robinhud-2.png'],
    link: 'https://robinhud.website',
    description: 'Real-time decision support system',
  },
  {
    title: 'TFT Portfolio',
    paths: ['/tftportfolio.PNG'],
    link: 'https://tftportfolio.vercel.app',
    description: 'Player identity & profile system',
  },
  {
    title: 'Netsla',
    paths: ['/netsla.PNG'],
    link: 'https://netsla.vercel.app',
    description: 'Gaming café tournament ecosystem',
  },
];

const ProjectCard = ({ project, onOpenLightbox }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % project.paths.length);
  };

  const prevImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + project.paths.length) % project.paths.length);
  };

  return (
    <div className="flex flex-col items-center group w-full">
      <div
        className='relative rounded-lg overflow-hidden flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-[1.02] shadow-lg w-full cursor-zoom-in'
        onClick={() => onOpenLightbox(currentIndex)}
      >
        <Image
          src={project.paths[currentIndex]}
          alt={`${project.title} screenshot ${currentIndex + 1}`}
          width={500}
          height={300}
          className="rounded-lg object-cover w-full h-[200px] sm:h-[250px]"
        />

        {/* Navigation Buttons for multiple images */}
        {project.paths.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 text-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            >
              <BsChevronLeft />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 text-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            >
              <BsChevronRight />
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {project.paths.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${i === currentIndex ? 'bg-[#e838cc]' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Title & Link */}
      <Link href={project.link || '#'} target="_blank" className="w-full text-center flex flex-col items-center px-4 mt-2 cursor-pointer group/link">
        <h3 className='text-[18px] tracking-[0.1em] font-medium transition-colors duration-300 text-white group-hover/link:text-[#e838cc]'>
          {project.title}
        </h3>
        <p className="text-[14px] text-white/70 mt-2 font-light max-w-[80%]">
          {project.description}
        </p>

        {project.link && project.link !== '#' && (
          <div className="mt-3 flex items-center justify-center gap-x-2 text-[12px] tracking-[0.15em] font-bold text-[#e838cc] uppercase">
            <span>Visit {project.title}</span>
            <div className='text-xl transform group-hover/link:translate-x-2 transition-transform duration-300'>
              <BsArrowRight />
            </div>
          </div>
        )}
      </Link>
    </div>
  );
};

const WorkSlider = () => {
  const [lightboxData, setLightboxData] = useState(null); // { project, index }

  const closeLightbox = () => {
    setLightboxData(null);
  };

  const LbNextImage = (e) => {
    e.stopPropagation();
    setLightboxData(prev => ({
      ...prev,
      index: (prev.index + 1) % prev.project.paths.length
    }));
  };

  const LbPrevImage = (e) => {
    e.stopPropagation();
    setLightboxData(prev => ({
      ...prev,
      index: (prev.index - 1 + prev.project.paths.length) % prev.project.paths.length
    }));
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
        modules={[Pagination]}
        className='w-full pb-16 relative z-10'
      >
        {projects.map((project, index) => {
          return (
            <SwiperSlide key={index}>
              <ProjectCard project={project} onOpenLightbox={(idx) => setLightboxData({ project, index: idx })} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Lightbox Modal */}
      {lightboxData && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-10 cursor-zoom-out"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white text-4xl font-light hover:scale-110 transition-all z-[110]"
          >
            &times;
          </button>

          {/* Modal Container */}
          <div className="relative w-full max-w-6xl aspect-video cursor-default" onClick={e => e.stopPropagation()}>
            <Image
              src={lightboxData.project.paths[lightboxData.index]}
              alt={`${lightboxData.project.title} lightbox view`}
              fill
              className="object-contain"
            />

            {/* Lightbox Navigation */}
            {lightboxData.project.paths.length > 1 && (
              <>
                <button
                  onClick={LbPrevImage}
                  className="absolute -left-4 sm:-left-12 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 sm:p-4 text-2xl sm:text-3xl rounded-full transition-all duration-300"
                >
                  <BsChevronLeft />
                </button>
                <button
                  onClick={LbNextImage}
                  className="absolute -right-4 sm:-right-12 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 sm:p-4 text-2xl sm:text-3xl rounded-full transition-all duration-300"
                >
                  <BsChevronRight />
                </button>

                {/* Lightbox Dots */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                  {lightboxData.project.paths.map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full transition-colors ${i === lightboxData.index ? 'bg-[#e838cc]' : 'bg-white/30'}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default WorkSlider;
