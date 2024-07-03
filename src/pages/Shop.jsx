import React, { useState } from 'react'
import { render } from 'react-dom'
import { NavLink } from 'react-router-dom'
import './Shop.scss'


const Shop = ({ pro }) => {
    const [numPro, setNumPro] = useState(pro.length)
    const [showCate,setShowCate]= useState(pro)
    const getNumPro = (cate) => {
        if (cate === "all") {
            let NewNumPro = pro.length
            setNumPro(NewNumPro)
            setShowCate(pro)
        } else {
            let NewNumPro = pro.filter((el) => el.category === cate).length
            let NewShowPro = pro.filter((el) => el.category === cate)
            setNumPro(NewNumPro)
            setShowCate(NewShowPro)
        }
    }
    
    return (
        <div className='shop'>
            <h2>Shop</h2>
            <div className="btns">
                <button onClick={()=>getNumPro("all")}>All</button>
                <button onClick={()=>getNumPro("men's clothing")}>Men's clothing</button>
                <button onClick={()=>getNumPro("jewelery")}>Jewelery</button>
                <button onClick={()=>getNumPro("electronics")}>Electronics</button>
                <button onClick={()=>getNumPro("women's clothing")}>Women's clothing</button>
            </div>
            <p className='numShow'>Показано: {numPro} из {pro.length} товаров</p>
            <div className="products">
                {showCate.map((el) => {
                    return <NavLink to={`/deteil/${el.id}`}>  <div key={el.title} className='product'>
                        <img src={el.image} alt="" />
                        <h3>{el.title}</h3>
                        <p>${el.price}</p>
                    </div>
                    </NavLink>
                })}
            </div>

        </div>
    )
}

export default Shop