import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "./Detail.scss"

const Detail = ({onCart}) => {
    const [newProducts, setNewProducts] = React.useState(null)

    async function getPro(id) {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await res.json()
        console.log(data);
        setNewProducts(data)
    }
    const params = useParams()
    useEffect(() => {
        getPro(params.id)
    }, [params.id])
    if (newProducts === null) {
        return <h2>Loading</h2>
    }
    return (
        <div className='detail'>
            <h2>{newProducts.title}</h2>
            <div className="infa1">
                <img src={newProducts.image} alt="" />
                <div className="infa2">
                    {/* <h4>{newProducts.category}</h4>
            <p>{newProducts.description}</p> */}
                    <p>${newProducts.price}</p>
                    <button onClick={()=>onCart(newProducts)}>Добавить в корзину</button>
                </div>
            </div>
        </div>
    )
}

export default Detail