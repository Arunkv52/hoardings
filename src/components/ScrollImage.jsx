import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Slide_1 from '../assets/hoarding.jpg';
import Slide_2 from '../assets/hoarding-1.jpg';
import Slide_3 from '../assets/Volvo Unboxing Cover.png';
import Slide_4 from '../assets/volvo-add.png';



const images = [Slide_1, Slide_2, Slide_3, Slide_4];

const ScrollImage = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
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
          height: '90dvh',
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
                  height: '600px',
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
