import React from 'react'
import './Footer.scss'
import Logo from '../../assets/icons/logo.png'
import Insta from '../../assets/icons/instagram.png'
import Twitter from '../../assets/icons/twitter.png'
import Facebook from '../../assets/icons/facebook.png'
import Visa from '../../assets/icons/visa-mastercard.png'

const Footer = () => {
    return (
        <div className="bag">
            <div className='footer'>
                <div className="box1">
                    <div className="logo">
                        <img src={Logo} alt="" />
                        <p>Womazing</p>
                    </div>
                    <div className="b1-text">
                        <p>© Все права защищены</p>
                        <p>Политика конфиденциальности</p>
                        <p>Публичная оферта</p>
                    </div>
                </div>
                <div className="box2">
                    <div className="title-comp">
                        <p>Главная</p>
                        <p>Магазин</p>
                        <p>О бренде</p>
                        <p>Контакты</p>
                    </div>
                    <div className="clouses">
                        <p>Пальто</p>
                        <p>Свитшоты</p>
                        <p>Кардиганы</p>
                        <p>Толстовки</p>
                    </div>
                </div>
                <div className="box3">
                    <div className="infa">
                        <p>+7 (495) 823-54-12</p>
                        <p>hello@womazing.com</p>
                    </div>
                    <div className="icons">
                        <img src={Insta} alt="" />
                        <img src={Facebook} alt="" />
                        <img src={Twitter} alt="" />
                    </div>
                    <img src={Visa} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer