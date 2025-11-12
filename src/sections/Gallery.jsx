import React from 'react'
import ScrollImage from '../components/ScrollImage'

const Gallery = () => {
  return (
    <div className='bg-black md:py-20 py-10'>
      <ScrollImage />
      <div className='scr-txt md:pt-20 pt-0 md:px-20 px-5 md:flex text-white'>
        <div className='md:w-1/2 w-full  md:pb-0 pb-10'>
          <h2 className='text-left text-white md:text-7xl text-3xl text-lowercase'>
            Maximize Your
            <span className='text-white/50'> Brand Visibility</span> with
            Hoardings
          </h2>
        </div>
        <div className='md:w-1/2 w-full md:px-10'>
          <p className='py-2 text-[18px] pb-6 text-white/60'>
            In today’s fast-paced world, grabbing attention is everything.
            Hoardings remain one of the most effective ways to make your brand
            visible to <span className='text-white'> thousands of potential customers daily.</span> Whether it’s
            static or dynamic digital hoardings, each format offers unique
            advantages—static hoardings create a lasting impression with
            impactful designs, while digital hoardings captivate audiences with
            motion, color, and flexibility to update messages instantly. At
            Prism Adverto, <span className='text-white'> we make your brand shine</span> by strategically placing
            hoardings in high-traffic areas, designing visually striking
            content, and leveraging both static and digital formats to maximize
            reach. The result? Unmatched visibility that elevates your brand
            above the competition.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Gallery
