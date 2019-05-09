import Head from 'next/head'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/homeLayout'
import { Container, Jumbotron, Button } from 'reactstrap';

const Index = (props) => (
    <Layout>
        <Head>
            <title>Wheelman Clothing Co.</title>
            <meta name="Description" content="Wheelman Clothing Co. is a small clothing company dedicated to providing the best custom t-shirts, hats and stickers to people and comapnies around the world." />
        </Head>
        <Jumbotron id="homeHero">
            <Container>
                <h1 className="display-4">Custom Apparel and Stickers</h1>
                <p className="lead">Our passion for creating t-shirts and hats we're proud to wear is what we're all about.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <Link href="/about">
                        <Button color="primary" aria-label="Learn About Wheelman">Learn About Wheelman</Button>
                    </Link>
                </p>
            </Container>
        </Jumbotron>
        <style global jsx>{`
            .jumbotron {
                border-radius: 0;
            }
        `}</style>
    </Layout>
)

Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()

    console.log(`Show data fetched. Count: ${data.length}`)

    return {
        shows: data.map(entry => entry.show)
    }
}

export default Index