import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import ImageCar from "../assets/Volvo Unboxing Cover.png";


const CarousalImage = () => {
    return (
        <div>
            <Carousel>
                <CarouselContent>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/2 cursor-grab">
                        <div className="serve-1 md:pb-0 pb-10">
                            <img src={ImageCar} alt="" />
                            <h4 className="md:text-2xl text-[20px] text-white pt-5">
                                Van Campaigns
                            </h4>
                            <p className="text-white/80 pt-2">
                                Drive your brand straight to your audience with moving ads.
                            </p>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/2 cursor-grab">
                        <div className="serve-1 md:pb-0 pb-10">
                            <img src={ImageCar} alt="" />
                            <h4 className="md:text-2xl text-[20px] text-white pt-5">
                                Theatre Advertising
                            </h4>
                            <p className="text-white/80 pt-2">
                                 Make your brand unforgettable in front of moviegoers.
                            </p>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/2 cursor-grab">
                        <div className="serve-1 md:pb-0 pb-10">
                            <img src={ImageCar} alt="" />
                            <h4 className="md:text-2xl text-[20px] text-white pt-5">
                               Wall Wrapping
                            </h4>
                            <p className="text-white/80 pt-2">
                                Transform plain walls into vibrant brand statements
                            </p>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <div className='absolute top-30 right-15 md:-bottom-100 -bottom-50'>
                    <CarouselPrevious />
                    <CarouselNext />
                </div>

            </Carousel>

        </div>
    )
}

export default CarousalImage
