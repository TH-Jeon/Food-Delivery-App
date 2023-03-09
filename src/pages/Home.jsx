import React, { useState, useEffect } from 'react';
import Helmet from '../components/Helmet/Helmet.js';
import Category from '../components/UI/category/Category.jsx';

import { Link } from 'react-router-dom';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

import '../styles/hero-section.css';
import '../styles/home.css';

import heroImg from '../assets/images/hero.png';

import featureImg01 from '../assets/images/service-01.png';
import featureImg02 from '../assets/images/service-02.png';
import featureImg03 from '../assets/images/service-03.png';

import products from '../assets/fake-data/products.js';

import foodCategoryImg01 from '../assets/images/hamburger.png';
import foodCategoryImg02 from '../assets/images/pizza.png';
import foodCategoryImg03 from '../assets/images/bread.png';
import ProductCard from '../components/UI/product-card/ProductCard.jsx';

import whyImg from '../assets/images/location.png';

import networkImg from '../assets/images/network.png';

import TestimonialSlider from '../components/UI/slider/TestimonialSlider.jsx';

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
   const [category, setCategory] = useState('ALL');
   const [allProducts, setAllProducts] = useState(products);

   const [hotPizza, setHotPizza] = useState([]);

   useEffect(() => {
    const filteredPizza = products.filter(item => item.category === 'Pizza');
    const slicePizza = filteredPizza.slice(0,4);
    setHotPizza(slicePizza);
   },[]);

   useEffect(() => {
      if (category === 'ALL') {
         setAllProducts(products);
      }
      if (category === 'BURGER') {
         const filteredProducts = products.filter(
            (item) => item.category === 'Burger'
         );

         setAllProducts(filteredProducts);
      }
      if (category === 'PIZZA') {
         const filteredProducts = products.filter(
            (item) => item.category === 'Pizza'
         );

         setAllProducts(filteredProducts);
      }
      if (category === 'BREAD') {
         const filteredProducts = products.filter(
            (item) => item.category === 'Bread'
         );

         setAllProducts(filteredProducts);
      }
   }, [category]);

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
                              Order Now <i class="ri-arrow-right-s-line"></i>
                           </button>

                           <button className="all__foods-btn">
                              <Link to="/foods">See All Foods</Link>
                           </button>
                        </div>

                        <div className="hero__service  d-flex align-items-center gap-5 mt-5">
                           <p className="d-flex align-item=center gap-2">
                              <span className="shipping__icon">
                                 <i class="ri-car-line"></i>
                              </span>{" "}
                              No Shipping Charge
                           </p>
                           <p className="d-flex align-item=center gap-2">
                              <span className="shipping__icon">
                                 <i class="ri-shield-check-line"></i>
                              </span>{" "}
                              100% Secure Check Out
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

                  {featureData.map((item, index) => (
                     <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                        <div className="feature__item text-center px-5 py-3">
                           <img
                              src={item.imgUrl}
                              alt="feature-img"
                              className="w-25 mb-3"
                           />
                           <h5 className="fw-bold mb-3">{item.title}</h5>
                           <p>{item.desc}</p>
                        </div>
                     </Col>
                  ))}
               </Row>
            </Container>
         </section>

         <section>
            <Container>
               <Row>
                  <Col lg="12" className="text-center">
                     <h2>Popular Foods</h2>
                  </Col>

                  <Col lg="12">
                     <div className="food__category d-flex align-items-center justify-content-center gap-5">
                        <button
                           className={`all__btn ${category === 'ALL' ? 'foodBtnActive' : '' } `}
                           onClick={() => setCategory('ALL')}
                        >
                           All
                        </button>
                        <button
                           className={`d-flex align-items-center gap-2 ${category === 'BURGER' ? 'foodBtnActive' : ''} `}
                           onClick={() => setCategory('BURGER')}
                        >
                           <img src={foodCategoryImg01} alt="" /> Burger
                        </button>
                        <button
                           className={`d-flex align-items-center gap-2 ${category === 'PIZZA' ? 'foodBtnActive' : ''} `}
                           onClick={() => setCategory('PIZZA')}
                        >
                           <img src={foodCategoryImg02} alt="" /> Pizza
                        </button>
                        <button
                           className={`d-flex align-items-center gap-2 ${category === 'BREAD' ? 'foodBtnActive' : ''} `}
                           onClick={() => setCategory('BREAD')}
                        >
                           <img src={foodCategoryImg03} alt="" /> Bread
                        </button>
                     </div>
                  </Col>

                  {allProducts.map((item) => (
                     <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                        <ProductCard item={item} />
                     </Col>
                  ))}
               </Row>
            </Container>
         </section>

         <section className='why__choose-us'>
          <Container>
            <Row>
              <Col lg='6' md='6'>
                <img src={whyImg} alt="why-tasty-treat" className='w-100'/>
              </Col>
              
              <Col lg='6' md='6'>
                <div className="why__tasty-treat">
                  <h2 className='tasty__treat-title mb-4'>
                  Why <span>Tasty Treat?</span>
                  </h2>
                  <p className='tasty__treat-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Dolores beatae molestias sapiente. Facilis quia vero vel quas, provident quis sequi, 
                    modi libero impedit veniam pariatur alias in necessitatibus quo laboriosam.</p>

                  <ListGroup className='mt-4'>
                    <ListGroupItem className='border-0 ps-0'>
                      <p className='choose__us-title d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>
                      Fresh and tasty foods</p>
                      <p className='choose__us-desc'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </ListGroupItem>

                    <ListGroupItem className='border-0 ps-0'>
                      <p className='choose__us-title d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>
                      Quality support</p>
                      <p className='choose__us-desc'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </ListGroupItem>

                    <ListGroupItem className='border-0 ps-0'>
                      <p className='choose__us-title d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>
                      Order from any location {" "}</p>
                      <p className='choose__us-desc'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </Col>
            </Row>
          </Container>
         </section>

         <section>
          <Container className='pt-0'>
            <Row>
              <Col lg='12' className='text-center mb-5'>
                <h2>Hot Pizza</h2>
              </Col>

              {
                hotPizza.map((item) => (
                  <Col lg='3' md='4' sm="6" xs="6" key={item.id}>
                    <ProductCard item={item} />
                  </Col>
                ))
              }
            </Row>
          </Container>
         </section>

         <section>
          <Container>
            <Row>
              <Col lg='6' md='6'>
                <div className='testimonial'>
                  <h5 className='testimonial__subtitle mb-4'>Testimonial</h5>
                  <h2 className='testimonial__title mb-4'>
                    What our <span>customers</span> are saying
                  </h2>
                  <p className='testimonial__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Officiis dignissimos adipisci autem provident et nihil assumenda praesentium 
                    corrupti ducimus error.</p>
                </div>

                <TestimonialSlider />
              </Col>

              <Col lg='6' md='6'>
                <img src={networkImg} alt="testimonial-img" className='w-100'/>
              </Col>
            </Row>
          </Container>
         </section>




      </Helmet>
   );
};

export default Home;
