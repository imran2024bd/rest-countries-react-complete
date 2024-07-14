import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './countries.css'


const Countries = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries = country => {
        // console.log('visited Countries');
        // console.log(country);
        const newVisitedCountry = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountry);
    }

    const [flagVisited, setFlagVisited] = useState([]);

    const handleFlagVisited = flag => {
        // console.log(flag);
        const newFlagVisited = [...flagVisited, flag];
        setFlagVisited(newFlagVisited);
    }


    return (
        <div>
            <h3> Total Countries : {countries.length} </h3>

            {/* Visited Countries */}
            <div>
                <h4>Visited Countries:{visitedCountries.length} </h4>
                <div className="country-row">
                    <ul>
                        {
                            visitedCountries.map(country => <li > {country.name.common}  </li>
                            )
                        }
                    </ul>
                    <ul>
                        {
                            visitedCountries.map(country => <li >  {country.capital}  </li>
                            )
                        }
                    </ul>
                    <ul>
                        {
                            visitedCountries.map(country => <li >  {country.region}   </li>
                            )
                        }
                    </ul>

                </div>
            </div>
            {/* Flag Visited */}
            <div className="flag-container">
                {
                    flagVisited.map((flag, idx) => <img
                        key={idx}
                        src={flag.flags.png}
                    ></img>)
                }
            </div>
            {/* Display Countries */}
            <div className="country-container">
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                        handleFlagVisited={handleFlagVisited}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;