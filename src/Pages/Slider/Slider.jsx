import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Typewriter } from 'react-simple-typewriter';

const SwiperSlider = () => {

    return (
        <div className='h-[500px]'>
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => { }}
                onSlideChange={() => { }}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide>
                    <div className='h-[500px] slide1 bg_properties flex justify-center items-center'>
                        <div className='text-center w-[1000px]'>
                            <h1 className='text-6xl text-black font-bold pb-6'>
                                <Typewriter
                                    words={['Dive into the World of Paint and Draw']}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={50}
                                    deleteSpeed={30}
                                    delaySpeed={500}
                                />
                            </h1>
                            <p className='text-2xl text-black text-white bg-black bg-opacity-30 p-8 rounded-xl'>Explore the endless possibilities of expression through vibrant strokes and intricate lines. Let your imagination run wild as you bring your ideas to life on canvas.</p>
                            <button className='btn text-xl mt-8'>Explore More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[500px] slide2 bg_properties flex justify-center items-center'>
                        <div className='text-center w-[1000px]'>
                            <h1 className='text-6xl text-black font-bold pb-6'>
                            <Typewriter
                                    words={['Transforming Ideas into Art']}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={50}
                                    deleteSpeed={30}
                                    delaySpeed={500}
                                />
                            </h1>
                            <p className='text-2xl text-black text-white bg-black bg-opacity-30 p-8 rounded-xl'>Experience the magic of turning inspiration into tangible creations. From bold hues to delicate shades, discover the power of color to evoke emotion and captivate the senses.</p>
                            <button className='btn text-xl mt-8'>Explore More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[500px] slide3 bg_properties flex justify-center items-center'>
                        <div className='text-center w-[1000px]'>
                            <h1 className='text-6xl text-black font-bold pb-6'>
                            <Typewriter
                                    words={['Journey into Artistic Excellence']}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={50}
                                    deleteSpeed={30}
                                    delaySpeed={500}
                                />
                            </h1>
                            <p className='text-2xl text-black text-white bg-black bg-opacity-30 p-8 rounded-xl'>Embark on a journey of skill and mastery as you refine your techniques in painting and drawing. Learn from the masters and unlock your full artistic potential with every stroke.</p>
                            <button className='btn text-xl mt-8'>Explore More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[500px] slide4 bg_properties flex justify-center items-center'>
                        <div className='text-center w-[1000px]'>
                            <h1 className='text-6xl text-black font-bold pb-6'>
                            <Typewriter
                                    words={['Crafting Your Artistic Legacy']}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={50}
                                    deleteSpeed={30}
                                    delaySpeed={500}
                                />
                            </h1>
                            <p className='text-2xl text-black text-white bg-black bg-opacity-30 p-8 rounded-xl'>Witness the evolution of your artistry from humble sketches to breathtaking masterpieces. Each stroke is a step closer to leaving your mark on the canvas of history.</p>
                            <button className='btn text-xl mt-8'>Explore More</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SwiperSlider;