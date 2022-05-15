import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';
const Services = () => {

    const services=[
        {
        _id:1,
        name:"Flouride Treatment",
        description:"You will get the best treatment of the town.Try it!",
        img:fluoride,
        
        
        },
        {
        _id:2,
        name:"Cavity Filling",
        description:"You will get the best treatment of the town.Try it!",
        img:cavity,
        
        
        },
        {
        _id:3,
        name:"Teath Whitening",
        description:"You will get the best treatment of the town.Try it!",
        img:whitening,
        
        
        }
        
        
        
        
        ]
    return (
        <div className="my-28">
            <div  className="text-center   ">   <h1 className="text-primary text-2xl font-bold  " >Our Services</h1>
            <h2  className="text-2xl">Services We Provide</h2>  </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10" > {services.map(service=><Service key={service._id} service={service} ></Service>)}  </div>
        </div> 
        
    );
};

export default Services;