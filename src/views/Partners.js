import React from "react"
import TopBar from "../components/TopBar"
import NavBar from "../components/NavBar"
import OurPartners from "../components/content/OurPartners"
import ScrollTop from "../components/ScrollTop"
import Footer from "../components/Footer"
import Cookies from "../components/Cookies"

const Partners = () => {
    return(
        <>
            <TopBar />
            <NavBar />
            <OurPartners />
            <Footer />
            <Cookies />
            <ScrollTop />
        </>
    )
}

export default Partners