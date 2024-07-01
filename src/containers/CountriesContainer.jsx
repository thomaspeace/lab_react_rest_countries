import Country from "../components/Country"

const CountriesContainer = ({countryList}) => {

  return(
    <>
    <h2>Countries: </h2>
    {countryList.map(country => (
      <Country country={country} />
    ))}
    </>
  )

}

export default CountriesContainer