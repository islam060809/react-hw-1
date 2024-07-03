import React from 'react'
import { Link } from 'react-router-dom'
import Tel from '../../assets/icons/telefon.png'
import Cor from '../../assets/icons/corzina.png'
import Logo from '../../assets/icons/logo.png'
import './Header.scss'

const Header = ({cart}) => {
    //  abs = "" if cart.length == 0 else cart.length
    // (number) => { return number === 0 ? number:number; }
    return (
        <nav className='cont'>
            <div className='logo'><img src={Logo} alt="" /><p>Womazing</p></div>
            <ul className='nav-list'>
                <a> <Link to="/" className="dir">Home</Link></a>
                <a> <Link to="/contacts" className="dir">Contacts</Link></a>
                <a> <Link to="/shop" className="dir">Shop</Link></a>
                <a> <Link to="/about" className="dir">About us</Link></a>
            </ul>
            <img src={Tel} alt="" />
            <p className='number'>+7 (495) 823-54-12</p>
            <div className="gg">
            <Link to="/cart" ><img src={Cor} alt="" />
             <p className='per'>{
                cart.length === 0 ? '' : cart.length
             }</p>
            </Link>
            </div>
            {/* <button>Sign In</button> */}
        </nav>
    )
}

export default Header