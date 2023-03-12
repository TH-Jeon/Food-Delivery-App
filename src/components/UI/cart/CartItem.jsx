import React from 'react';
import { ListGroupItem } from 'reactstrap';
import productImg from '../../../assets/images/product_01.1.jpg';
import '../../../styles/cart-item.css';

const CartItem = () => {
   return (
      <ListGroupItem className="border-0  cart__item" >
         <div className="cart__item-info d-flex gap-2">
            <img src={productImg} alt="productImg" />

            <div className="art__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
               <div>
                  <h6 className="cart-product-title">Burger</h6>
                  <p className=" d-flex align-items-center gap-5 cart__product-price">
                     2X <span>$24.00</span>
                  </p>
                  <div className='d-flex align-items-center gap-3 increase__decrease-btn'>
                     <span className='increase__btn'>
                        <i class="ri-add-line"></i>
                     </span>
                     <span className='quantity'>2</span>
                     <span className='decrease__btn'>
                        <i class="ri-subtract-line"></i>
                     </span>
                  </div>
               </div>

               <span className="delete__btn" >
            <i class="ri-close-line"></i>
          </span>
            </div>
         </div>
      </ListGroupItem>
   );
};

export default CartItem;
