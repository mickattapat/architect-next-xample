import { useContext } from "react";
import "../styles/globals.css"
import useLayout from "../utils/useLayout"

function MyApp({ Component, pageProps }) {
  
  return (
      <useLayout>
        <Component {...pageProps} />
      </useLayout>
  )
}

export default MyApp