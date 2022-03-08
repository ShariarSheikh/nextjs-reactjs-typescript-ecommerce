import React from 'react'
import Footer from './Footer'
import Header from './Header'

interface Props {
    children: React.ReactNode
}

function Layout(props: Props) {
    const { children } = props

    return (
        <main>
            <Header />
            {children}
            <Footer />
        </main>
    )
}

export default Layout
