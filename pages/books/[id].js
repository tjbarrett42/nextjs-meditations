import utilStyles from '../../styles/utils.module.css'
import Layout from '../../components/layout'
import Head from 'next/head'
import { getAllBookIds, getBookData } from '../../lib/books'

export async function getStaticProps({ params }) {
    const bookData = await getBookData(params.id)
    return {
        props: {
            bookData
        }
    }
}

export async function getStaticPaths() {
    const paths = getAllBookIds()
    return {
        paths,
        fallback: false
    }
}

export default function Post({ bookData }) {
    return (
        <Layout>
            <Head>
                <title>{bookData.title}</title>
            </Head>
            <article>
                <h1>{bookData.title}</h1>
                <div >
                    {/*<Date dateString={bookData.date} />*/}
                </div>
                <div dangerouslySetInnerHTML={{ __html: bookData.contentHtml }} />
            </article>
        </Layout>
    )
}