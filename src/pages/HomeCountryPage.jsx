import Header from "../components/Header";
import Form from "../components/Form";
import Country from "../components/Country";
import { useState, useEffect } from "react";

function HomeCountryPage() {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [region, setRegion] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      let data = await fetch("https://restcountries.com/v3.1/all").then(
        (response) => response.json()
      );
      setCountries(data);
      setFiltered(data);
      setIsLoading(false);
    };
    getData();
  }, []);

  const searchCountries = (searchValue) => {
    setSearchInput(searchValue);
  };

  const handleListClick = (region) => {
    setRegion(region);
  };

  useEffect(() => {
    if (region && searchInput) {
      const filteredCountries = countries.filter((country) =>
        Object.values(country)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase())
      );
      setFiltered(filteredCountries.filter((c) => c.region === region));
      return;
    }

    if (region) {
      let filteredCountries = countries.filter((a) => a.region === region);
      setFiltered(filteredCountries);
      return;
    }

    if (searchInput) {
      const filteredCountries = countries.filter((country) =>
        Object.values(country)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase())
      );
      setFiltered(filteredCountries);
    }
  }, [region, searchInput, countries]);

  return (
    <div className="container">
      <Header />
      <Form
        searchInput={searchInput}
        searchCountries={searchCountries}
        handleListClick={handleListClick}
      />
      {isLoading && (
        <div className="loadBlock">
        <h1 className="loadBlock-title">LOADING</h1>
      </div>
      )}
      <section>
        <div className="countries-wrapper">
          {filtered.map((country, index) => (
            <Country
              key={index}
              countryFlag={country.flags.png}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomeCountryPage;
