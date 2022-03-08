import Head from 'next/head'
import { ReactElement } from 'react'
import Layout from '../components/Layout'

export default function Home() {
    return (
        <h1 className="text-2xl text-center text-blue-600 uppercase">
            this is home page
        </h1>
    )
}

// NOTE: passing home page to layout component
Home.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            <Head>
                <title>DeepBazar E-commerce</title>
            </Head>
            {page}
        </Layout>
    )
}
