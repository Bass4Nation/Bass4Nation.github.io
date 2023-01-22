import Image from "next/image";
import style from "../styles/Index.module.css";
import Headtitle from "../components/Headtitle";
import Link from "next/link";
import { useState, useEffect } from "react";

// Sections to be displayed
const sections = [
  {
    id: 0,
    title: "Hi Kristoffer S Søderkvist and is a Junior Developer",
  },
  {
    id: 1,
    title: "About this page",
    text: [
      "This is a portfolio page that I will use when searching for a job.",
      "This page is made with Next.js which is server side React.js",
    ],
  },
  {
    id: 2,
    title: "Little bit about me",
    text: [
      "I am 25 years old, almost 100% finished with my study at University of Østfold in Halden. ",
      "I have currently 170 of 180 points for completion of a bachelor and is completing my last lecture this spring/summer 2023.",
    ],
    link: {
      href: "/aboutme",
      text: "More about me here",
    },
  },
];

export default function Home() {
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
            <p>{sections[currentSection].text}</p>
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
