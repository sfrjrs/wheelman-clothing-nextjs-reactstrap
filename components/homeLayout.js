import Head from 'next/head'
import Header from './Header'
import '../styles/home.scss'

const Layout = props => (
    <div>
        <Head>
            <title>Home | Wheelman Clothing Co.</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
        </Head>
        <Header />
        {props.children}
    </div>
)

export default Layout