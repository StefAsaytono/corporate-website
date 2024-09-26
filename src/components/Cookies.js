import React from "react"
import { Button } from 'react-bootstrap'
import TopBar from "./TopBar";

const Cookies = () => {
    let fDate;
    // let dC;
    const handleCookies = () => {
        let d = new Date()
        let sec = d.getTime();
        let addSec = 60 * 60 * 24000;
        let dD = new Date(sec + addSec)
        fDate = dD.toLocaleDateString()
        document.cookie = `expires=${fDate};`;

        const cookiesDiv = document.getElementById("cookies")
        cookiesDiv.classList.remove("d-none")
        window.location.reload(true);
    }
    setInterval(() => {
        let expiredCookies = decodeURIComponent(document.cookie);

        if(expiredCookies === null || expiredCookies === "") 
        {
            const cookiesDiv = document.getElementById("cookies")
            cookiesDiv.classList.remove("d-none")
        }
    }, 1000)
    return(
        <>
            <div className='cookies d-none' id='cookies'>
                <TopBar className='topbar'/>
                <p className='mx-5 mt-5 text-dark'>
                    KGI uses cookies that serve you the best experience on our website. To continue using our website, you agree and accept our use of cookies.
                </p>
                <div className='d-flex px-5 pb-4'>
                    <Button variant="success" onClick={handleCookies}>Accept</Button>
                    <Button href="https://www.cookiesandyou.com/" className='mx-1'>Learn more</Button>
                </div>
            </div>
        </>
    )
}

export default Cookies