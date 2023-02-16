import { useState, useEffect } from 'react';
import axios from 'axios';
import Country from './components/Country';
import CountriesList from './components/CountriesList';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const hook = () => {
    axios.get('https://restcountries.com/v3.1/all').then(res => {
      const { data } = res;
      setCountries(data);
      setFilteredCountries(data);
    });

  };
  useEffect(hook, []);

  const handleInputChange = e => {
    const { value } = e.target;
    setSearchQuery(value);
    const queryFilteredCountries = countries.filter(country =>
      country.name.common.toLowerCase().includes(value.trim().toLowerCase())
    );
    const queryFilteredCountriesNames = queryFilteredCountries.map(country =>
      country.name.common.toLowerCase()
    );
    setFilteredCountries(
      queryFilteredCountriesNames.includes(searchQuery.toLowerCase())
        ? [
            queryFilteredCountries[
              queryFilteredCountriesNames.indexOf(searchQuery)
            ]
          ]
        : queryFilteredCountries
    );
  };

  return (
    <div id='App'>
      <h1>Countries Data</h1>
      <div id='searchQueryDiv'>
        Find countries:{' '}
        <input
          id='searchQueryInput'
          value={searchQuery}
          onChange={handleInputChange}
        />
      </div>
      {filteredCountries.length === 1 ? (
        <Country countryData={filteredCountries[0]} />
      ) : filteredCountries.length > 10 && searchQuery !== '' ? (
        <p>Too many matches, please enter a more specific filter</p>
      ) : (
        <CountriesList countriesData={filteredCountries} />
      )}
    </div>
  );
};

export default App;
