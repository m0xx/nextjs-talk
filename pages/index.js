import React from 'react'
import Link from 'next/link'

const fetchData = () => {
    console.log('Fetching data...')
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(['a','b','c'])
        }, 3000)
    })
}

export default class extends React.Component {
    static async getInitialProps({ req }) {

        const data = await fetchData();

        console.log('data',data)
        return {
            data,
            isServer: (req) ? true : false
        }
        // const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
        // return { userAgent }
    }

    render() {
        return (
            <div>
                <div>
                    Data: { this.props.data }
                </div>
                <div>
                    IsServer: {this.props.isServer.toString()}
                </div>
            <br />
            <Link href="/event">
                <a>event</a>
            </Link>
        </div>
    )
    }
}