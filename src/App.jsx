import { useEffect, useState } from 'react'
import './App.css'
import CountriesContainer from './containers/CountriesContainer';
import VisitedCountriesContainer from './containers/VisitedCountriesContainer';

function App() {
  
  const [countries, setCountries] = useState(null)
  const [visitedCountries, setVisitedCountries] = useState(null)

  const fetchCountries = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error('Error fetching countries from API:', error);
    }
  }

  useEffect(() => {
    fetchCountries()
  }, [])



  return (
    <>
    <div>
      {countries ? <CountriesContainer countryList = {countries}/> : <p>Countries not loaded</p>}
    </div>
    <div>
      <VisitedCountriesContainer visitedCountryList = {visitedCountries}/>
    </div>
    </>
  )
}

export default App
