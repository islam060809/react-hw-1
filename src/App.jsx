import React, { useEffect, useState } from 'react'
import '../src/style/var.scss'
import Layout from './components/layout/Layout'
const url = "https://fakestoreapi.com/products"

const App = () => {
  const [products, setProducts] = React.useState(null)
  const [cart, setCart] = React.useState([])

  const getCart = (pro) => {
    let inCart = cart.find(x => x.id === pro.id);
    if (!inCart) {
      const pp = { ...pro, count: 1 }
      setCart([...cart, pp])
    } else {
      inCart.count += 1;
    }
  }
  console.log(cart);
  async function getPro() {
    try {
      const res = await fetch(url)
      const data = await res.json()
      console.log(data);
      setProducts(data)
      console.log(products);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getPro();
  }, [])

  if (products === null) {
    return <h2>Loading</h2>
  }

  return (
    <div>
      <Layout pro={products} onCart={getCart} cart={cart} />
    </div>
  )
}

export default App