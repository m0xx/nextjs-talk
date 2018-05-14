import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import NProgress from 'nprogress'
import Router from 'next/router'

Router.onRouteChangeStart = (url) => {
    NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const linkStyle = {
    margin: '0 10px 0 0'
}

export default () => (
    <div style={{ marginBottom: 20 }}>
        <Head>
            <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
        </Head>

        <Link href='/routing'><a style={linkStyle}>Home</a></Link>
        <Link href='/routing/about'><a style={linkStyle}>About</a></Link>
        <a href='/routing/about' style={linkStyle}>About <small>server</small></a>
        <Link href='/routing/forever'><a style={linkStyle}>Forever</a></Link>
        <Link href='/routing/search?q=nextjs' ><a style={linkStyle}>/search?q=nextjs</a></Link>
    </div>
)