import React from 'react';
import './Country.css'

const Country = (props) => {
    const{population,area,name,flags}=props.country1;
    return (
        
            
            <div className='country'>
            <h2 className='nameClass'>Name: {name.common}</h2>
            <img src={flags.png} alt=""/>
            <h5>Population:{population}</h5>
            <p><small>Area:{area}</small></p>
        </div>
        
      
    );
};

export default Country;