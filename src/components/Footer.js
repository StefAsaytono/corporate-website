import React from "react"
import { Container, Row, Col } from 'react-bootstrap'
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs'
import { SiTiktok } from 'react-icons/si'

const Footer = () => {
    let companies = [
        {
            name: "Our Games",
            url: "/games"
        },
        {
            name: "Game Provider",
            url: "/game-provider"
        },
        // {
        //     name: "Business Partner",
        //     url: "/outlets"
        // },
        {
            name: "Contact Us",
            url: "/contact"
        },
        {
            name: "Licensed by PAGCOR",
            url: `https://www.pagcor.ph`
        }
    ]
    let links = [
        {
            name: "Privacy Policy",
            url: `/privacy`
        },
        {
            name: "Responsible Gaming",
            url: `/responsible-gaming`
        },
    ];
    let games = [
        {
            name: "Table Games",
            url: `/games`
        },
        {
            name: "I-Bingo Games",
            url: `/games`
        },
        {
            name: "Slot Games",
            url: `/games`
        },
        {
            name: "Live Games",
            url: `/games`
        },
        {
            name: "Virtual Games",
            url: `/games`
        }
    ];
    let socialLinks = [
        {
            name: BsFacebook,
            url: "#"
        },
        {
            name: BsTwitter,
            url: "#"
        },
        {
            name: BsInstagram,
            url: "#"
        },
        {
            name: SiTiktok,
            url: "#"
        }
    ]
    return(
        <>
            <footer className="footer">
                <Container>
                    <Row>
                        <Col lg={3} md={6} sm={12} className="footer__col">
                            <h4>KGI</h4>
                            <ul>
                                {
                                    companies.map((company, index) => {
                                        return(
                                            <li key={index}><a href={company.url} >{company.name}</a></li>
                                        )
                                    })
                                }
                            </ul>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="footer__col">
                            <h4>resources</h4>
                            <ul>
                                {
                                    links.map((link, index) => {
                                        return(
                                            <li key={index}><a href={link.url}>{link.name}</a></li>
                                        )
                                    })
                                }
                            </ul>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="footer__col">
                            <h4>Games</h4>
                            <ul>
                                {
                                    games.map((game, index) => {
                                        return(
                                            <li key={index}><a href={game.url}>{game.name}</a></li>
                                        )
                                    })
                                }
                            </ul>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="footer__col__follow">
                            <h4>follow us</h4>
                            <div className="social-links">
                                {
                                    socialLinks.map((social, index) => {
                                        return(
                                            <a href={social.url} key={index}><social.name /></a>
                                        )
                                    })
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer