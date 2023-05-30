import React from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import featureImg from '../../assets/home/featured.jpg'
import './Features.css'
const FeaturesItem = () => {
    return (
        <div className='featuresBg my-12'>
            <div className='pt-8'>
                <SectionTitle
                    heading={'from our menu'}
                    subHeading={'check it out'}
                ></SectionTitle>
            </div>
            <div className='md:flex gap-8 justify-center items-center py-16 xl:px-24 pb-32'>
                <img className='rounded' style={{ width: '640px' }} src={featureImg} alt="" />
                <div className='lg:ps-8 text-white'>
                     <p>March 20, 2023</p>
                     <h1 className='uppercase'>where can i ge some</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab sit assumenda soluta suscipit nostrum libero quis aperiam provident accusantium quae,
                        nihil, quisquam autem ratione est! Sequi quisquam nisi temporibus
                        cupiditate praesentium tempore ratione ea error est fugit exercitationem excepturi eos quaerat neque, cum, porro quasi voluptas vel!
                        Voluptas, odit recusandae.</p>
                    <button className="btn btn-outline text-white border-0 border-b-4 mt-8">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturesItem;