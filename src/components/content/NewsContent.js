import React from "react"
import { Container } from "react-bootstrap"

const NewsContent = () => {
    return(
        <>
            <section className="news">
                <div className="news__banner__padding">
                    <div className="news__banner"></div>
                </div>
                <Container className="news__container">
                    <h1 className="text-center text-white news__h1" data-aos="zoom-in" data-aos-duration="3000">News</h1>
                    <div className="news__content">
                        <div className="box" data-aos="fade-up" data-aos-duration="3000">
                            <div className="animation">
                            <div className="one spin-one"></div>
                            <div className="two spin-two"></div>
                            <div className="three spin-one"></div>
                        </div>
                        <h1>Under Maintenance</h1>
                        <p>Ongoing development on this page.</p>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default NewsContent