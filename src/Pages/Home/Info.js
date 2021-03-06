import React from 'react';
import Infocard from './Infocard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div  className="grid grid-cols-1 lg:grid-cols-3 gap-5 pt-5">
            <Infocard  cardTitle="Opening Hours" bgClass="bg-gradient-to-r from-secondary to-primary  "  img={clock} ></Infocard>
            <Infocard cardTitle="Our Locations" bgClass="bg-[#3A4256]"   img={marker} ></Infocard>
            <Infocard cardTitle="Contact Us" bgClass="bg-gradient-to-r from-secondary to-primary  " img={phone} ></Infocard>
        </div>
    );
};

export default Info;