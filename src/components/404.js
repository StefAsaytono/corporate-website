import React from 'react'
import { Button, Card, Container, Row, Col } from 'react-bootstrap'

function PageNotFound() {
  return (
    <div className='pagenotfound_page'>
        <Container className='h-100'>
            <Row className='h-100'>
                <Col md={{ span: 6, offset: 3}} className='d-flex justify-content-center align-center p-3 m-auto'>
                    <Card className='justify-content-center p-3' style={{backgroundColor: "white", borderRadius: 10, textAlign: "center"}}>
                        <img  width={100} src={require('../images/kgi-logo-small.png')} alt='KGI Logo'/>
                        <p></p>
                        <img style={{width: "100%"}} src={require('../images/404.png')} alt='broken-robot'/>
                        <p></p>
                        <Button style={{width: "100%"}} onClick={() => { window.open('/', '_self')}}>Back to Homepage</Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default PageNotFound