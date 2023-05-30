import React from 'react';

const SectionTitle = ({subHeading,heading}) => {
    return (
        <div className='lg:w-2/6 mx-auto py-4 my-12'>
            <p className='text-yellow-600 text-center mb-4'>--- {subHeading} ---</p>
            <h2 className='xl:text-4xl md:text-3xl text-xl uppercase border-y-4 text-center py-4'>{heading}</h2>
        </div>
    );
};

export default SectionTitle;