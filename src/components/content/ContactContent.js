import React from "react"
import { Container, Col } from 'react-bootstrap'
import { BsBuilding, BsTelephoneInboundFill, BsPhoneVibrateFill, BsPersonBadgeFill, BsFillClockFill } from 'react-icons/bs'

const ContactContent = () => {
    let contacts = [
        {
            icon: BsBuilding,
            class: `text-white fs-1 contact___building__icon`,
            h5: `5F PDCP Bank Center Herrera St., Salcedo Village, Makati City, Philippines, 1227`
        },
        {
            icon: BsTelephoneInboundFill,
            class: `text-white fs-4 contact___telephone__icon`,
            h5: `(02) 8-2451-213`
        },
        {
            icon: BsPhoneVibrateFill,
            class: `text-white fs-3 contact___phone__icon`,
            h5: `+63 960 926 2544 / +63 947 405 7544`
        },
        {
            icon: BsPersonBadgeFill,
            class: `text-white fs-3 contact___email__icon`,
            h5: `support@fastwin.ph`
        },
        {
            icon: BsFillClockFill,
            class: `text-white fs-4 contact___office__hour__icon`,
            h5: `Monday - Friday: 9am - 6pm (UTC+08:00)`
        }
    ]
    return(
        <>
            <section className="contact">
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
                <Container className="contact__container">
                    <Col md={{ span: 6, offset: 3 }}>
                        <h1 className="text-center text-white contact___h1" data-aos="fade-up" data-aos-duration="3000">Contact Us</h1>
                        {
                            contacts.map((contact, index) => {
                                return(
                                    <div className="d-flex contact__content" key={index} data-aos="fade-up" data-aos-duration="3000">
                                        <contact.icon className={contact.class} />
                                        <h5 className="text-white mx-3">{contact.h5}</h5>
                                    </div>
                                )
                            })
                        }
                    </Col>
                </Container>
            </section>
        </>
    )
}

export default ContactContent