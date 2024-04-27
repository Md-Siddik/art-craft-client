import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SwiperSlider = () => {

    return (
        <div className='h-[500px]'>
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => {}}
                onSlideChange={() => {}}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide>
                    <div className='h-[500px] slide_bg1 bg_properties flex justify-center items-center'>
                        <div className='text-center w-[1000px]'>
                            <h1 className='text-4xl text-black font-bold pb-6'>Dive into the World of Paint and Draw</h1>
                            <p className='text-2xl text-black'>Explore the endless possibilities of expression through vibrant strokes and intricate lines. Let your imagination run wild as you bring your ideas to life on canvas.</p>
                            <button className='btn text-xl mt-8'>Explore More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[500px] slide_bg2 bg_properties flex justify-center items-center'>
                        <div className='text-center w-[1000px]'>
                            <h1 className='text-4xl text-black font-bold pb-6'>Transforming Ideas into Art</h1>
                            <p className='text-2xl text-black'>Experience the magic of turning inspiration into tangible creations. From bold hues to delicate shades, discover the power of color to evoke emotion and captivate the senses.</p>
                            <button className='btn text-xl mt-8'>Explore More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[500px] slide_bg3 bg_properties flex justify-center items-center'>
                        <div className='text-center w-[1000px]'>
                            <h1 className='text-4xl text-black font-bold pb-6'> Journey into Artistic Excellence</h1>
                            <p className='text-2xl text-black'>Embark on a journey of skill and mastery as you refine your techniques in painting and drawing. Learn from the masters and unlock your full artistic potential with every stroke.</p>
                            <button className='btn text-xl mt-8'>Explore More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[500px] slide_bg4 bg_properties flex justify-center items-center'>
                        <div className='text-center w-[1000px]'>
                            <h1 className='text-4xl text-black font-bold pb-6'>Crafting Your Artistic Legacy</h1>
                            <p className='text-2xl text-black'>Witness the evolution of your artistry from humble sketches to breathtaking masterpieces. Each stroke is a step closer to leaving your mark on the canvas of history.</p>
                            <button className='btn text-xl mt-8'>Explore More</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SwiperSlider;