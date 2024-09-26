import React from "react"
import TopBar from "../components/TopBar"
import NavBar from "../components/NavBar"
import GamesContent from "../components/content/GamesContent"
import ScrollTop from "../components/ScrollTop"
import Footer from "../components/Footer"
import Cookies from "../components/Cookies"

const Games = () => {
    return(
        <>
            <TopBar />
            <NavBar />
            <GamesContent />
            <Footer />
            <Cookies />
            <ScrollTop />
        </>
    )
}

export default Games