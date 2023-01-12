import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import style from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);  // darkMode is a boolean and is used to toggle the dark mode on and off

  return (
    <section className={darkMode ? style.darkmode : style.root}>
      <section className={style.layout}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        {children}
        <Footer className={style.footer} />
      </section>
    </section>
  );
};

export default Layout;
