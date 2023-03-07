import React from 'react';
import Helmet from '../components/Helmet/Helmet.js';
import Category from '../components/UI/category/category.jsx';

import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import '../styles/hero-section.css';
import '../styles/home.css';

import heroImg from '../assets/images/hero.png';

import featureImg01 from '../assets/images/service-01.png';
import featureImg02 from '../assets/images/service-02.png';
import featureImg03 from '../assets/images/service-03.png';

const featureData = [
   {
      title: 'Quick Delivery',
      imgUrl: featureImg01,
      desc: ' Lorem ipsum dolor sit amet, consectetur adipisicin elit',
   },
   {
      title: 'Super Dine In',
      imgUrl: featureImg02,
      desc: ' Lorem ipsum dolor sit amet, consectetur adipisicin elit',
   },
   {
      title: 'Easy Pick up',
      imgUrl: featureImg03,
      desc: ' Lorem ipsum dolor sit amet, consectetur adipisicin elit',
   },
];

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
                        <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                           <button className="order__btn d-flex align-items-center justify-content-between">
                              Order now <i class="ri-arrow-right-s-line"></i>
                           </button>

                           <button className="all__foods-btn">
                              <Link to="/foods">See all foods</Link>
                           </button>
                        </div>

                        <div className="hero__service  d-flex align-items-center gap-5 mt-5">
                           <p className="d-flex align-item=center gap-2">
                              <span className="shipping__icon">
                                 <i class="ri-car-line"></i>
                              </span>
                              No shipping charge
                           </p>
                           <p className="d-flex align-item=center gap-2">
                              <span className="shipping__icon">
                                 <i class="ri-shield-check-line"></i>
                              </span>
                              Check out
                           </p>
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

         <section className="pt-0">
            <Category />
         </section>

         <section>
            <Container>
               <Row>
                  <Col lg="12" className="text-center">
                     <h5 className="feature__subtitle mb-4">What we serve</h5>
                     <h2 className="feature__title">Just sit back at home</h2>
                     <h2 className="feature__title">
                        We will <span>Delivery for you</span>
                     </h2>
                     <p className="mb-1 mt-4 feature__text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Dolor, officiis?
                     </p>
                     <p className="feature__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aperiam, eius.{' '}
                     </p>
                  </Col>

                  {
                    featureData.map((item,index)=>(
                      <Col lg="4" md="4" key={index}>
                      <div className="feature__item">
                          <img src={item.imgUrl} alt="feature-img" />
                          <h5>{item.title}</h5>
                          <p>{item.desc}</p>
                      </div>
                   </Col>
                    ))
                  }

               </Row>
            </Container>
         </section>
      </Helmet>
   );
};

export default Home;
