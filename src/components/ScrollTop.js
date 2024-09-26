import React from "react"
import {BsFillArrowUpCircleFill} from 'react-icons/bs'

const ScrollTop = () => {
    const handleScrollTop = () => {
        window.scroll({top:0, left:0, behavior:'smooth'})
    }
    window.addEventListener('scroll', function() {
        if(window.pageYOffset > 0) {
            let show = document.getElementById("showScroll")
            show.style.display = "block"
        }
        else {
            let show = document.getElementById("showScroll")
            show.style.display = "none"
        }
    });
    return(
        <>
            <div id='showScroll' onClick={handleScrollTop}>
                <BsFillArrowUpCircleFill />
            </div>
        </>
    )
}

export default ScrollTop