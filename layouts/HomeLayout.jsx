import Footer from "./HomeLayout/Footer"
import Navbar from "./HomeLayout/Navbar"

const HomeLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default HomeLayout
