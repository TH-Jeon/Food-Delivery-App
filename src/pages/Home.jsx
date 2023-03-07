import React from 'react';
import Helmet from '../components/Helmet/Helmet.js';
import { Container, Row, Col } from 'reactstrap';

import heroImg from '../assets/images/hero.png';
import '../styles/hero-section.css';
import { Link } from 'react-router-dom';

const Home = () => {
   return (
      <Helmet title="Home">
         <section>
            <Container>
               <Row>
                  <Col lg="6" md="6">
                     <div className="hero__content">
                        <h5 className="mb-3">Make a your Order !</h5>
                        <h1 className="mb-4 hero__title">
                           <span>HUNGRY?</span> Just wait <br /> food at
                           <span> your door</span>
                        </h1>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipisicing
                           elit. Qui magni delectus tenetur autem, sint
                           veritatis!
                        </p>
                        <div className="hero__btns">
                           <button className="order__btn">
                              Order Now!<i class="ri-arrow-right-s-line"></i>
                           </button>
                           <button><Link>See all foods</Link></button>
                        </div>
                     </div>
                  </Col>
                  <Col lg="6" md="6">
                     <div className="hero__img">
                        <img src={heroImg} alt="hero-img" className="w-100" />
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>
      </Helmet>
   );
};

export default Home;
