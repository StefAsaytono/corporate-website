import React from "react"
import { Container, Button } from "react-bootstrap"

const PartnerWithUs = () => {
    return(
        <>
            <section className="partner__with__us">
                <Container className="partners__with__us__container">
                    <h1 className="text-center pb-3 fw-bold text-white" data-aos="fade-up" data-aos-duration="3000">Why Partner with us?</h1>
                    <div data-aos="fade-up" data-aos-duration="3000">
                        <p className="text-secondary about__p">KGI’s FASTWIN platform provides both land-based and remote gaming opportunities for the interested operator. Its suite of games include RNG, Virtual, and Live game options. Its iBingo Game Suite includes products from 5 of the world’s top Bingo suppliers. Its platform also supports the streaming on live sporting events as well as lottery-type games.</p>
                        <p className="text-secondary about__p">KGI also has a complete support system to assist its partner operators in customer service, technical as well as marketing support. Its continuous search for the best games available ensures that FASTWIN always features the newest, most interesting for its gaming public to the operators of land-based gaming outlets as well as remote gaming facilities.</p>
                    </div>
                    <div className="text-center pt-3" data-aos="fade-up" data-aos-duration="3000">
                        <Button variant="outline-secondary text-white" href="/contact">Become with our Partner</Button>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default PartnerWithUs