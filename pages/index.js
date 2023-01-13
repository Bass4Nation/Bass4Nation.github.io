import Image from 'next/image'
import { Inter } from '@next/font/google'
import style from '../styles/Index.module.css'
import Headtitle from '../components/Headtitle'
import i18n from '../i18n'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Headtitle title="Bass4Nation's portefolio site - bass4nation.github.io" />
      <main className={style.main}>
        <section>
          <p>{i18n.t('key')}</p>
        </section>
        <section>
          <h1>Hi, I&apos;m Bass4Nation and also Kristoffer S Søderkvist</h1>
          <p>
            I&apos;m a 25 year old student from Norway, currently studying at the University of Østfold in Halden, Norway.
          </p>
          <p>
            I&apos;m currently studying to become a software developer, and I&apos;m also a gamer.
          </p>
        </section>
      </main>
    </>
  )
}
