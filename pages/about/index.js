import Avatar from '../../components/Avatar';
import React, { useState } from 'react';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { RxCode, RxGlobe, RxLayers, RxRocket } from 'react-icons/rx';

const aboutData = [
  {
    title: 'capabilities',
    info: [
      {
        title: 'Full-Stack MVPs',
        icons: [<RxCode key="code" />],
        desc: 'React, Next.js, Node.js, APIs, database, deployment',
      },
      {
        title: 'AI Workflows',
        icons: [<RxGlobe key="ai" />],
        desc: 'Structured input, retrieval, context, reliable output',
      },
      {
        title: 'Product Thinking',
        icons: [<RxLayers key="product" />],
        desc: 'From ambiguous idea to usable product flow',
      },
      {
        title: 'Fast Iteration',
        icons: [<RxRocket key="ship" />],
        desc: 'Ship, test, learn, and improve with AI-assisted workflow',
      },
    ],
  },
  {
    title: 'mindset',
    info: [
      {
        title: 'Workflow > Prompt',
        desc: 'AI is useful when input, context, and output are designed well',
      },
      {
        title: 'Structure > Vague Text',
        desc: 'I turn messy user data into fields the product can use',
      },
      {
        title: '0 to 1 Execution',
        desc: 'Most of my experience comes from building and shipping my own products',
      },
    ],
  },
  {
    title: 'growth',
    info: [
      {
        title: 'Team Environment',
        desc: 'Looking to improve collaboration, code review, and production habits',
      },
      {
        title: 'Startup/Product Fit',
        desc: 'Comfortable with ambiguity, product tradeoffs, and fast MVP work',
      },
      {
        title: 'AI Product Direction',
        desc: 'Interested in systems where AI becomes part of a real workflow',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="absolute bottom-0 -left-[250px] hidden xl:flex"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto flex h-full flex-col items-center gap-x-6 xl:flex-row">
        <div className="flex flex-1 flex-col justify-center">
          <span className="label mb-3">Who I am</span>
          <h2 className="h2">
            I build usable AI products, <span className="text-gradient">independently.</span>
          </h2>
          <p className="mx-auto mb-6 max-w-[520px] px-2 text-[14px] xl:mx-0 xl:mb-12 xl:px-0">
            Around 3 years of hands-on personal product building, mainly from 0 to 1. I am strongest at turning ideas into working MVPs and I am looking for a professional team where I can contribute while improving engineering process and teamwork.
          </p>
        </div>
        <div className="flex h-[380px] w-full flex-col xl:max-w-[48%]">
          <div className="mx-auto mb-4 flex gap-x-4 xl:mx-0 xl:gap-x-8">
            {aboutData.map((item, itemIndex) => (
              <div
                onClick={() => setIndex(itemIndex)}
                key={itemIndex}
                className={`${
                  index === itemIndex
                    ? 'text-accent after:w-[100%] after:bg-accent'
                    : 'text-white/50 hover:text-white/80'
                } relative cursor-pointer text-sm font-medium capitalize transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-8 after:bg-white/20 after:transition-all after:duration-300 xl:text-base`}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center gap-y-3 py-2 xl:items-start xl:gap-y-4 xl:py-6">
            {aboutData[index].info.map((item, itemIndex) => (
              <div key={itemIndex} className="glass glass-hover flex w-full max-w-[440px] items-center gap-x-4 px-5 py-3">
                {item.icons && <div className="flex shrink-0 gap-x-3 text-xl text-accent">{item.icons.map((icon) => icon)}</div>}
                <div className="flex flex-col">
                  <div className="text-sm font-medium text-white/90">{item.title}</div>
                  <div className="text-[12px] font-light text-white/40">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
