import React from "react"
import TopBar from "../components/TopBar"
import NavBar from "../components/NavBar"
import FaqContent from "../components/content/FaqContent"
import ScrollTop from "../components/ScrollTop"
import Footer from "../components/Footer"
import Cookies from "../components/Cookies"

const FAQ = () => {
    return(
        <>
            <TopBar />
            <NavBar />
            <FaqContent />
            <Footer />
            <Cookies />
            <ScrollTop />
        </>
    )
}

export default FAQ