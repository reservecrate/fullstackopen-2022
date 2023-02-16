import Weather from './Weather';

const Country = ({ countryData }) => {
  const { name, cca3, flags, region, capital, population, area, languages } =
    countryData;
  return (
    <div id='matchedCountry'>
      <h3>
        {name.common} ({cca3})
      </h3>
      <img src={flags.png} />
      <p>Official name: {name.official}</p>
      <p>Region: {region}</p>
      <p>Capital: {capital}</p>
      <p>Population: {new Intl.NumberFormat().format(population)}</p>
      <p>
        Area: {new Intl.NumberFormat().format(area)} km
        <sup>2</sup>
      </p>
      <h3>Languages</h3>
      <ul>
        {Object.values(languages).map((language, i) => (
          <li key={i + Math.random() * 9999}>{language}</li>
        ))}
      </ul>
      <h3>Current weather in {capital}</h3>
      <Weather capital={capital}/>
    </div>
  );
};

export default Country;
