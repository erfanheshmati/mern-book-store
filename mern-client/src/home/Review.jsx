// Swiper React Components
import { Swiper, SwiperSlide } from 'swiper/react';
// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';
// Required Modules
import { Pagination, Autoplay } from 'swiper/modules';
// React Icons
import { FaStar } from "react-icons/fa6"
// Flowbite React
import { Avatar } from 'flowbite-react';
// Profile Image
import proImg from "/assets/profile.jpg"


const Review = () => {
    return (
        <div className="my-12 px-4 lg:px-24">
            <h2 className="text-5xl font-bold text-center mb-6 leading-snug">Our Customers</h2>
            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1
                        },
                        640: {
                            slidesPerView: 2
                        },
                        768: {
                            slidesPerView: 2
                        },
                        1024: {
                            slidesPerView: 2
                        },
                        1280: {
                            slidesPerView: 3
                        },
                        1440: {
                            slidesPerView: 3
                        },
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper w-full h-full pb-10 px-4 sm:px-0"
                >
                    <SwiperSlide className='shadow-xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            {/* Stars */}
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            {/* Text */}
                            <div className='mt-7'>
                                <p className='mb-5'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facilis eligendi iste provident aut nam, debitis reiciendis, magni, aspernatur officiis reprehenderit! Consequuntur facere rem pariatur officia quia, ullam blanditiis sapiente!
                                </p>
                                <Avatar img={proImg} alt="avatar of Jese" rounded className='w-10 mb-4' />
                                <h5 className='text-lg font-medium'>Mark Ping</h5>
                                <p className='text-base'>CEO, ABC Company</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            {/* Stars */}
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            {/* Text */}
                            <div className='mt-7'>
                                <p className='mb-5'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facilis eligendi iste provident aut nam, debitis reiciendis, magni, aspernatur officiis reprehenderit! Consequuntur facere rem pariatur officia quia, ullam blanditiis sapiente!
                                </p>
                                <Avatar img={proImg} alt="avatar of Jese" rounded className='w-10 mb-4' />
                                <h5 className='text-lg font-medium'>Mark Ping</h5>
                                <p className='text-base'>CEO, ABC Company</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            {/* Stars */}
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            {/* Text */}
                            <div className='mt-7'>
                                <p className='mb-5'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facilis eligendi iste provident aut nam, debitis reiciendis, magni, aspernatur officiis reprehenderit! Consequuntur facere rem pariatur officia quia, ullam blanditiis sapiente!
                                </p>
                                <Avatar img={proImg} alt="avatar of Jese" rounded className='w-10 mb-4' />
                                <h5 className='text-lg font-medium'>Mark Ping</h5>
                                <p className='text-base'>CEO, ABC Company</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            {/* Stars */}
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            {/* Text */}
                            <div className='mt-7'>
                                <p className='mb-5'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facilis eligendi iste provident aut nam, debitis reiciendis, magni, aspernatur officiis reprehenderit! Consequuntur facere rem pariatur officia quia, ullam blanditiis sapiente!
                                </p>
                                <Avatar img={proImg} alt="avatar of Jese" rounded className='w-10 mb-4' />
                                <h5 className='text-lg font-medium'>Mark Ping</h5>
                                <p className='text-base'>CEO, ABC Company</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            {/* Stars */}
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            {/* Text */}
                            <div className='mt-7'>
                                <p className='mb-5'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facilis eligendi iste provident aut nam, debitis reiciendis, magni, aspernatur officiis reprehenderit! Consequuntur facere rem pariatur officia quia, ullam blanditiis sapiente!
                                </p>
                                <Avatar img={proImg} alt="avatar of Jese" rounded className='w-10 mb-4' />
                                <h5 className='text-lg font-medium'>Mark Ping</h5>
                                <p className='text-base'>CEO, ABC Company</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            {/* Stars */}
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            {/* Text */}
                            <div className='mt-7'>
                                <p className='mb-5'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facilis eligendi iste provident aut nam, debitis reiciendis, magni, aspernatur officiis reprehenderit! Consequuntur facere rem pariatur officia quia, ullam blanditiis sapiente!
                                </p>
                                <Avatar img={proImg} alt="avatar of Jese" rounded className='w-10 mb-4' />
                                <h5 className='text-lg font-medium'>Mark Ping</h5>
                                <p className='text-base'>CEO, ABC Company</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Review;