import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';

const AvailableAppointment = ({date}) => {

const [services,setServices]=useState([])
const [treatment, setTreatment] = useState(null);


useEffect(
    ()=>{
fetch('services.json')
.then(res=>res.json())
.then(data=>setServices(data))

    }
    
    
    
    ,[])

    return (
        <div>
              {/* <h4 className='text-xl text-secondary text-center my-12'  > Your Available Appointment On  {format(date, 'dd-mm-yyyy')}  </h4> */}
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>


        </div>
    );
};

export default AvailableAppointment;