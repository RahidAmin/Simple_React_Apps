import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'


const Countries = () => {
    const[countries,SetCountries]=useState([]);
    useEffect(()=>
    {
     fetch("https://restcountries.com/v3.1/all").then((res)=>res.json())
     .then((res)=>
     {
        SetCountries(res)
     });
    },[]);
    return (
        <div>
            <div className='textClass'>
            <h1>Welcome to Countries</h1>
            <h3>Total Countries:{countries.length}</h3>
            </div>
            
            <div className='countries'>
            {/* {
                countries.map(c=>console.log(c))
            } */}
           {
            countries.map(country=> <Country country1={country} key={country.cca3}></Country>)
           }
        </div>
        </div>
        
    );
};

export default Countries;