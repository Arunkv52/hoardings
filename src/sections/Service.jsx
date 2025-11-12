import React from 'react'
import ImageCar from '../assets/Volvo Unboxing Cover.png'
import CarousalImage from '../components/CarousalImage'

const Service = () => {
  return (
    <>
      <div className='md:py-50 py-10 bg-black'>
        <h1 className='text-white  md:px-20 px-5 md:text-3xl text-[24px] pb-10'> Beyond Hoardings – Complete Brand  Visibility Solutions</h1>
        <div className='ser-box md:flex justify-content-between align-top gap-5 md:px-20 px-5'>
          <h2 className='text-white md:text-3xl text-[24px] md:py-0 py-10'>
            At Prism Adverto,  <span className='text-white/60'>we don’t stop at hoardings.</span> We help your brand
            reach audiences everywhere—through theater advertising, van
            campaigns, wall wrapping, and stall fabrication for events. Whether
            it’s creating immersive brand experiences at exhibitions or taking
            your message on the move, we make sure your brand gets noticed,
            remembered, and loved.
          </h2>
          <div className='serve-1 md:pb-0 pb-0'>
            <CarousalImage />
          </div>
        </div>
      </div>
    </>
  )
}

export default Service
