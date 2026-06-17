import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { BsArrowLeft, BsArrowRight, BsBoxArrowUpRight, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { fadeIn } from '../../variants';
import { getProjectBySlug, projects } from '../../data/projects';

const ProjectDetail = ({ project }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.paths.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.paths.length) % project.paths.length);
  };

  return (
    <>
      <Head>
        <title>{project.title} | AI Product Case Study</title>
        <meta name="description" content={project.summary} />
      </Head>
      <div className="h-full overflow-y-auto bg-primary/40 pt-28 pb-28 xl:pt-32 xl:pb-20 scrollbar-thin scrollbar-track-white/5 scrollbar-thumb-accent/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={fadeIn('down', 0.15)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-8 flex flex-wrap items-center justify-between gap-4"
          >
            <Link href="/work" className="flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-accent">
              <BsArrowLeft />
              <span>Back to work</span>
            </Link>
            {project.link && project.link !== '#' && (
              <Link
                href={project.link}
                target="_blank"
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white/70 transition-colors hover:border-accent/50 hover:text-white"
              >
                <span>Non-tech guide on website</span>
                <BsBoxArrowUpRight />
              </Link>
            )}
          </motion.div>

          <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr] xl:items-start">
            <motion.div
              variants={fadeIn('right', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="space-y-5"
            >
              <div className="relative overflow-hidden rounded-lg border border-white/10 bg-black/20 shadow-2xl">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={project.paths[currentImage]}
                    alt={`${project.title} screenshot ${currentImage + 1}`}
                    fill
                    sizes="(min-width: 1200px) 560px, 100vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                </div>

                {project.paths.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-xl text-white transition-colors hover:bg-black/80"
                      aria-label="Previous screenshot"
                    >
                      <BsChevronLeft />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-xl text-white transition-colors hover:bg-black/80"
                      aria-label="Next screenshot"
                    >
                      <BsChevronRight />
                    </button>
                  </>
                )}
              </div>

              {project.paths.length > 1 && (
                <div className="grid grid-cols-4 gap-3 sm:grid-cols-5">
                  {project.paths.map((path, index) => (
                    <button
                      key={path}
                      onClick={() => setCurrentImage(index)}
                      className={`relative aspect-video overflow-hidden rounded-md border transition-colors ${
                        index === currentImage ? 'border-accent' : 'border-white/10 opacity-60 hover:opacity-100'
                      }`}
                      aria-label={`Show screenshot ${index + 1}`}
                    >
                      <Image src={path} alt="" fill sizes="120px" className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            <motion.div
              variants={fadeIn('left', 0.25)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="space-y-6"
            >
              <div>
                <span className="label mb-3 inline-block">Recruiter case study</span>
                <h1 className="h2 mb-3">{project.title}</h1>
                <p className="max-w-2xl text-[15px] text-white/70">{project.summary}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="glass rounded-lg p-4">
                  <div className="mb-1 text-[11px] uppercase tracking-[0.16em] text-white/35">Role</div>
                  <div className="text-sm font-medium text-white/85">{project.role}</div>
                </div>
                <div className="glass rounded-lg p-4">
                  <div className="mb-1 text-[11px] uppercase tracking-[0.16em] text-white/35">Category</div>
                  <div className="text-sm font-medium text-white/85">{project.category}</div>
                </div>
              </div>

              <div className="rounded-lg border border-accent/20 bg-accent/[0.06] p-4">
                <p className="text-[13px] text-white/70">{project.audienceNote}</p>
              </div>

              <div>
                <h2 className="h3 mb-3">Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="tag rounded-md">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn('up', 0.35)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mt-10 grid gap-6 xl:grid-cols-[0.82fr_1.18fr]"
          >
            <section className="rounded-lg border border-white/10 bg-white/[0.035] p-5 xl:p-6">
              <h2 className="h3 mb-4">What matters</h2>
              <div className="space-y-4">
                {project.highlights.map((highlight) => (
                  <div key={highlight} className="flex gap-3">
                    <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <p className="text-[14px] text-white/65">{highlight}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-5">
              {project.sections.map((section) => (
                <article key={section.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-5 xl:p-6">
                  <h2 className="h3 mb-3">{section.title}</h2>
                  <p className="text-[14px] text-white/65">{section.body}</p>
                </article>
              ))}
            </section>
          </motion.div>

          <motion.section
            variants={fadeIn('up', 0.45)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mt-6 rounded-lg border border-white/10 bg-white/[0.035] p-5 xl:p-6"
          >
            <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
              <h2 className="h3">Recruiter takeaways</h2>
              <Link href="/contact" className="flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-white">
                <span>Contact me</span>
                <BsArrowRight />
              </Link>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {project.recruiterTakeaways.map((takeaway) => (
                <div key={takeaway} className="rounded-lg border border-white/10 bg-black/15 p-4">
                  <p className="text-[13px] text-white/65">{takeaway}</p>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = () => ({
  paths: projects.map((project) => ({ params: { slug: project.slug } })),
  fallback: false,
});

export const getStaticProps = ({ params }) => ({
  props: {
    project: getProjectBySlug(params.slug),
  },
});

export default ProjectDetail;
