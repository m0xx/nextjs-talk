import React from 'react'
import Link from 'next/link'

export default class extends React.Component {
    render() {
        return (
            <div>
            Event
                <br />
                <Link prefetch href="/">
                    <a>home</a>
                </Link>
        </div>
    )
    }
}