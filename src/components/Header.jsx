import moon from "../assets/img/icon-moon.svg";
import {Link} from 'react-router-dom'
import sun from "../assets/img/icon-sun.svg"
import {useState} from 'react'



function Header() {


  const [darkMode,setDarkMode] = useState(false)

  

  const handleChangeMode = () => {

    if(darkMode) {
      document.getElementById("html").setAttribute("data-theme", "light")
      localStorage.setItem('light-mode', 'light')
      console.log('if srabotal')
      setDarkMode(!darkMode)
      localStorage.removeItem('dark-mode')
    }else {
      document.getElementById("html").setAttribute("data-theme", "dark")
      localStorage.setItem('dark-mode',"dark")
      console.log("else srabotal")
      setDarkMode(!darkMode)
      localStorage.removeItem('light-mode')
    }
  }  






  return (
    <header>
      <div className="header-logo">
        <Link to={'/'}>Where in the world?</Link>
      </div>
      <div onClick={handleChangeMode}  className="header-mode-block">
        <img id='mode-pic' src={darkMode ? sun : moon} alt="moon" />
        <div className="header-mode-block-title">{darkMode ? "Light Mode" : "Dark Mode"}</div>
      </div>
    </header>
  );
}

export default Header;
