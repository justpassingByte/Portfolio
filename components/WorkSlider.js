'use client';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsArrowRight, BsBoxArrowUpRight, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { projects } from '../data/projects';

const ProjectCard = ({ project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % project.paths.length);
  };

  const prevImage = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + project.paths.length) % project.paths.length);
  };

  return (
    <div className="flex h-full w-full flex-col items-center group">
      <Link
        href={`/work/${project.slug}`}
        className="relative mb-5 flex w-full items-center justify-center overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
        aria-label={`View ${project.title} case study`}
      >
        {project.paths[currentIndex]?.endsWith('.mp4') ? (
          <video
            src={project.paths[currentIndex]}
            autoPlay
            muted
            loop
            playsInline
            className="h-[200px] w-full rounded-lg object-cover sm:h-[250px]"
          />
        ) : (
          <Image
            src={project.paths[currentIndex]}
            alt={`${project.title} screenshot ${currentIndex + 1}`}
            width={500}
            height={300}
            className="h-[200px] w-full rounded-lg object-cover sm:h-[250px]"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80" />
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
          <div>
            <div className="label mb-1 text-[10px]">{project.category}</div>
            <h3 className="text-[18px] font-semibold tracking-[0.08em] text-white transition-colors duration-300 group-hover:text-accent">
              {project.title}
            </h3>
          </div>
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-xl text-white backdrop-blur-sm transition-colors group-hover:bg-accent group-hover:text-primary">
            <BsArrowRight />
          </div>
        </div>

        {project.paths.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-xl text-white opacity-0 transition-opacity duration-300 hover:bg-black/80 group-hover:opacity-100"
              aria-label="Previous screenshot"
            >
              <BsChevronLeft />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-xl text-white opacity-0 transition-opacity duration-300 hover:bg-black/80 group-hover:opacity-100"
              aria-label="Next screenshot"
            >
              <BsChevronRight />
            </button>
            <div className="absolute top-3 left-1/2 z-10 flex -translate-x-1/2 gap-2">
              {project.paths.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full transition-colors ${index === currentIndex ? 'bg-accent' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </>
        )}
      </Link>

      <div className="flex w-full flex-1 flex-col items-center px-4 text-center">
        <p className="max-w-[92%] text-[14px] text-white/65">{project.description}</p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={`/work/${project.slug}`}
            className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-accent transition-colors hover:text-white"
          >
            <span>View case study</span>
            <BsArrowRight className="text-lg" />
          </Link>
          {project.link && project.link !== '#' && (
            <Link
              href={project.link}
              target="_blank"
              className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-white/45 transition-colors hover:text-white"
            >
              <span>Live site</span>
              <BsBoxArrowUpRight />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
      }}
      modules={[Pagination]}
      className="relative z-10 w-full pb-16"
    >
      {projects.map((project) => (
        <SwiperSlide key={project.slug} className="h-auto">
          <ProjectCard project={project} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
