import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Footer from "../components/Footer";
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'


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
            <p>Meditations (romanized: Ta eis he'auton, 'things to one's self') is a series of personal writings by Marcus Aurelius, Roman Emperor from 161 to 180 AD, recording his private notes to himself and ideas on Stoic philosophy.</p>
        </section>

        <Container>
            <Row className="justify-content-center">
                <h2>Books</h2>
            </Row>
            <Row>
                {allBooksData.map(({ id, title, subtitle }) => (
                    <Col xs="6" lg="4" key={id}>
                        <Button href={`/books/${id}`} className="btn-primary" block="false">{title}</Button>
                    </Col>
                ))}
            </Row>
        </Container>
        <Container>
            <Row className="justify-content-center">
                <h2>About</h2>
            </Row>
            <Row className="justify-content-center">
                <p>http://classics.mit.edu/Antoninus/meditations.html</p>
            </Row>

        </Container>
        {/*<ul>*/}
        {/*    {allBooksData.map(({ id, title, subtitle }) => (*/}
        {/*        <li key={id}>*/}
        {/*            <Link href={`/books/${id}`}>*/}
        {/*                <a>{title}</a>*/}
        {/*            </Link>*/}
        {/*            <br />*/}
        {/*            <small >*/}
        {/*                <p>{subtitle}</p>*/}
        {/*            </small>*/}
        {/*        </li>*/}
        {/*    ))}*/}
        {/*</ul>*/}

        <Footer />
    </Layout>
  )
}
