import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  return (
    // <div className='container'>
    //   <Card style={{ width: '30rem', height: '200px'}}>
    //     <Card.Body>
    //       <Card.Link style={{textDecoration: 'none'}} href="#">MasterAccount</Card.Link>
    //     </Card.Body>
    //   </Card>

    //   <Card style={{ width: '30rem', height: '200px' }}>
    //     <Card.Body>
    //       <Card.Link style={{textDecoration: 'none'}} href="#">Broker</Card.Link>
    //     </Card.Body>
    //   </Card>

    //   <Card style={{ width: '30rem', height: '200px' }}>
    //     <Card.Body>
    //       <Card.Link style={{textDecoration: 'none'}} href="#">Orders</Card.Link>
    //     </Card.Body>
    //   </Card>

    //   <Card style={{ width: '30rem', height: '200px' }}>
    //     <Card.Body>
    //       <Card.Link style={{textDecoration: 'none'}} href="#">Others</Card.Link>
    //     </Card.Body>
    //   </Card>
    // </div>
    <Container >
    <Row>
        <Col>
          <Card style={{ width: '30rem', height: '200px', textAlign: 'center', paddingTop: '70px', backgroundColor:'light-grey'}}>
           <Card.Body>
            <Card.Link style={{textDecoration: 'none'}} href="#">MasterAccount</Card.Link>
           </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '30rem', height: '200px', textAlign: 'center', paddingTop: '70px'}}>
           <Card.Body>
            <Card.Link style={{textDecoration: 'none'}} href="#">Broker</Card.Link>
           </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card style={{ width: '30rem', height: '200px', textAlign: 'center', paddingTop: '70px'}}>
           <Card.Body>
            <Card.Link style={{textDecoration: 'none'}} href="#">Orders</Card.Link>
           </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '30rem', height: '200px', textAlign: 'center', paddingTop: '70px'}}>
           <Card.Body>
            <Card.Link style={{textDecoration: 'none'}} href="#">Others</Card.Link>
           </Card.Body>
          </Card>
        </Col>
      </Row>
     </Container>
  )
}

export default Home