import React from 'react';
import Banner from './Banner';
import Extrasection from './Extrasection';
import Info from './Info';
import Services from './Services';


const Home = () => {
    return (
        <div className="px-12">
            
            <Banner></Banner>
<Info></Info> <Services></Services>
<Extrasection></Extrasection>
        </div>
    );
};

export default Home;