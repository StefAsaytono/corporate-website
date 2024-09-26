import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import Caleta from '../../images/logos/caleta.svg'
import Ortiz from '../../images/logos/ortiz2.png'
import MaxFair from '../../images/logos/maxfair.png'
import vibra from '../../images/partners/VibraGaming.png'
import zitro from '../../images/providers/zitro.png'
import tom from '../../images/providers/tom.png'
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

const OurPartners = () => {
    const logos = [
        {
            name: aruze,
            url: `https://aruzegaming.com/about/`,
        },
        {
            name: netent,
            url: `https://www.netent.com/en/section/about/`,
        },
        {
            name: beterlive,
            url: `https://beter.co/about/`,
        },
        {
            name: bfgames,
            url: `https://bfgames.com/`,
        },
        {
            name: btg,
            url: `https://www.bigtimegaming.com/about`,
        },
        {
            name: cosmo,
            url: `#`,
        },
        {
            name: evolution,
            url: `https://www.evolution.com/who-we-are/`,
        },
        {
            name: nolimit,
            url: `https://www.nolimitcity.com/about/`,
        },
        {
            name: redthunder,
            url: `https://www.redthunder-games.com/about-us/`,
        },
        {
            name: redtiger,
            url: `https://www.redtiger.com/about`,
        },
        {
            name: Caleta,
            url: `https://caletagaming.com/`,
            // about: `Caleta Gaming is a game design and development company for the Casino Industry.`
        },
        {
            name: MaxFair,
            url: `/game-provider`,
        },
        {
            name: Ortiz,
            url: `http://www.ortizgaming.com/en/about-us/index.html`,
            // about: `Ortiz Gaming is a leading multinational company in the gaming industry`
        },
        {
            name: sa,
            url: `https://www.sagaming.com/aboutus`,
        },
        {
            name: tom,
            url: `https://www.tomhorngaming.com/about/`,
        },
        {
            name: vibra,
            url: `https://vibragaming.com/about-us/`,
        },
        {
            name: zitro,
            url: `https://zitrogames.com/about-zitro/`,
        },
        {
            name: rtg,
            url: `https://www.realtimegaming.com/about-us/`,
        },
    ]
    return(
        <>
            <section className="our__partners">
                <div className="our__partners__banner__padding">
                    <div className="our__partners__banner"></div>
                </div>
                <div style={{ background: '#f0f0f9' }}>
                    <Container className="our__partners__container">
                        <h1 className="text-center text-white our__partners__h1" data-aos="zoom-in" data-aos-duration="3000">Game Provider</h1>
                        <Row className="our__partners__row d-flex justify-content-center" data-aos="fade-up" data-aos-duration="3000" >
                            {
                                logos.map((logo, index) => {
                                    return(
                                        <Col lg={3} md={4} sm={4} xs={6} key={index} className="text-center my-auto px-3 py-3">
                                            <a href={logo.url} target="_blank">
                                                <Image src={logo.name} className="img-fluid img-gp"/>
                                            </a>
                                            <p className="text-secondary text-center my-4">{logo.about}</p>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default OurPartners