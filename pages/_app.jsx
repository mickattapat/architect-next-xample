import { useContext } from "react";
import "../styles/globals.css"
import useLayout from "../utils/useLayout"

function MyApp({ Component, pageProps }) {
  const Layout = useLayout()
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp