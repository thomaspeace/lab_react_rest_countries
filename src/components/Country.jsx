const Country = ({country}) => {

  return(
    <>
    <h4>{country.flag + country.name.common + country.flag}</h4>
    <button>Visited</button>
    </>
  )

}

export default Country