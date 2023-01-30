import Image from "next/image";
import style from "../styles/Index.module.css";
import Headtitle from "../components/Headtitle";
import Link from "next/link";
import { useState, useEffect } from "react";
import { indexText } from "./api/data/index";

export default function Home() {
  const [sections, setSections] = useState(indexText);
  const [currentSection, setCurrentSection] = useState(0);
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // new state variable to track whether the bar is paused or not
  const [intervalId, setIntervalId] = useState(null); // new state variable to track the intervalId
  const [startTime, setStartTime] = useState(null); // new state variable to track the start time
  const [currentLoadingProcentage, setCurrentLoadingProcentage] = useState(0);

  useEffect(() => {
    let interval;
    if (!isPaused) {
      if (!startTime) {
        setStartTime(Date.now());
      }
      const updateLoading = () => {
        const elapsedTime = Date.now() - startTime;
        setLoadingPercentage((elapsedTime / 10000) * 100);
      };
      interval = setInterval(updateLoading, 50);
      setIntervalId(interval);
    }
    return () => {
      clearInterval(interval);
      setCurrentLoadingProcentage(loadingPercentage);
    };
  }, [isPaused, startTime]);

  const nextSection = () => {
    setCurrentSection(
      (currentSection) => (currentSection + 1) % sections.length
    );
    setLoadingPercentage(0);
    setStartTime(null);
  };

  const prevSection = () => {
    if(currentSection === 0) {
      setCurrentSection(sections.length - 1);
    } else {
    setCurrentSection((currentSection) =>   (currentSection - 1) % sections.length);
    }
    setLoadingPercentage(0);
    setStartTime(null);
  };

  useEffect(() => {
    if (!isPaused) {
      const timeout = setTimeout(() => {
        setLoadingPercentage(currentLoadingProcentage);
        clearInterval(intervalId);
        setIntervalId(null);
        nextSection();
      }, 10000);
      setCurrentLoadingProcentage(loadingPercentage);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isPaused, intervalId]);

  // console.log(loadingPercentage);
  // console.log(currentLoadingProcentage);
  const multipleText = sections[currentSection].text?.length > 2;
  const multipleTextParagraphs = sections[currentSection].text?.map((text, index) => (
    <p key={index}>{text}</p>
  ));

  return (
    <>
      <Headtitle title="Bass4Nation's portefolio site - bass4nation.github.io" />
      <main className={style.main}>
        <section className={style.root}>
          <sections className={style.sectionDisplayed}>
            {<h1>{sections[currentSection].title}</h1>}
            {sections[currentSection].link ? (
              <Link href={sections[currentSection].link.href}>
                {sections[currentSection].link.text}
              </Link>
            ) : null}
            {multipleText ? (multipleTextParagraphs) : (<p>{sections[currentSection].text}</p>)}
          </sections>
          <section className={style.loading_bar}>
            <section
              className={style.loading_bar_fill}
              style={{ width: `${loadingPercentage}%` }}
            />
          </section>
          <section className={style.button_section}>
            <button onClick={prevSection}>Prev</button>
            <button onClick={() => setIsPaused(!isPaused)}>
              {isPaused ? "Continue" : "Pause"}
            </button>
            <button onClick={nextSection}>Next</button>
          </section>
        </section>
      </main>
    </>
  );
}
