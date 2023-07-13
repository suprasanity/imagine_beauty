import '../styles/globals.css'
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Head from "next/head"

const MyApp = ({ Component, pageProps }) => {
  return <>
    <Head>
      <title>Imagine Beauty</title>
      <link rel="icon" href="/public/favicon.ico" />
    </Head>

    <Navbar/>
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
