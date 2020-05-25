import Head from 'next/head'
import Link from 'next/link'
import { theme, style, globalStyle } from '../styles/style'
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h3 className="title">
            Dastanbek Samatov
          </h3>

          <p className="description">
            <code>Full-Stack Web Developer. Aspiring Data Scientist.</code>
          </p>
          <div className="grid">
            <Link href="/blogs">
              <a className="card">
                <h3>Blog &rarr;</h3>
                <p>I write blogs sometimes. Mostly tech or football related</p>
              </a>
            </Link>

            <a href="https://nextjs.org/learn" className="card">
              <h3>Projects &rarr;</h3>
              <p>Learn more about projects I have worked on and also my side projects</p>
            </a>

            <a
              href="https://github.com/zeit/next.js/tree/master/examples"
              className="card"
            >
              <h3>Notebooks &rarr;</h3>
              <p>Jupyter notebooks and other interesting utilities/scripts</p>
            </a>

            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className="card"
            >
              <h3>Resume/CV &rarr;</h3>
              <p>
                Download my resume and cover letter to learn more
              </p>
            </a>
          </div>
        </main>

        <footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
          </a>
        </footer>
        <style jsx>{ style }</style>
        <style jsx>{ globalStyle }</style>
      </div>
    </Layout>
  )
}
