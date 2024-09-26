import React from 'react'
import { Container, Row, Col, Image, Button, Carousel } from 'react-bootstrap'
import bg from '../../images/bg.png'
import Bingo from '../../images/carousel/bingo.png'
import Bacarrat from '../../images/carousel/bacarrat1.png'
import Chips from '../../images/carousel/chips.png'

const HomeContent = () => {
    return(
        <>
            <section className="home">
                <Image src={bg} className='background'/>
                <Container className='home__container'>
                    <Row className='home__row'>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className='text-light home__font__kgi' data-aos="fade-up" data-aos-duration="3000">KIRSCHNER GAMES INTERNATIONAL</h1>
                            <p className='text-secondary home__font__pagcor' data-aos="fade-up" data-aos-duration="3000">A licensed and regulated Service Provider and Gaming Operator by PAGCOR.</p>
                            <Button href="https://www.fastwin.ph" variant="danger" data-aos="fade-up" data-aos-duration="3000">
                                Visit our Fastwin Portal
                            </Button>
                        </Col>
                        <Col lg={6} md={6} sm={12} className="carousel__images">
                            <Carousel fade className='home__carousel' data-aos="fade-up" data-aos-duration="3000">
                                <Carousel.Item interval={3000}>
                                    <Image src={Chips} className='img-fluid animated fade-in home__images'/>
                                </Carousel.Item>
                                <Carousel.Item interval={3000}>
                                    <Image src={Bingo} className='img-fluid animated fade-in home__images'/>
                                </Carousel.Item>
                                <Carousel.Item interval={3000}>
                                    <Image src={Bacarrat} className='img-fluid animated fade-in home__images'/>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default HomeContent