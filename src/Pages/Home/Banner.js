import React from 'react';
import image from '../../assets/images/chair.png';
const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200 items-center gap-6">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img className="w-1/2"  src={image} alt="banner" />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Start Here!</h1>
            <p className="py-6">Find your best treatment here.</p>
            <button className="btn btn-primary  uppercase text-white font-bold  bg-gradient-to-r from-secondary to-primary    ">Get Started</button>
          </div> 
        </div>
      </div>
    );
};

export default Banner;