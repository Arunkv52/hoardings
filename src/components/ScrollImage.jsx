import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Slide_1 from '../assets/works/Hoarding-1.jpg';
import Slide_3 from '../assets/works/Hoarding - 2.jpg';
import Slide_2 from '../assets/works/Hoarding - 3.jpg';



const images = [Slide_1, Slide_2, Slide_3];

const ScrollImage = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [0, -((images.length - 1) * window.innerWidth)] // scroll distance
  );

  return (
    <section
      ref={targetRef}
      style={{ height: `${images.length * 100}vh`, position: 'relative' }}
    >
     
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100dvh',
          overflow: 'hidden',
        }}
      >
        <motion.div
          style={{
            display: 'flex',
            width: `${images.length * 100}vw`,
            height: '100%',
            x,
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              style={{
                width: '100dvw',
                height: '100%',
                flexShrink: 0,
                padding:'10px'
                
              }}
            >
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                style={{
                  width: '100dvw',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '5px'
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
       <div className='md:px-10 px-0 text-white md:text-8xl text-5xl'>
        <h2>Think Big. Advertise Bigger.</h2>
      </div>
    </section>
  );
};

export default ScrollImage;
