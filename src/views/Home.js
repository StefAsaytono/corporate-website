import React from "react"
import TopBar from "../components/TopBar"
import HomeContent from "../components/content/HomeContent"
import AboutContent from "../components/content/AboutContent"
import PartnersContent from "../components/content/PartnersContent"
import NavBar from "../components/NavBar"
import ScrollTop from "../components/ScrollTop"
import Footer from "../components/Footer"
import Cookies from "../components/Cookies"
import PartnerWithUs from "../components/content/PartnerWithUs"


const Home = () => {
    return(
        <>
            <TopBar />
            <NavBar />
            <HomeContent />
            <AboutContent />
            <PartnerWithUs />
            <PartnersContent />
            <Footer />
            <Cookies />
            <ScrollTop />
        </>
    )
}

export default Home