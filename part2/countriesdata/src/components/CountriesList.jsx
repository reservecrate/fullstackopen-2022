import { useState } from 'react';
import Country from './Country';

const CountriesList = ({ countriesData }) => {
  const [expandedCountry, setExpandedCountry] = useState('');

  const handleShow = e => {
    setExpandedCountry(e.target.id);
  };

  const handleHide = () => {
    setExpandedCountry('');
  };

  return (
    <div id='CountriesList'>
      {countriesData.map(country =>
        expandedCountry === country.name.official ? (
          <div className='countries' key={country.name.official}>
            <h2>
              {country.name.common}{' '}
              <button id={country.name.official} onClick={handleHide}>
                hide
              </button>
            </h2>
            <Country countryData={country} key={country.name.official} />
          </div>
        ) : (
          <h2
            key={country.name.official + 'heading'}
            className='countryHeadings'
          >
            {country.name.common}{' '}
            <button id={country.name.official} onClick={handleShow}>
              show
            </button>
          </h2>
        )
      )}
    </div>
  );
};

export default CountriesList;
