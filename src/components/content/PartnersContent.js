import React from "react"
import { Container, Image, Row } from "react-bootstrap"
import Ortiz from '../../images/logos/ortiz2.png'
import MaxFair from '../../images/logos/maxfair.png'
import caleta from '../../images/providers/caleta.png'
import vibra from '../../images/partners/VibraGaming.png'
import zitro from '../../images/partners/Zitro.png'
import tom from '../../images/providers/tom.jpg'
import sa from '../../images/providers/sa.png'
import aruze from '../../images/providers/aruze.png'
import netent from '../../images/partners/Netent.png'
import beterlive from '../../images/partners/BeterLive.png'
import bfgames from '../../images/partners/BFGames.png'
import btg from '../../images/partners/BTG.png'
import cosmo from '../../images/partners/CosmoGaming.png'
import evolution from '../../images/partners/Evolution.png'
import nolimit from '../../images/partners/NoLimit.png'
import redthunder from '../../images/partners/RedThunder.png'
import redtiger from '../../images/partners/RedTiger.png'
import rtg from '../../images/partners/realtime gaming.png'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const PartnersContent = () => {
    const logos = [
        {
            name: MaxFair,
        },
        {
            name: zitro,
        },
        {
            name: caleta,
        },
        {
            name: Ortiz,
        },
        {
            name: sa,
        },
        {
            name: tom,
        },
        {
            name: vibra,
        },
        {
            name: aruze,
        },
        {
            name: redtiger,
        },
        {
            name: redthunder,
        },
        {
            name: nolimit,
        },
        {
            name: evolution,
        },
        {
            name: cosmo,
        },
        {
            name: btg,
        },
        {
            name: bfgames,
        },
        {
            name: beterlive,
        },
        {
            name: netent,
        },
        {
            name: rtg,
        },
    ]

    var gamesSettings = {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1419,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    }
    return(
        <>
            <section className="partners">
                <Container className="partners__container">
                    <h1 className="text-center partners__h1" data-aos="fade-up" data-aos-duration="3000">Game Providers</h1>
                    <Row className="d-flex justify-content-center" data-aos="fade-up" data-aos-duration="3000" >
                        <Slider {...gamesSettings}>
                        {
                                    logos.map((logo, index) => {
                                        return(
                                            <div className="pt-5" key={index} >
                                                <Image src={logo.name} width={200} className="my-auto partners__image img-fluid" />
                                            </div>
                                        )
                                    })
                                }
                        </Slider>
                    </Row>
                    
                    {/* <div className="partners__slider">
                        <div className="partners__slide__track">
                            <div data-aos="fade-up" data-aos-duration="3000">
                                {
                                    logos.map((logo, index) => {
                                        return(
                                            <Image src={logo.name} key={index} width={200} className="mx-4 partners__image img-fluid" />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div> */}
                </Container>
            </section>
        </>
    )
}

export default PartnersContent