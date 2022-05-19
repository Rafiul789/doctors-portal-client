import React, { useState } from 'react';
import Footer from '../Shared/footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    const [date,setDate]=useState(new Date());

    return (
        <div>
            <AppointmentBanner date={date}onSelect ={setDate}   ></AppointmentBanner>
            <AvailableAppointment date={date} ></AvailableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;