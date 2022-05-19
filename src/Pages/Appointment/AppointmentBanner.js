import React from 'react';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';


const AppointmentBanner = ({date,setDate}) => {



    return (
        <div style={{
          background: `url(${bg})`,
          backgroundSize: 'cover'
      }}  className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair}className="max-w-sm rounded-lg shadow-2xl" alt="banner" />
          <div>
          <DayPicker  mode="single"
      selected={date}
      onDayClick={setDate}  />
          </div>

         

        </div>
        
  

      </div>
    );
};

export default AppointmentBanner;