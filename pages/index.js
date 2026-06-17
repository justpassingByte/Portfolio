import ParticlesContainer from '../components/ParticlesContainer';
import ProjectBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className="h-full bg-primary/60">
      <div className="h-full w-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="container mx-auto flex h-full flex-col justify-center text-center xl:pt-40 xl:text-left">
          <motion.div variants={fadeIn('down', 0.1)} initial="hidden" animate="show" exit="hidden">
            <span className="label mb-4 inline-block">AI Product Builder | Full Stack</span>
          </motion.div>
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 max-w-[680px]"
          >
            I build AI products from idea to{' '}
            <span className="text-gradient">MVP.</span>
          </motion.h1>
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto mb-10 max-w-sm text-[15px] xl:mx-0 xl:mb-14 xl:max-w-xl"
          >
            Full-stack builder focused on React, Next.js, Node.js, databases, REST APIs, and LLM workflows. I design around the model: clean input, useful context, structured data, and product-ready output.
          </motion.p>
          <div className="relative flex justify-center xl:hidden">
            <ProjectBtn />
          </div>
          <motion.div variants={fadeIn('down', 0.4)} initial="hidden" animate="show" exit="hidden" className="hidden xl:flex">
            <ProjectBtn />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 h-full w-[1200px]">
        <div className="absolute h-full w-full translate-z-0 bg-none mix-blend-color-dodge xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat" />
        <ParticlesContainer />
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute -bottom-32 h-full max-h-[670px] w-full max-w-[737px] lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
