import Circle from '../../components/Circles';
import WorkSlider from '../../components/WorkSlider';
import Blub from '../../components/Bulb';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Work = () => {
  return (
    <div className="flex h-full items-center bg-primary/30 py-36">
      <Circle />
      <div className="container mx-auto">
        <div className="flex flex-col gap-x-8 xl:flex-row">
          <div className="mb-4 flex flex-col text-center lg:text-left xl:mb-0 xl:w-[30vw]">
            <motion.span
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="label mb-3"
            >
              Built from 0 to 1
            </motion.span>
            <motion.h2
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-2"
            >
              AI products & case studies<span className="text-gradient">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mx-auto mb-4 max-w-[420px] text-[14px] lg:mx-0"
            >
              Click a project to read the recruiter-focused detail. The public websites explain the products for non-technical users; these pages explain my product thinking, AI workflow, and full-stack execution.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Blub />
    </div>
  );
};

export default Work;
