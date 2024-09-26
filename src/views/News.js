import React from "react"
import TopBar from "../components/TopBar"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Cookies from "../components/Cookies"
import ScrollTop from "../components/ScrollTop"
import NewsContent from "../components/content/NewsContent"

const News = () => {
    return(
        <>
            <TopBar />
            <NavBar />
            <NewsContent />
            <Footer />
            <Cookies />
            <ScrollTop />
        </>
    )
}

export default News