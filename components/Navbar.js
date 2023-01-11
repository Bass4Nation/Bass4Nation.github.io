import Link from "next/link";
import { useState, useEffect } from "react";
import style from "../styles/Navbar.module.css";

// This is the list of items in the navbar
const navItemList = [
  { name: "Home", href: "/" },
  { name: "About me", href: "/aboutme" },
  { name: "My websites", href: "/websites" },
  { name: "My Anime watchlist", href: "/anime" },
];

const Navbar = ({ darkMode, setDarkMode }) => {

  // useEffect(() => {
  //   console.log(`dark mode is ${darkMode ? 'enabled' : 'disabled'} in Navbar.js`);
  // }, [darkMode]);

  return (
    <nav>
      <div className={style.navigationPanel}>
        {navItemList.map((item) => (
          <Link href={item.href} key={item.name} className={style.nav_item}>
            {item.name}
          </Link>
        ))}
        <button className={style.nav_button} onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Enable Light Mode" : "Enable Dark Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
