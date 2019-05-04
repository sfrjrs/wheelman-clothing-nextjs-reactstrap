import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/homeLayout'
import { Container, Jumbotron, Button } from 'reactstrap';

export default function About() {
    return (
        <Layout>
        <Head>
        <title>About Us | Wheelman Clothing Co.</title>
        </Head>
        <Jumbotron>
            <Container>
                <h1 className="display-3">About Us</h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <Button color="primary">Learn More</Button>
                </p>
            </Container>
        </Jumbotron>
    </Layout>
    )
}