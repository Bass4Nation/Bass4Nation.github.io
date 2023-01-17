import Image from "next/image";
import style from "../styles/Index.module.css";
import Headtitle from "../components/Headtitle";
import Link from "next/link";
import { useState, useEffect } from "react";

// Sections to be displayed
const sections = [
  {
    title: "Hi Kristoffer S Søderkvist and is a Junior Developer",
  },
  {
    title: "About this page",
    text: [
      "This is a portfolio page that I will use when searching for a job.",
      "This page is made with Next.js which is server side React.js",
    ],
  },
  {
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
  const [prevLoadingPercentage, setPrevLoadingPercentage] = useState(0);

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
    } else {
      clearInterval(intervalId);
      setIntervalId(null);
      setPrevLoadingPercentage(loadingPercentage); // save current percentage in state variable
    }
  }, [isPaused, startTime]);

  const nextSection = () => {
    setCurrentSection((currentSection) => (currentSection + 1) % sections.length);
    setLoadingPercentage(0);
    setStartTime(null);
  };

  useEffect(() => {
    if (!isPaused) {
      const timeout = setTimeout(() => {
        clearInterval(intervalId);
        setIntervalId(null);
        nextSection();
      }, 10000);
      setLoadingPercentage(prevLoadingPercentage); // use prevLoadingPercentage when you continue
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isPaused, intervalId]);
  // console.log(loadingPercentage);

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
          <section>
            <button
              className={style.button_pause}
              onClick={() => setIsPaused(!isPaused)}
            >
              {isPaused ? "Continue" : "Pause"}
            </button>
          </section>
        </section>
      </main>
    </>
  );
}
