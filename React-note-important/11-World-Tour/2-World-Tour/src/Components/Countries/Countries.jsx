import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'



const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);



    // useEffect(() => {}, []);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => setCountries(data))
    }, []);



// WLINK: https://react.dev/learn/updating-arrays-in-state
    const handleVisitedCountry = country => {
        // console.log('add this to your visited country');
        // console.log(country);

        //Wrong// visitedCountries.push(country);//wrong
        //direct push pop kora jaina. array update er jonno new array niye , array er previous data Spread operator (...) er maddhome niye  and new data niye merge korte hobe and state update korte hobe. so push na kore next 2 line code kora hoyeche
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries);
    }



    const handleVisitedFlags =  flag => {
        // console.log('flag adding');
        const  newVisitedFlags = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlags);
        
    }


    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    return (
        <div >
            <h2>Total countries: {countries.length}</h2>

            {/* Visited Country */}
            <div>
                <h4>Visited Countries: {visitedCountries.length}</h4>
                <ul>
                     {
                        visitedCountries.map(country =>
                        <li key={country.cca3}>{country.name.common}</li>)
                     }
                </ul>
            </div>

            {/* Display flags */}
            <div className="flag-container">
            {/*NOTE: Structure of map array.map(function(currentValue, index, arr), thisValue)
                WLINK:
            https://www.w3schools.com/jsref/jsref_map.asp
             */}
                     {
                        
                        visitedFlags.map((flag, idx) => <img key={idx} src={flag} alt="img"/>)
                     }
            </div>






            {/* Display countries */}
            <div className="country-container">
            {
                countries.map(country=><Country
                  key={country.cca3}
                  country={country}
                  handleVisitedCountry={handleVisitedCountry}
                  handleVisitedFlags={handleVisitedFlags}
                   ></Country>)
            }
            </div>


            
        </div>
    );
};

export default Countries;