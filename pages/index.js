import Head from 'next/head'
import Link from 'next/link'
import { theme, style, globalStyle } from '../styles/style';
import {IoLogoGithub, IoLogoTwitter, IoLogoLinkedin} from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Personal Website | Dastan</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h3 className="title">
            Dastan Samatov
          </h3>

          <p className="description">
            <code>I do Full-Stack Web Development and Data Science.</code>
          </p>
          <div className="grid">
            <Link href="/projects">
              <a className="card">
                <h3 className="description">Projects &rarr;</h3>
                <p className="description">List of the projects I have worked on and some other interesting stuff </p>
              </a>
            </Link>
            <Link href="/notebooks">
              <a className="card">
                <h3 className="description">Blog/notebooks &rarr;</h3>
                <p className="description">I write blogs and jupyter notebooks about tech, football and geography</p>
              </a>
            </Link>
            <Link href="/resume">  
              <a className="card">
                <h3 className="description">Resume/CV &rarr;</h3>
                <p className="description">
                  Download my resume and cover letter to learn more
                </p>
              </a>
            </Link>
          </div>
        </main>

        <footer>
          <a href="https://linkedin.com/in/dastanbek-samatov-30ab71128" target="blank">
            <IoLogoLinkedin className="logo" size={35} />
          </a>
          <a href="https://github.com/dastanbeksamatov" target="blank">
            <IoLogoGithub className="logo" size={35}/>
          </a>
          <a href="https://github.com/kingleard_" target="blank">
            <IoLogoTwitter className="logo" size={35} />
          </a>
        </footer>
        <style jsx>{ style }</style>
        <style jsx>{ globalStyle }</style>
      </div>
    </Layout>
  )
}
