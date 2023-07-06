'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| Stacks" textStyles="text-center text-orange-400" />
      <TitleText
        title={(
          <>
          Embark on a Journey through My Stack World!
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-20 right-20 md:w-[100px] md:h-[100px]  w-[70px] h-[70px] ">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 md:w-[100px] md:h-[100px] w-[70px] h-[70px]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/3 left-[75%] md:w-[100px] md:h-[100px] w-[70px] h-[70px]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/5 left-[65%] md:w-[100px] md:h-[100px] w-[70px] h-[70px]">
          <img src="people-04.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-8 left-[15%] md:w-[100px] md:h-[100px] w-[70px] h-[70px]">
          <img src="people-05.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-16 left-[25%] md:w-[100px] md:h-[100px] w-[70px] h-[70px]">
          <img src="people-06.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/3 left-[35%] md:w-[100px] md:h-[100px] w-[70px] h-[70px]">
          <img src="people-07.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-16 left-[33%] md:w-[100px] md:h-[100px] w-[70px] h-[70px]">
          <img src="people-13.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-16 left-[53%] md:w-[100px] md:h-[100px] w-[70px] h-[70px] ">
          <img src="people-08.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-44 left-[56%] md:w-[100px] md:h-[100px] w-[70px] h-[70px]">
          <img src="people-09.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-80 left-[20%] md:w-[100px] md:h-[100px] w-[70px] h-[70px]">
          <img src="people-10.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-56 left-[10%] md:w-[100px] md:h-[100px] w-[70px] h-[70px]">
          <img src="people-11.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-5 left-[40%] md:w-[100px] md:h-[100px] w-[70px] h-[70px]">
          <img src="people-12.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-20 left-[85%] md:w-[100px] md:h-[100px] w-[70px] h-[70px]">
          <img src="people-14.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-36 left-[67%] md:w-[100px] md:h-[100px] w-[70px] h-[70px]">
          <img src="people-15.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-48 left-[4%] md:w-[100px] md:h-[100px] w-[70px] h-[70px]">
          <img src="people-16.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-56 left-[45%] md:w-[100px] md:h-[100px] w-[70px] h-[70px]">
          <img src="people-17.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-64 left-[70%] md:w-[100px] md:h-[100px] w-[70px] h-[70px]">
          <img src="people-18.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-72 left-[90%] md:w-[100px] md:h-[100px] w-[70px] h-[70px]">
          <img src="people-19.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-96 left-[10%] md:w-[100px] md:h-[100px] w-[70px] h-[70px]">
          <img src="people-20.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-2/3 left-[76%] md:w-[100px] md:h-[100px] w-[70px] h-[70px]">
          <img src="people-21.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/4 left-[9%] md:w-[100px] md:h-[100px] w-[70px] h-[70px]">
          <img src="people-22.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-3/4 left-[55%] md:w-[100px] md:h-[100px] w-[70px] h-[70px]">
          <img src="people-23.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-72 left-[50%] md:w-[100px] md:h-[100px] w-[70px] h-[70px]">
          <img src="people-24.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-32 left-[90%] md:w-[100px] md:h-[100px] w-[70px] h-[70px]">
          <img src="people-25.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-80 left-[40%] md:w-[100px] md:h-[100px] w-[70px] h-[70px]">
          <img src="people-27.png" alt="people" className="w-full h-full" />
        </div>

      </motion.div>
    </motion.div>
  </section>
);

export default World;
