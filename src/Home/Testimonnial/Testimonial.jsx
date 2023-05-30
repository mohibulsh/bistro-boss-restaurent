import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
//swipper importer
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required rating
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


import { Navigation } from "swiper";

const Testimonial = () => {
    const [review, setReview] = useState([])

    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    return (
        <section>
            <SectionTitle subHeading={'What Our Clients Say'}
                heading={'testimonial'}
            >
            </SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                <div className='flex justify-center items-center'>
                    {
                        review.map(rev => <SwiperSlide
                            key={rev._id}>

                            <div className='px-24 py-8 flex flex-col justify-center items-center'>
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={rev.rating}
                                        readOnly
                                    />
                                    <p className='py-2'>{rev.details}</p>
                                    <h1 className='text-xl font-bold text-yellow-600'>{rev.name}</h1>
                            </div>
                        </SwiperSlide>)
                    }
                </div>
            </Swiper>
        </section>
    );
};

export default Testimonial;