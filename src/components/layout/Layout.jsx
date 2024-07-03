import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from '../../pages/About'
import Cart from '../../pages/Cart'
import Contacts from '../../pages/Contacts'
import Detail from '../../pages/Detail'
import Home from '../../pages/Home'
import Shop from '../../pages/Shop'
import Footer from '../footer/Footer'
import Header from '../heder/Header'
import './Layout.scss'


const Layout = ({pro, onCart, cart}) => {
    return (
        <div className='cont'>
            <Header cart={cart} />
            <Routes>
                <Route path='/'  element={<Home pro={pro} />}  />
                {/* <Route path='/'  element={<div className="bac"></div>}  /> */}
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/shop' element={<Shop pro={pro} />} />
                <Route path='/about' element={<About />} />
                <Route path='/deteil/:id' element={<Detail pro={pro} onCart={onCart}/>}/>
                <Route path='/cart' element={<Cart cart={cart} />}/>
            </Routes>
            <Footer />
        </div>
    )
}

export default Layout