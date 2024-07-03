import React from 'react'
import './Cart.scss'
import iks from '../assets/icons/iks.png'

const Cart = ({ cart }) => {
  const totalPrice = cart.reduce((total, i) => total + i.price * i.count, 0)
  console.log(cart);
  if (cart.length===0){
    
    return( <div className='cart'> <h2>В корзине нечего нет</h2> </div>)
  }
  return (
    <div className='cart'>
      <h2>Корзина</h2>
      <div className="inf">
<p className='inf1'>Товар</p>
<p className='inf2'>Цена</p>
<p className='inf3'>Количество</p>
<p className='inf4'>Всего</p>
      </div>
      <hr />
      <div className="products">
    {cart.map((el) => {
          return (
            <div className="product">
              <img className='iks' src={iks} alt="" />
              <img className='img' src={el.image} alt="" />
              <h2>{el.title}</h2>
              <p className='price'>${el.price}</p>
              <div className="count"><p>{el.count}</p></div>
              <p>${el.price * el.count}</p>
            </div>)})}
        </div>
        <h3>Итог:${totalPrice}</h3>
    </div>
  )
}

export default Cart