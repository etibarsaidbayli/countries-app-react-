import React from "react";
import { useState } from "react";

function Form({ searchCountries, searchInput, handleListClick }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [region, setRegion] = useState("Filter by Region");

  function handleToggleOpen() {
    setDropdownOpen((open) => !open);
  }

  function handleRegionClick(region) {
    handleListClick(region);
    setRegion(region);
    setDropdownOpen(false);
  }

  return (
    <form autoCapitalize="off">
      <div className="form-box">
        <div className="form-input-box">
          <div className="form-input-search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <input
            type="text"
            placeholder="Search for a country"
            value={searchInput}
            onChange={(event) => searchCountries(event.target.value)}
          />
        </div>
        <div className="filter-select-box">
          <div onClick={handleToggleOpen} className="filter-select-box-title">
            <h3 className="filter-select-box-title-text">{region}</h3>
            <i className="fa-solid fa-angle-down"></i>
          </div>
          <ul
            className={`filter-select-countries ${
              isDropdownOpen ? "filter-select-open" : ""
            }`}
          >
            <li
              className="filter-item"
              onClick={() => handleRegionClick("Africa")}
            >
              Africa
            </li>
            <li
              className="filter-item"
              onClick={() => handleRegionClick("Americas")}
            >
              Americas
            </li>
            <li
              className="filter-item"
              onClick={() => handleRegionClick("Asia")}
            >
              Asia
            </li>
            <li
              className="filter-item"
              onClick={() => handleRegionClick("Europe")}
            >
              Europe
            </li>
            <li
              className="filter-item"
              onClick={() => handleRegionClick("Oceania")}
            >
              Oceania
            </li>
          </ul>
        </div>
      </div>
    </form>
  );
}

export default Form;
