import React from "react"
import TopBar from "../components/TopBar"
import NavBar from "../components/NavBar"
import PrivacyContent from "../components/content/PrivacyContent"
import ScrollTop from "../components/ScrollTop"
import Footer from "../components/Footer"
import Cookies from "../components/Cookies"

const Partners = () => {
    return(
        <>
            <TopBar />
            <NavBar />
            <PrivacyContent />
            <Footer />
            <Cookies />
            <ScrollTop />
        </>
    )
}

export default Partners