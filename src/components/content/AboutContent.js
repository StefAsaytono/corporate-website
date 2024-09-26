import React from "react"
import { Container, Image, Col, Row } from 'react-bootstrap'
import Logo from '../../images/kgi-logo-small.png'
import TwentyOneAbove from '../../images/regulatory1.png'

const AboutContent = () => {
    return(
        <>
            <section className="about" id="about">
                <Container className="about__container">
                    <h1 className="text-center about__h1" data-aos="fade-up" data-aos-duration="3000">About Us</h1>
                    <h2 className="about__h2" data-aos="fade-up" data-aos-duration="3000">KIRSCHNER GAMES INTERNATIONAL</h2>
                    <p className="about__p" data-aos="fade-up" data-aos-duration="3000">KGI’s business partners beyond our game providers encompass government regulators such as PAGCOR, local government units that host our land-based gaming operations, among others.</p>
                    <p className="about__p" data-aos="fade-up" data-aos-duration="3000">Our partnership with government stems from KGI’s existing license with THE Philippine Amusement and Gaming Corporation (PAGCOR), which is valid until the Year 2033. As such, KGI sees itself as an important part of the country’s nation-building efforts, thru (a) its contributions to PAGCOR, which in turn is remitted to government; and (b) its presence as a legal gaming alternative for the public, which counters the presence of illegal gambling in the country.</p>
                    <p className="about__p" data-aos="fade-up" data-aos-duration="3000">The Local Government Units which host both our land-based outlets and support facilities benefit from (a) the business taxes paid to the LGUs; (b) local employment within the host cities and municipalities, as well as (c) the creation and growth of businesses in the area that support KGI’s operations.</p>
                    <Row>
                        <Col lg={6} md={6} sm={12} className="d-flex justify-content-center">
                            <Image src={Logo} className="img-fluid about__images__kgi" data-aos="fade-up" data-aos-duration="3000"/>
                        </Col>
                        <Col lg={6} md={6} sm={12} className="d-flex justify-content-center">
                        <Image src={TwentyOneAbove} className="img-fluid about__images__pagcor" data-aos="fade-up" data-aos-duration="3000"/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default AboutContent