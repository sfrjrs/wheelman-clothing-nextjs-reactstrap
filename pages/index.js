import Head from 'next/head'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/homeLayout'
import { Container, Jumbotron, Button } from 'reactstrap';

const Index = (props) => (
    <Layout>
        <Head>
            <title>Wheelman Clothing Co.</title>
        </Head>
        <Jumbotron>
            <Container>
                <h1 className="display-3">Hello, world!</h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <Button color="primary">Learn More</Button>
                </p>
            </Container>
        </Jumbotron>
        <ul>
            {props.shows.map(show => (
                <li key={show.id}>
                    <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
        <style jsx>{`
            h1, a {
                font-family: 'Arial';
            }
            ul {
                padding: 0;
            }
            li {
                list-style: none;
                margin: 5px 0;
            }
            a {
                text-decoration: none;
                color: blue;
            }
            a:hover {
                opacity: .6;
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