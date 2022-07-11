import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Home.css';

function Home() {
  return (
    <>
      <Row>
        <Col md={12} className="d-flex flex-direction-column align-items-center justify-content-center home-container" >
          <div>
            <h1>ChatTooMe</h1>
            <p>Never ending conversations....</p>
            <LinkContainer to="/login">
              <Button className='start-btn' variant="success">Get started <i className="fas fa-comments home-message-icon"></i>
              </Button>
            </LinkContainer>
          </div>
        </Col>
      </Row>
    </>
  )
};

export default Home;