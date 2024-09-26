import React from "react"
import { Container, Row, Col, Image, Button } from "react-bootstrap"
import baccarat2 from '../../images/alfa/baccarat.png'
import baccarat1 from '../../images/alfa/baccarat1.png'
import baccarat3 from '../../images/alfa/baccarat3.png'
import roullete from '../../images/alfa/rou1.png'
import roullete2 from '../../images/alfa/rou2.png'
import sicbo from '../../images/alfa/sicbo.png'
import fantan from '../../images/alfa/fantan.png'
import ace from '../../images/ortiz/ace-mania1.png'
import bingo from '../../images/ortiz/bingo61.png'
import triplebonus1 from '../../images/ortiz/triple-bonus1.png'
import seven5 from '../../images/maxfair/75.png'
import alpaca from '../../images/maxfair/alpaca.png'
import beans from '../../images/maxfair/beans.png'
import boxing from '../../images/maxfair/boxing.png'
import candy from '../../images/maxfair/candy.png'
import golden from '../../images/maxfair/golden.png'
import pollo from '../../images/maxfair/polo.png'
import kgi from '../../images/games/sg8_livebaccarat1.png'
import liveRoullete from '../../images/games/live-roullete.png'
import liveBingo from '../../images/games/live-bingo.png'
import liveEvents from '../../images/games/live-events.png'
import basketball from '../../images/games/basketball.png'
import horse from '../../images/games/horse-racing.png'
import dog from '../../images/games/dog-racing.png'

const GamesContent = () => {
    let tableGames = [
        {
            icon: baccarat1,
            name: `Baccarat 1`,
            provider: `ALFASTREET`
        },
        {
            icon: baccarat2,
            name: `Baccarat 2`,
            provider: `ALFASTREET`
        },
        {
            icon: baccarat3,
            name: `Baccarat 3`,
            provider: `ALFASTREET`
        },
        {
            icon: sicbo,
            name: `Sicbo`,
            provider: `ALFASTREET`
        },
        {
            icon: fantan,
            name: `Fantan`,
            provider: `ALFASTREET`
        },
        {
            icon: roullete,
            name: `Roullete 1`,
            provider: `ALFASTREET`
        },
        {
            icon: roullete2,
            name: `Roullete 2`,
            provider: `ALFASTREET`
        },
    ]
    let iBingoGames = [
        {
            icon: ace,
            name: `Ace Mania`,
            provider: `ORTIZ GAMING`
        },
        {
            icon: bingo,
            name: `Six Bingo`,
            provider: `ORTIZ GAMING`
        },
        {
            icon: triplebonus1,
            name: `Triple Bonus`,
            provider: `ORTIZ GAMING`
        },
        {
            icon: seven5,
            name: `Bingo 75`,
            provider: `MAXFAIR`
        },
        {
            icon: alpaca,
            name: `Alpaca Bingo`,
            provider: `MAXFAIR`
        },
        {
            icon: beans,
            name: `Black Beans`,
            provider: `MAXFAIR`
        },
        {
            icon: boxing,
            name: `Boxing Bingo`,
            provider: `MAXFAIR`
        },
        {
            icon: candy,
            name: `Bingo Candy`,
            provider: `MAXFAIR`
        },
        {
            icon: golden,
            name: `Golden Bingo`,
            provider: `MAXFAIR`
        },
        {
            icon: pollo,
            name: `Bingo Pollo`,
            provider: `MAXFAIR`
        }
    ]
    let multiplay = [
        {
            icon: kgi,
            name: `Live Baccarat`
        },
        {
            icon: liveRoullete,
            name: `Live Roullete`
        },
        {
            icon: liveBingo,
            name: `Live Bingo`
        },
        {
            icon: liveEvents,
            name: `Live Events`
        }
    ]
    let virtuals = [
        {
            icon: basketball,
            name: `Basketball`
        },
        {
            icon: horse,
            name: `Horse Racing`
        },
        {
            icon: dog,
            name: `Dog Racing`
        }
    ]
    return(
        <>
            <section className="games">
                <div className="games__banner__padding">
                    <div className="games__banner"></div>
                </div>
                <Container className="games__container">
                    <h1 className="text-white games__h1">Our Games</h1>
                    <h2 className="text-white my-3 games__table__games" data-aos="fade-up" data-aos-duration="3000">Table Games</h2>
                    <p className="text-secondary" data-aos="fade-up" data-aos-duration="3000">Table games has two senses. In a general sense it is any game played on a table or similar surface as opposed to card games and board games.</p>
                    <Row>
                        {
                            tableGames.map((game,index) => {
                                if(game.name == "Baccarat 1" || game.name == "Baccarat 2" || game.name == "Baccarat 3"){
                                    return(
                                        <Col lg={2} md={4} sm={6} key={index} data-aos="fade-up" data-aos-duration="3000">
                                            <Image src={game.icon} className="games__image"/>
                                            <p className="text-center text-white games__p">{game.name}</p>
                                            <p className="text-center text-white games__p1 text-muted">{game.provider}</p>
                                        </Col>
                                    )
                                }
                            })
                        }
                    </Row>
                    <Row>
                        {
                            tableGames.map((game,index) => {
                                if(game.name == "Sicbo" || game.name == "Fantan"){
                                    return(
                                        <Col lg={2} md={4} sm={6} key={index} data-aos="fade-up" data-aos-duration="3000">
                                            <Image src={game.icon} className="games__image"/>
                                            <p className="text-center text-white games__p">{game.name}</p>
                                            <p className="text-center text-white games__p1 text-muted">{game.provider}</p>
                                        </Col>
                                    )
                                }
                                else if(game.name == "Roullete 1" || game.name == "Roullete 2") {
                                    return(
                                        <Col lg={2} md={4} sm={6} key={index} data-aos="fade-up" data-aos-duration="3000">
                                            <Image src={game.icon} className="games__image"/>
                                            <p className="text-center text-white games__p">{game.name}</p>
                                            <p className="text-center text-white games__p1 text-muted">{game.provider}</p>
                                        </Col>
                                    )
                                }
                            })
                        }
                    </Row>
                    <h2 className="text-white my-3" data-aos="fade-up" data-aos-duration="3000">I-Bingo Games</h2>
                    <p className="text-secondary" data-aos="fade-up" data-aos-duration="3000">I-Bingo is a new electronic way to play Bingo. Instead of using a dauber and paper cards.</p>
                    <Row>
                        {
                            iBingoGames.map((bingo,index) => {
                                if(bingo.provider == "MAXFAIR")
                                {
                                    return(
                                        <Col lg={2} md={4} sm={6} key={index} data-aos="fade-up" data-aos-duration="3000" id="test">
                                            <Image src={bingo.icon} className="games__image"/>
                                           
                                            <div className="middle text-center">
                                                <Button className="text-center" variant="danger text-white" href="https://bingo-demo.m8gaming.com/GameLobbyApp/">Play for Fun</Button>
                                            </div>
                                            <p className="text-center text-white games__p">{bingo.name}</p>
                                            <p className="text-center text-white games__p1 text-muted">{bingo.provider}</p>
                                        </Col>
                                    )
                                }
                                else {
                                    return(
                                        <Col lg={2} md={4} sm={6} key={index} data-aos="fade-up" data-aos-duration="3000" id="test">
                                            <Image src={bingo.icon} className="games__image"/>
                                            <p className="text-center text-white games__p">{bingo.name}</p>
                                            <p className="text-center text-white games__p1 text-muted">{bingo.provider}</p>
                                        </Col>
                                    )
                                }
                                
                            })
                        }
                    </Row>
                    <h2 className="text-white my-3" data-aos="fade-up" data-aos-duration="3000">Multi-Play Live Games</h2>
                    <p className="text-secondary" data-aos="fade-up" data-aos-duration="3000">Multi-Play games involving or allowing simultaneous play by more than one player through a shared interface.</p>
                    <Row>
                        {
                            multiplay.map((multi,index) => {
                                return(
                                    <Col lg={2} md={4} sm={6} key={index} data-aos="fade-up" data-aos-duration="3000">
                                        <Image src={multi.icon} className="games__image"/>
                                        <p className="text-center text-white games__p">{multi.name}</p>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <h2 className="text-white my-3" data-aos="fade-up" data-aos-duration="3000">Virtual Games</h2>
                    <p className="text-secondary" data-aos="fade-up" data-aos-duration="3000">A computer simulation of a real or imaginary system that enables a user to perform operations on the simulated system and shows the effects in real time.</p>
                    <Row>
                        {
                            virtuals.map((virtual,index) => {
                                return(
                                    <Col lg={2} md={4} sm={6} key={index} data-aos="fade-up" data-aos-duration="3000">
                                        <Image src={virtual.icon} className="games__image"/>
                                        <p className="text-center text-white games__p">{virtual.name}</p>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default GamesContent