import { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountries, handleFlagVisited }) => {
    // console.log(country);
    const { name, region, flags, capital } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        // console.log('add Visited');
        setVisited(!visited);
    }

    // console.log(handleVisitedCountries);


    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h4 style={{ color: visited ? 'rebeccapurple' : 'black' }}>Name: {name.common} </h4>
            <h5> Capital:{capital} </h5>
            <img src={flags.png} alt="" />
            <p> Region: {region} </p>
            <hr />
            <button onClick={handleVisited}>{visited ? 'Seen' : 'Unseen'}</button>
            {visited ? ' I have Visited' : ' To be visited'}
            {/* {visited && ' I have Visited'} */}
            <br />
            <hr />
            <button onClick={() => handleVisitedCountries(country)}>Mark visited</button>
            <br />
            <hr />
            <button onClick={() => handleFlagVisited(country)}>Add Flag</button>
        </div>
    );
};

export default Country;