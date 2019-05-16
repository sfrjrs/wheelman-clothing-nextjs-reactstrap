import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/homeLayout'
//import ShopSubNavMenu from '../components/ShopSubNavMenu'
import { Container, Jumbotron, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardHeader, CardBody, CardTitle, CardText, Row, Col  } from 'reactstrap';

export default function Shop() {
    return (
        <Layout>
        <Head>
            <title>Shop | Wheelman Clothing Co.</title>
            <meta name="Description" content="Shop for Wheelman Clothing Co. t-shirts, hats and stickers. We accept all major credit cars and checkout is super fast and easy." />
        </Head>
        <Jumbotron id="shopJumbotron">
            <Container>
                <h1 className="display-4">Shop</h1>
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
        <Container>
            <Row>
                <Col lg="4">
                    <Card className="mb-3">
                        <CardHeader>T-Shirts</CardHeader>
                        <CardBody>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="4">
                    <Card className="mb-3">
                        <CardHeader>Hats</CardHeader>
                        <CardBody>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="4">
                    <Card className="mb-3">
                        <CardHeader>Stickers</CardHeader>
                        <CardBody>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
        <style global jsx>{`
            .jumbotron {
                border-radius: 0;
            }
        `}</style>
    </Layout>
    )
}