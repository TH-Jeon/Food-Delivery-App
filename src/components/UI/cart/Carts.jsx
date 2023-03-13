import React from 'react';

import { ListGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { useDispatch , useSelector} from 'react-redux';
import { cartUiActions } from '../../../store/shopping-cart/cartUiSlice';

import '../../../styles/shopping-cart.css';

const Carts = () => {

    const dispatch = useDispatch()
    const cartProducts = useSelector(state=>state.cart.cartItems)

    const toggleCart=()=>{
        dispatch(cartUiActions.toggle())
    }

   const totalAmount = useSelector(state =>state.cart.totalAmount)

    
   return (
      <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close">
          <span onClick={toggleCart}>
            <i class="ri-close-fill"></i>
          </span>
        </div>
            <div className="cart__item-list">

               {
                  cartProducts.length === 0 ? <h6 className='text-center mt-5'>No Item added to the cart</h6> : cartProducts.map((item,index)=>(
                     <CartItem item={item} key={index}/>
                  )) 
               }
             
            </div>
            <div>
               <span className="delete__btn">
                  <i class="ri-close-line"></i>
               </span>
            </div>

            <div className="cart__bottom d-flex align-items-center justify-content-between">
               <h6>
                  amount : <span>${totalAmount}</span>
               </h6>
               <button>
                  <Link to="/checkout">Check out</Link>
               </button>
            </div>
         </ListGroup>
      </div>
   );
};

export default Carts;
