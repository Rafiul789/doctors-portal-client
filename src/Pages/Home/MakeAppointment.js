import React from 'react';
import doctor from '../../assets/images/doctor.png';
import background from '../../assets/images/appointment.png';
const MakeAppointment = () => {
    return (
        <section  style={{
            background:`url(${background})`
        }}   className="flex justify-center items-center ">
          <div className="flex-1 hidden lg:block"> <img className="mt-[-100px]" src={doctor} alt=""></img> </div>
          <div  className="flex-1 px-5 pb-5"> <h3 className="text-xl text-primary  font-bold" >Appointment </h3> <h2 className="text-3xl text-white">Make an Appointment Today</h2>  <p className="text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page  </p> 
          <button className="btn btn-primary  uppercase text-white font-bold  bg-gradient-to-r from-secondary to-primary    ">Get Started</button>
           </div>  
        </section>
    );
};

export default MakeAppointment;