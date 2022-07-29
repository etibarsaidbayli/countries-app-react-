// import flag from '../assets/img/1280px-Flag_of_Germany.svg.png'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import{useEffect,useState} from 'react'
function Country ({countryFlag,name,population,region,capital}) {

   
    
    return (
        <Link to={`name/${name}`} className="country-box">
            <div className="country-image">
                <img src={countryFlag} alt=""/>
            </div>
            <h3 className='country-title'>{name}</h3>
            <div className="country-items">
                <p>Population:
                    <span> {population}</span>
                </p>
                <p>Region:
                    <span> {region}</span>
                </p>
                <p>Capital:
                    <span> {capital}</span>
                </p>
            </div>
        </Link>
    )
}

export default Country