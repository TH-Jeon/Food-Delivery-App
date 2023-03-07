import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import logo from '../../assets/images/res-logo.png';
import '../../styles/footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='3' md='4' sm='6'>
            <div className="footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Tasty Treat</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Corporis, sit nam eum incidunt sed in.
              </p>
            </div>
          </Col>

          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Delivery Time</h5>
            <ListGroup className='deliver__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Sunday - Thursady</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>

              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Friday - Saturday</span>
                <p>Off Day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Contact</h5>
            <ListGroup className='deliver__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <p>Location: 2023 Finch Avenue, North York, Canada </p>
              </ListGroupItem>

              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Phone: 8282-8282</span>
              </ListGroupItem>

              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Email: Tasty_Treat@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder='Enter your email' />
              <span>
                <i class="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>

        <Row className='mt-5'>
          <Col lg='6' md='6'>
            <p className='copyright__text'>&copy; Copyright - 2023, J & K Solutions. All Rights Reserved.</p>
          </Col>
          
          <Col lg='6' md='6'>
            <div className="social__links d-flex align-items-center gap-4">
              <p className="m-0">Follow: </p>
              <span>
                {" "}
                <Link to='https://google.com'>
                  <i class="ri-facebook-circle-fill"></i>
                </Link>{" "}
              </span>

              <span>
                <Link to='https://github.com'>
                  <i class="ri-github-fill"></i>
                </Link> 
              </span>

              <span>
                <Link to='https://youtube.com'>
                  <i class="ri-youtube-fill"></i>
                </Link> 
              </span>

              <span>
                <Link to='https://linkedin.com'>
                  <i class="ri-linkedin-box-fill"></i>
                </Link> 
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
};

export default Footer;