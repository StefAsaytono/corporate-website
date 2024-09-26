import React from 'react'
import { Container, Image, Nav, Navbar } from 'react-bootstrap'
import LOGO from '../images/kgi-logo-small.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
    window.addEventListener('scroll', function() {
        if(window.pageYOffset > 0) {
            let background = document.getElementById("navbar")
            background.style.background = '#0F1429'
            background.style.behavior = "smooth"
        }
        else {
            let background = document.getElementById("navbar")
            background.style.background = ""
        }
    });
    const handleShowMenu = () => {
        let showMenu = document.getElementById("sidebar-menu")
        showMenu.style.visibility = "visible"
        showMenu.style.width = "100%"
        showMenu.style.left = "0"
        showMenu.style.left = "transition: 0.3s"
    }
    const handleClose = () => {
        let closeBtn = document.getElementById("sidebar-menu")
        closeBtn.style.visibility = "hidden"
    }
    
    return(
        <>
            <Navbar collapseOnSelect expand="lg" className='py-3' fixed='top' id='navbar'>
                <Container>
                    <Link to="/">
                        <Image src={LOGO} width={130} />
                    </Link>
                    <Navbar>
                    <button id="hamburger-menu" className='bsList text-white d-lg-none d-xl-none mx-3' onClick={handleShowMenu}></button>
                    <div id="sidebar-menu">
                        <span className='gg-close text-white' onClick={handleClose}></span>
                        <Nav.Link href="/games" className='text-white text-center'>Our Games</Nav.Link>
                        <Nav.Link href="/game-provider" className='text-white text-center'>Game Providers</Nav.Link>
                        <Nav.Link href="/outlets" className='text-white text-center'>Business Partners</Nav.Link>
                        <Nav.Link href="/contact" className='text-white text-center'>Contact Us</Nav.Link>
                        <Nav.Link href="/privacy" className='text-white text-center'>Privacy</Nav.Link>
                        <Nav.Link href="/responsible-gaming" className='text-white text-center'>Responsible Gaming</Nav.Link>
                    </div>
                    </Navbar>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <Nav.Link href="/games" className='mx-2'>Our Games</Nav.Link>
                            <Nav.Link href="/game-provider" className='mx-2'>Game Providers</Nav.Link>
                            <Nav.Link href="/outlets" className='mx-2'>Business Partners</Nav.Link>
                            <Nav.Link href="/contact" className='mx-2'>Contact Us</Nav.Link>
                            <Nav.Link href="/privacy" className='mx-2'>Privacy</Nav.Link>
                            <Nav.Link href="/responsible-gaming" className='mx-2'>Responsible Gaming</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar