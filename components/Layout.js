import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import style from "../styles/Layout.module.css";


const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);  // darkMode is a boolean and is used to toggle the dark mode on and off

  const mobileSize = 768;

  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowSize < mobileSize;



  return (
    <section className={darkMode ? style.darkmode : style.root}>
      <section className={style.layout}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} isMobile={isMobile} />
        {children}
        <Footer className={style.footer} isMobile={isMobile}/>
      </section>
    </section>
  );
};

export default Layout;
