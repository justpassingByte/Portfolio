import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { RiGithubFill, RiFacebookCircleFill } from 'react-icons/ri';
import { FaDiscord } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* Header */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'
          >
            Let&apos;s build <span className='text-gradient'>together.</span>
          </motion.h2>
          
          {/* Info Pills */}
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex flex-wrap items-center justify-center gap-4 mb-8'
          >
            <a href='https://facebook.com/Leoz666' target='_blank' rel="noreferrer" className='flex items-center gap-2 px-5 py-3 bg-white/5 hover:bg-blue-500/10 text-white/70 hover:text-blue-500 transition-all rounded-full border border-white/10 hover:border-blue-500/50 hover:-translate-y-1'>
               <RiFacebookCircleFill className='text-2xl' />
               <span className="text-sm font-light">Leoz666</span>
            </a>
            <a href='https://github.com/justPassingByte' target='_blank' rel="noreferrer" className='flex items-center gap-2 px-5 py-3 bg-white/5 hover:bg-white/20 text-white/70 hover:text-white transition-all rounded-full border border-white/10 hover:border-white/50 hover:-translate-y-1'>
               <RiGithubFill className='text-2xl' />
               <span className="text-sm font-light">justpassingByte</span>
            </a>
            <a href='https://discord.com/users/ngusitink' target='_blank' rel="noreferrer" className='flex items-center gap-2 px-5 py-3 bg-white/5 hover:bg-[#5865F2]/10 text-white/70 hover:text-[#5865F2] transition-all rounded-full border border-white/10 hover:border-[#5865F2]/50 hover:-translate-y-1 cursor-pointer'>
               <FaDiscord className='text-2xl' />
               <span className="text-sm font-light">ngusitink</span>
            </a>
          </motion.div>

          {/* Form */}
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-5 w-full mx-auto p-8 glass'
          >
            <div className='flex flex-col sm:flex-row gap-6 w-full'>
              <input type='text' placeholder='Name' className='input' />
              <input type='email' placeholder='Email' className='input' />
            </div>
            <input type='text' placeholder='Subject' className='input' />
            <textarea placeholder='Your Message...' className='textarea'></textarea>
            
            <button className='btn rounded-full border border-white/30 max-w-[190px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group hover:bg-accent hover:text-white mt-2'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 uppercase tracking-widest text-sm'>
                Send It
              </span>
              <BsArrowRight className='absolute text-[22px] translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300' />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
