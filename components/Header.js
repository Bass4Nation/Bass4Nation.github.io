import { useEffect } from "react"
import Navbar from "./Navbar"
import style from "../styles/Header.module.css"

const Header = ({ darkMode, setDarkMode }) => {
    // useEffect(() => {
    //     console.log(`dark mode is ${darkMode ? 'enabled' : 'disabled'} in Header.js`);
    //   }, [darkMode]);

    return (
        <div>
            <h1 className={style.main_title}>2023</h1>
            <Navbar  darkMode={darkMode} setDarkMode={setDarkMode}/>
        </div>
    )
}

export default Header