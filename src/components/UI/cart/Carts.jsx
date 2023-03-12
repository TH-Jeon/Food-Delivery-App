import React from 'react';

import { ListGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

import '../../../styles/shopping-cart.css'

const Carts = () => {
   return(

       <div className="cart__container">
      <ListGroup className="cart">
         <div className="cart__close">
            <span>
               <i class="ri-close-fill"></i>
            </span>
         </div>

         <div className="cart__item-list">
            <CartItem />
       
         </div>
<div>

         <span className="delete__btn" >
            <i class="ri-close-line"></i>
          </span>
</div>

         <div className="cart__bottom d-flex align-items-center justify-content-between">
            <h6>
               amount : <span>$123</span>
            </h6>
            <button><Link to='/checkout'>Check out</Link></button>
         </div>
      </ListGroup>
   </div>
       )
};

export default Carts;
