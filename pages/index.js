import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
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
            <p>Intro</p>
        </section>
        <section>
            <h2>Books</h2>
            <Container>
                <Row>
                    {allBooksData.map(({ id, title, subtitle }) => (
                        <Col xs="6" lg="4" key={id}>
                            <Button href={`/books/${id}`} className="btn-primary" block="false">{title}</Button>
                        </Col>
                    ))}
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
        </section>
    </Layout>
  )
}
