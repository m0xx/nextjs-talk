import React from 'react';
import { Appear, CodePane, BlockQuote, Cite, Deck, Heading, ListItem, List, Fit, Fill, Quote, Slide, Text, Layout, Image } from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';

require('normalize.css');

const theme = createTheme(
    {
        primary: 'white',
        secondary: '#1F2022',
        tertiary: '#03A9FC',
        quarternary: '#CECECE'
    },
    {
        primary: 'Montserrat',
        secondary: 'Helvetica'
    }
);

const images = {
  ssrVsCsr: require('./../assets/ssr-vs-csr.png'),
  ssr: require('./../assets/ssr.png'),
  csr: require('./../assets/csr.png'),
  structure: require('./../assets/structure.png'),
}

import FilePane from './FilePane';
import DemoPane from './DemoPane';
import ImageCredit from './ImageCredit';

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={['zoom', 'slide']} transitionDuration={500} progress="pacman" theme={theme}>
                <Slide transition={['zoom']} bgColor="primary">
                    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                        Next.js
                    </Heading>
                    <Text margin="10px 0 0"size={2} fit caps>
                        React framework
                    </Text>
                    <Text margin="10px 0 0" textColor="tertiary" size={1} fit>
                        Server side rendering / Génération de sites statiques
                    </Text>
                </Slide>
                <Slide>
                    <Image src={images.ssrVsCsr} height="300px"/>
                    <ImageCredit
                        link="https://medium.com/walmartlabs/the-benefits-of-server-side-rendering-over-client-side-rendering-5d07ff2cefe8"
                    >walmartlabs</ImageCredit>
                </Slide>
                <Slide>
                        <Image src={images.ssr} width="100%"/>
                        <ImageCredit
                            link="https://medium.com/walmartlabs/the-benefits-of-server-side-rendering-over-client-side-rendering-5d07ff2cefe8"
                        >walmartlabs</ImageCredit>
                </Slide>
                <Slide>
                      <Image src={images.csr} width="100%"/>
                      <ImageCredit
                          link="https://medium.com/walmartlabs/the-benefits-of-server-side-rendering-over-client-side-rendering-5d07ff2cefe8"
                      >walmartlabs</ImageCredit>
                </Slide>
                <Slide>
                    <CodePane source={require('raw-loader!./../assets/spa.html')} lang="html" />
                </Slide>
                <Slide>
                    <Heading size={1} textColor="tertiary">
                        SSR + SPA = Universal app!
                    </Heading>
                </Slide>
              <Slide>
                      <Layout>
                          <Image src={images.structure} height="300px" width="300px" />
                          <Fill style={{marginLeft: 50}}>
                              <div style={{textAlign: 'left'}}>
                                  <div>Installation</div>
                                  <CodePane source="npm install --save next react react-dom" />
                                  <br />
                                  <div>Ajouter les scripts au fichier <code>package.json</code>:</div>
                                  <CodePane lang="json" source={`
{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}
                      `} />
                                  <br />
                                  <div>Run</div>
                                  <CodePane source="npm run dev" />
                              </div>
                          </Fill>
                      </Layout>
              </Slide>
                <Slide transition={['fade']} bgColor="tertiary">
                    <Heading size={2} textColor="primary">
                        Fichiers statiques
                    </Heading>
                    <Layout style={{marginTop: 25}}>
                        <CodePane source={"export default () => <img src=\"/static/my-image.png\" alt=\"my image\" />"}/>
                    </Layout>
                </Slide>
                <Slide transition={['fade']} bgColor="quarternary">
                    <Heading size={2} textColor="primary">
                        styled-jsx
                    </Heading>
                    <Layout style={{marginTop: 25}}>
                        <Fill style={{marginRight: 25}}>
                            <CodePane source={require('raw-loader!./../assets/css.example')} lang="jsx"/>
                        </Fill>
                        <DemoPane path="/styled" height={300}/>
                    </Layout>
                </Slide>
                <Slide transition={['fade']} bgColor="secondary" maxWidth="100%">
                    <Heading size={4} textColor="primary">
                        pages
                    </Heading>
                    <Layout style={{marginTop: 25}}>
                        <Fill style={{marginRight: 25}}>
                            <CodePane source={require('raw-loader!./../assets/page.example')} lang="jsx"/>
                        </Fill>
                        <DemoPane path="/" height={300}/>
                    </Layout>
                </Slide>
                <Slide transition={['fade']} bgColor="tertiary" maxWidth="100%">
                    <Heading size={4} textColor="primary">
                        routing
                    </Heading>
                    <Layout style={{marginTop: 25}}>
                        <Fill style={{marginRight: 25}}>
                            <FilePane
                                files={[
                                    { filename: 'Header.js', source: require('raw-loader!./../assets/Header.example'), lang: 'jsx' },
                                    { filename: 'search.js', source: require('raw-loader!./../assets/search.example'), lang: 'jsx' }
                                ]}
                            />
                        </Fill>
                        <DemoPane path="/routing" height={300}/>
                    </Layout>
                </Slide>
                <Slide transition={['fade']} bgColor="secondary" textColor="primary">
                    <Heading size={4} textColor="primary">
                        Static HTML export
                    </Heading>
                    <div style={{textAlign: 'left', marginTop: 25}}>
                    <div>next.config.js</div>
                    <CodePane source={`

module.exports = {
  exportPathMap: function(defaultPathMap) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
      '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
    }
  }
}
`}/>
                    <div>Export command:</div>
                    <CodePane source={`
next build
next export
                    `}/>
                    </div>
                </Slide>
                <Slide transition={['fade']} bgColor="secondary" textColor="primary">
                    <Heading size={1} textColor="primary">
                        Questions?
                    </Heading>
                </Slide>
            </Deck>
        );
    }
}
