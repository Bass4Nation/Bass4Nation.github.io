import Link from "next/link";
import { useState, useEffect } from "react";
import style from "../styles/Navbar.module.css";

// This is the list of items in the navbar.
const navItemList = [
  { name: "Home", href: "/" },
  { name: "About me", href: "/aboutme" },
  { name: "My Github", href: "/github" },
  { name: "My websites", href: "/websites" },
  { name: "My CV", href: "/cv" },
  {name: "Bachelor Thesis", href: "/bachelor"},
  {name:"Firebase", href: "/firebase"},
  {name: "Log in", href: "/login"}
  // { name: "Contact me", href: "/contactme"},
];

const Navbar = ({ darkMode, setDarkMode, isMobile }) => {
  // useEffect(() => {
  //   console.log(`dark mode is ${darkMode ? 'enabled' : 'disabled'} in Navbar.js`);
  // }, [darkMode]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Thiis controls when menu is open and when it is closed.
  const mobileMenu = isMenuOpen
    ? style.navigationPanel_mobile
    : style.navigationPanel_mobile_hidden;

  // This controls when button menu is shown or hidden.
  const mobileMenuButton = isMenuOpen
    ? style.menuButtonHidden
    : style.menuButton;

  // This is for desktop version of the navbar.
  const navBarDesktop = () => {
    return (
      <>
        <section className={style.navigationPanel}>
          {navItemList.map((item) => (
            <Link href={item.href} key={item.name} className={style.nav_item}>
              {item.name}
            </Link>
          ))}
          <button
            className={style.nav_button}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "Enable Light Mode" : "Enable Dark Mode"}
          </button>
        </section>
      </>
    );
  };

  // This is the mobile version of the navbar.
  const navBarMobile = () => {
    return (
      <>
        <section className={style.navButtonSection}>
          <button className={mobileMenuButton} onClick={toggleMenu}>
            {isMenuOpen ? null : "Menu"}
          </button>
        </section>

        <section className={mobileMenu}>
          <button className={style.nav_item_mobile} onClick={toggleMenu}>
            {isMenuOpen ? "Close Menu" : null}
          </button>
          {navItemList.map((item) => (
            <Link
              href={item.href}
              key={item.name}
              className={style.nav_item_mobile}
            >
              {item.name}
            </Link>
          ))}
          <button
            className={style.nav_item_mobile}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "Enable Light Mode" : "Enable Dark Mode"}
          </button>
        </section>
      </>
    );
  };

  // console.log(`window size is ${windowSize} in Navbar.js`);
  // console.log(`isMobile is ${isMobile} in Navbar.js`);
  // console.log(`isMenuOpen is ${isMenuOpen} in Navbar.js`);

  return <nav>{isMobile ? navBarMobile() : navBarDesktop()}</nav>;
};

export default Navbar;
