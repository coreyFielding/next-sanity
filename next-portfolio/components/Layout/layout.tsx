import React, {ReactNode} from "react"
import Head from 'next/head'

const siteTitle = 'Portfolio'

type LayoutProps = {
    children: ReactNode,
}
const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <div className="min-h-screen">
            <Head>
                <meta name="Portfolio"/>
                <meta name="og:title" content={siteTitle} />
            </Head>
            <main>{children}</main>
        </div>
    )
}

export default Layout