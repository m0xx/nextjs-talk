import React from 'react';
import cowsay from 'cowsay-browser';

const fetchData = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(cowsay.say({ text: 'Next.js rocks!' }));
        }, 1000);
    });
};

export default class extends React.Component {
    static async getInitialProps({ req }) {
        const data = await fetchData();

        return {
            data,
            isServer: req ? true : false
        };
    }

    render() {
        return (
            <div style={{ textAlign: 'center', marginTop: 40 }}>
                <pre>{this.props.data}</pre>
            </div>
        );
    }
}
