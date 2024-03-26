import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';
// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';


const BookCards = ({ books, headline }) => {

    return (
        <div className="my-16 px-4 lg:px-24">
            <h2 className="text-5xl text-center font-bold text-black my-5">{headline}</h2>

            {/* Cards */}
            <div className='mt-12'>
                <Swiper
                    slidesPerView={1}
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
                            slidesPerView: 3
                        },
                        1024: {
                            slidesPerView: 3
                        },
                        1280: {
                            slidesPerView: 4
                        },
                        1440: {
                            slidesPerView: 5
                        },
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper w-full h-full pb-28"
                >
                    {
                        books.map(book =>
                            <SwiperSlide key={book._id}>
                                <Link to={`/book/${book._id}`}>
                                    <div className='relative w-[240px] h-[320px] mx-auto'>
                                        <img src={book.imageURL} alt="" className='w-[240px] h-[320px]' />
                                        <div className='bg-blue-700 hover:bg-black p-2 rounded absolute top-3 right-3'>
                                            <FaCartShopping className='w-4 h-4 text-white' />
                                        </div>
                                        <div>
                                            <h3>{book.bookTitle}</h3>
                                            <p>{book.authorName}</p>
                                        </div>
                                        <div>
                                            <p>${book.price}</p>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default BookCards;