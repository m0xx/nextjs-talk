import React, { Component } from 'react'
import Header from '../../components/Header'

export default class Search extends Component {
    static async getInitialProps ({query, pathname}) {
        return {
            q: query.q
        }
    }

    render () {
        const {q} = this.props;
        return (
            <div>
                <Header />
                <p>No result found for <u>{ q }</u></p>
            </div>
        )
    }
}