import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

import { getSortedBooksData } from '../lib/books'

export async function getStaticProps() {
    const allBooksData = getSortedBooksData()

    return {
        props: {
            allBooksData
        }
    }
}

export default function Home({ allBooksData }) {
  return (
    <Layout home>
        <Head>
            <title>{siteTitle}</title>
        </Head>
        <section>
            <p>Intro</p>
        </section>
        <section>
            <h2>Books</h2>
            <ul>
                {allBooksData.map(({ id, title, subtitle }) => (
                    <li key={id}>
                        <Link href={`/books/${id}`}>
                            <a>{title}</a>
                        </Link>
                        <br />
                        <small >
                            <p>Subtitle</p>
                        </small>
                    </li>
                ))}
            </ul>
        </section>
    </Layout>
  )
}
