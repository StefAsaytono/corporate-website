import React from "react"
import TopBar from "../components/TopBar"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Cookies from "../components/Cookies"
import ScrollTop from "../components/ScrollTop"
import OutletContent from "../components/content/OutletContent"

const Outlet = () => {
    return(
        <>
            <TopBar />
            <NavBar />
            <OutletContent />
            <Footer />
            <Cookies />
            <ScrollTop />
        </>
    )
}

export default Outlet