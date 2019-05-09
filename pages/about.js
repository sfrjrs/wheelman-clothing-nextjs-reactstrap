import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/homeLayout'
import { Container, Jumbotron, Button } from 'reactstrap';

export default function About() {
    return (
        <Layout>
        <Head>
            <title>About Us | Wheelman Clothing Co.</title>
            <meta name="Description" content="Wheelman Clothing Co. is a small family built and run company. Our dream is simple, create affordable quality t-shirts, hats and stickers to promote your brand or company in style." />
        </Head>
        <Jumbotron>
            <Container>
                <h1 className="display-4">About Us</h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <Link href="/">
                        <Button color="primary" role="button">Back to Home</Button>
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
}