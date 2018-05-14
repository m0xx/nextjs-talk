import App, {Container} from 'next/app'
import React from 'react'

export default class MyApp extends App {
    static async getInitialProps ({ Component, router, ctx }) {
        let pageProps = {}

        const { req } = ctx;
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return {pageProps, isServer: (req) ? true : false}
    }

    render () {
        const {Component, pageProps, isServer} = this.props
        return <Container>
            <div>
                <Component {...pageProps} />
                <div style={{marginTop: 25}}>rendered on the <b>{isServer ? 'Server' : 'Browser' }</b></div>
            </div>
        </Container>
    }
}