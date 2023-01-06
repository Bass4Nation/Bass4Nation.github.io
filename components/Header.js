import Navbar from "./Navbar"
import style from "../styles/Header.module.css"

const Header = () => {
    return (
        <div>
            <h1 className={style.main_title}>2023</h1>
            <Navbar />
        </div>
    )
}

export default Header