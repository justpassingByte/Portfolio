import Circle from '../../components/Circles'
import WorkSlider from '../../components/WorkSlider'
import Blub from '../../components/Bulb'
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'
const Work = () => {
  return(
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circle/>
      <div className="container mx-auto">
        <div className=" flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2 
            variants={fadeIn('up',0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="h2 xl:mt-8">
               My Systems <span className="text-accent">.</span></motion.h2>
            <motion.p
             variants={fadeIn('up',0.4)}
             initial='hidden'
             animate='show'
             exit='hidden'
            className="mb-4 max-w-[400px] mx-auto lg:mx-0">
              I don&apos;t build isolated tools — I build connected systems. Each product
              solves a real problem for a real community, and they&apos;re designed to work
              together as an ecosystem.
            </motion.p>
        </div>
        {/* slider */}
          <motion.div
          variants={fadeIn('down',0.6)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='w-full xl:max-w-[65%]'>
          <WorkSlider/>

          </motion.div>
        </div>
      </div>
      <Blub/>
    </div>
  )
};

export default Work;
