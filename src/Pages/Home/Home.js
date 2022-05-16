import React from 'react';
import Footer from '../Shared/footer';
import Banner from './Banner';
import Contact from './Contact';
import Extrasection from './Extrasection';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonial from './Testimonial';


const Home = () => {
    return (
        <div >
            
            <Banner></Banner>
<Info></Info> <Services></Services>
<Extrasection></Extrasection>
<MakeAppointment></MakeAppointment> <Testimonial></Testimonial> <Contact></Contact>  <Footer></Footer>
        </div>
    );
};

export default Home;