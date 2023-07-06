'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Me" textStyles="text-center text-orange-400" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-gray-300"
      > 

        I'm <span className="font-extrabold text-white">Rajitha Priyankara,</span>  a passionate and detail-oriented software engineer specializing in frontend development. 
        With expertise in{' '} <span className="font-extrabold text-gray-700">
        React.JS, Vue.JS, Next.JS, Material UI, Tailwind, Bootsrap & SASS etc,
        </span>{' '} I craft beautiful and intuitive user interfaces. 
        I have a well-rounded skill set that extends from backend development with <span className="font-extrabold text-gray-700">C# ASP.NET MVC, Java, and Python</span> , 
        to exploring <span className="font-extrabold text-gray-700">UI/UX design, Database management, Genarative AI and Windows server administration</span> . Staying up to date with coding trends is important to me, 
        as I constantly seek new challenges to enhance my abilities. Don't hesitate to reach out 
        for collaboration opportunities. I'm excited to make a positive impact through software engineering.
        Let's{' '}
        <span className="font-extrabold text-gray-700">explore</span> the projects
        by scrolling down
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
