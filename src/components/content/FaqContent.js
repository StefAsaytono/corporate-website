import React from 'react'
import { Container, Row, Accordion, Card } from 'react-bootstrap'
import { BsJustify } from 'react-icons/bs'

const FaqContent = () => {
    return(
        <>
            <section className="faq">
                <div className="faq__banner__padding">
                    <div className="faq__banner"></div>
                </div>
                <Container className="faq__container">
                    <h1 className="text-center text-white faq__h1" data-aos="zoom-in" data-aos-duration="3000">Frequently Asked Questions</h1>
                    <Row className="faq__row">
                        <Accordion>
                            <Accordion.Item eventKey="0" className='faq__background'>
                                <Accordion.Header>How to register?</Accordion.Header>
                                <Accordion.Body className='text-secondary'>
                                    <ol type="number">
                                        <li>Just go to Fastwin website <a href='https://rgp.fastwin.ph/site/index.html' className='text-info'>https://rgp.fastwin.ph/site/index.html</a> and click the <strong>Sign-Up</strong> button to create an account.</li>
                                        <li>Player Fills out the basic information needed by the system for validation purposes.</li>
                                        <li>Take a selfie while holding your government ID.</li>
                                        <li>Choose preferred username and password.</li>
                                        <li>Once completed, a customer service representative conducts a 2 way face-to-face Know-Your-Customer (KYC) process to validate the information and activates the account.</li>
                                        <li>Player can now access his Fastwin mobile account and can use his card number to any KGI outlet.</li>
                                    </ol>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className='faq__background'>
                                <Accordion.Header>How to fund my Fastwin account?</Accordion.Header>
                                <Accordion.Body >
                                    <p>You have 2 options on How to Fund your Fastwin Account</p>
                                    <ol>
                                        <li className='my-2'>You may visit your registered outlet or contact your outlet operator and ask them how to fund your Fastwin account or;</li>
                                        <li className='my-2'>You can fund your account seamlessly using POS or online payment. Here’s how to fund your Fastwin account (note: currently Paymaya is the available Payment Solution for Fastwin RPG).</li>
                                        <p className='my-2'>Step 1: Clicks the Cash-in button on your dashboard and this will be directed to Buy Credit page.</p>
                                        <p className='my-2'>Step 2: Selects desired amount (system already commuted the convenience fee).</p>
                                        <p className='my-2'>Step 3: Clicks the confirm button to proceed.</p>
                                        <p className='my-2'>Step 4: Enters your Paymaya credential or if you are using desktop or tablet you may scan the QR code for faster transaction.</p>
                                        <p className='my-2'>Step 5: Enters the One-time-Password for verification.</p>
                                        <p className='my-2'>Step 6: Once payment confirmed, there will be an e-receipt or payment receipt confirmation for your reference.</p>
                                        <p className='my-2'> Step 7:  Once done, you will be directed to your gaming lobby with your credits.</p>
                                    </ol>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" className='faq__background'>
                                <Accordion.Header>How to withdraw money from Fastwin account?</Accordion.Header>
                                <Accordion.Body >
                                    <p className='my-2'>Step 1: On your dashboard, you may click the “Cash Out” button and;</p>
                                    <p className='my-2'>Step 2: Your withdrawal request will be showed along with the reference code.</p>
                                    <p className='my-2'>Step 3: Contact your outlet operator and send your reference code to process your request.</p>
                                    <p className='my-2'>Step 4: Once confirmed, your outlet operator sends your cash request (as of the moment there is no partial request yet, only full withdrawal).</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3" className='faq__background'>
                                <Accordion.Header>How much is the minimum top-up of the Fastwin account?</Accordion.Header>
                                <Accordion.Body >
                                    <p className='my-2'>An initial minimum deposit of One Thousand Pesos (PHP 1,000) is required by the player.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4" className='faq__background'>
                                <Accordion.Header>How much is the minimum and maximum bet?</Accordion.Header>
                                <Accordion.Body >
                                    <p className='my-2'>Each betting product has their own maximum stake and this amount may increase or decrease depending on the bet's pool size and the time the bet was placed. It is advisable to refer to the MAX/MIN stake on the mini bet list shown on the left-hand frame by clicking on the price whenever you want to place a bet.</p>
                                </Accordion.Body >
                            </Accordion.Item>
                            <Accordion.Item eventKey="5" className='faq__background'>
                                <Accordion.Header>How do I change the information registered to my Fastwin account?</Accordion.Header>
                                <Accordion.Body >
                                    <p className='my-2'>You may contact our Customer Service through these details:</p>
                                    <p className='my-2'>Landline: (02) 8-2451-213</p>
                                    <p className='my-2'>Smart: +63 960 926 2544 / +63 947 405 7544</p>
                                    <p className='my-2'>E-mail: support@fastwin.ph</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6" className='faq__background'>
                                <Accordion.Header>How many Fastwin accounts can I have?</Accordion.Header>
                                <Accordion.Body >
                                    <p className='my-2'>One (1) account per player policy only.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="7" className='faq__background'>
                                <Accordion.Header>How can I recover my account if I forgot my password?</Accordion.Header>
                                <Accordion.Body >
                                    <p className='my-2'>You can go to <a href="https://rgp.fastwin.ph/fwrgp/SelfService.aspx">https://rgp.fastwin.ph/fwrgp/SelfService.aspx</a> and click <strong>Forgot username/password</strong>. System will be sending your username/password to your registered mobile number or email.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="8" className='faq__background'>
                                <Accordion.Header>What to do if I dont receive my OTP for registration?</Accordion.Header>
                                <Accordion.Body>
                                    <p className='my-2'>You can go to <a href="https://rgp.fastwin.ph/fwrgp/SelfService.aspx">https://rgp.fastwin.ph/fwrgp/SelfService.aspx</a> and choose <strong>Re-send code for account activation</strong>. System will send again an OTP to your registered mobile number or email</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="9" className='faq__background'>
                                <Accordion.Header>I have a game transaction concern. What should I do?</Accordion.Header>
                                <Accordion.Body>
                                    <p className='my-2'>Just go to your game lobby and find the hamburger icon <BsJustify /> to see your game pattern or game history. But if you are not satisfied with the result, you can ask the cashier on duty to get the detailed game history.</p>
                                    <p className='my-2'>If you are using Fastwin remote, you can contact our customer service through Contact Us facility to assist you further with your request.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default FaqContent