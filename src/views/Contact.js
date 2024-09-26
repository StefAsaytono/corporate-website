import React from 'react'
import TopBar from '../components/TopBar'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ContactContent from '../components/content/ContactContent'
import Cookies from "../components/Cookies"
import ScrollTop from "../components/ScrollTop"

const Contact = () => {
    return(
        <>
            <TopBar />
            <NavBar />
            <ContactContent />
            <Footer />
            <Cookies />
            <ScrollTop />
        </>
    )
}

export default Contact

