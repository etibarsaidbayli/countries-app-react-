import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
function DetailsPage() {



  let { countryName } = useParams();

  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      let data = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`
      ).then((response) => response.json());

      setCountry(data);
      setIsLoading(false);
    };
    getData();
  }, [countryName]);

  return (
    <div className="container">
      <Header />
      <div className="back-block">
        <Link className="back-link" to="/">
          <i className="fa-solid fa-arrow-left"></i>
          Back
        </Link>
        {isLoading ? (
          <div className="loadBlock">
            <h1 className="loadBlock-title">LOADING</h1>
          </div>
        ) : (
          ""
        )}
      </div>
      {country.map(
        ({
          flags,
          name,
          nativeName,
          population,
          region,
          subregion,
          capital,
          topLevelDomain,
          currencies,
          languages,
          borders,
        }) => (
          <div className="details-wrapper">
            <div className="details-image-box">
              <img src={flags.png} alt="" />
            </div>
            <div className="details-items-box">
              <div className="details-items-title">
                <h2>{name.common}</h2>
              </div>
              <div className="details-country-items">
                <div className="country-items dcountry-items">
                  <p>
                    Native Name:
                    <span> {name.official}</span>
                  </p>
                  <p>
                    Population:
                    <span> {population}</span>
                  </p>
                  <p>
                    Region:
                    <span> {region}</span>
                  </p>
                  <p>
                    Sub Region:
                    <span> {subregion}</span>
                  </p>
                  <p>
                    Capital:
                    <span> {capital}</span>
                  </p>
                </div>
                <div className="country-items dcountry-items">
                  <p>
                    Top Level Domain:
                    <span> {topLevelDomain}</span>
                  </p>
                  <p>
                    Currencies:
                    <span>
                      {" "}
                      {currencies ? (
                        Object.keys(currencies).join(", ")
                      ) : (
                        <span>
                          <nav>no currencies</nav>
                        </span>
                      )}
                    </span>
                  </p>
                  <p>
                    Languages:
                    <span>
                      {" "}
                      {languages ? (
                        Object.keys(languages).join(", ")
                      ) : (
                        <span>no languages</span>
                      )}
                    </span>
                  </p>
                </div>
                <div className="details-country-borders">
                  <div className="country-items dcountry-items">
                    <p>
                      Border Countries:
                      {borders ? (
                        borders.map((a) => (
                          <button className="border-button">{a}</button>
                        ))
                      ) : (
                        <span> No borders</span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default DetailsPage;
