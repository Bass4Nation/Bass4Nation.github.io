import Image from "next/image";
import style from "../styles/Index.module.css";
import Headtitle from "../components/Headtitle";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Headtitle title="Bass4Nation's portefolio site - bass4nation.github.io" />
      <main className={style.main}>
        <section>
          <h1>Hi Kristoffer S Søderkvist and is a Junior Developer</h1>
        </section>
        <section>
          <h1>About this page</h1>
          <p>
            {" "}
            This is a portfolio page that I will use when searching for a job.
          </p>
          <p>This page is made with Next.js which is server side React.js</p>
        </section>
        <section>
          <h1>Little bit about me</h1>
          <Link href="aboutme">More about me here</Link>
          <p>
            I am 25 years old, almost 100% finished with my study at University
            of Østfold in Halden. Have currently 170 of 180 points for
            completion of a bachelor and is completing my last lecture this
            spring/summer 2023.
          </p>
        </section>
      </main>
    </>
  );
}
