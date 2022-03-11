import Head from 'next/head'
import React from 'react'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import Footer from './Footer/Index'
import Header from './Header/Index'

interface Props {
    children: React.ReactNode
}

function Layout(props: Props) {
    const { children } = props

    return (
        <Provider store={store}>
            <main>
                <Head>
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/site.webmanifest" />
                </Head>
                <Header />
                {children}
                <Footer />
            </main>
        </Provider>
    )
}

export default Layout
