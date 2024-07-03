// import React, { Component } from 'react'
// import Ctre from '../assets/icons/ctrelka.png'
// import G1 from '../assets/icons/girl1.png'
// import G2 from '../assets/icons/girl2.png'
// import G3 from '../assets/icons/girl3.png'
// import './Home.scss'

// export default class Home extends Component {
//   render() {
//     const newPro =this.props.pro.slice(0, 3)
//     const cart = newPro.map((el) => {
//       return <div key={el.title} className=''>
//         <img src={el.image} alt="" />
//         <h3>{el.title}</h3>
//         <p>{el.price}</p>
//       </div>
//     })
//     return (
//       <div className="cases">
//         <div className='cas1'>
//           <div className="home-text">
//             <h2>Новые поступления <br /> в этом сезоне</h2>
//             <p>Утонченные сочетания и бархатные <br />
//               оттенки - вот то, что вы искали в этом <br />
//               сезоне. Время исследовать.</p>
//             <div className="box-btn">
//               <button className='btn1'><img src={Ctre} alt="" /></button>
//               <button className='btn2'>Открыть магазин</button>
//             </div>
//           </div>
//           <div className="picturs">
//             <img className='gir1' src={G1} alt="" />
//             <img className='gir2' src={G2} alt="" />
//             <img className='gir3' src={G3} alt="" />
//           </div>
//         </div>
//         <div className="lins">
//           <div className="lin1"></div>
//           <div className="lin2"></div>
//           <div className="lin3"></div>
//         </div>
//         <div className="cas2">
//           <h3>Новая коллекция</h3>
//           <div className="carts">
//             {cart}
//           </div>
//         </div>
//       </div>
//     )
//   }
// }


import React from 'react'
import Ctre from '../assets/icons/ctrelka.png'
import G1 from '../assets/icons/girl1.png'
import G2 from '../assets/icons/girl2.png'
import G3 from '../assets/icons/girl3.png'
import './Home.scss'

const Home = ({ pro }) => {
 const newPro = pro.slice(0, 3)
 console.log(pro, "aaaaa");
  const cart = newPro.map((el) => {
    return  <div key={el.title} className='cart'>
      <img src={el.image} alt="" />
      <h3>{el.title}</h3>
      <p>{el.price}</p>
    </div>
  })
  return (
    <div className="cases">
      <div className='cas1'>
        <div className="home-text">
          <h2>Новые поступления <br /> в этом сезоне</h2>
          <p>Утонченные сочетания и бархатные <br />
            оттенки - вот то, что вы искали в этом <br />
            сезоне. Время исследовать.</p>
          <div className="box-btn">
            <button className='btn1'><img src={Ctre} alt="" /></button>
            <button className='btn2'>Открыть магазин</button>
          </div>
        </div>
        <div className="picturs">
          <img className='gir1' src={G1} alt="" />
          <img className='gir2' src={G2} alt="" />
          <img className='gir3' src={G3} alt="" />
        </div>
      </div>
      <div className="lins">
        <div className="lin1"></div>
        <div className="lin2"></div>
        <div className="lin3"></div>
      </div>
      <div className="cas2">
        <h3>Новая коллекция</h3>
        <div className="carts">
          {cart}
          {/* <div className="cart1"> */}
            {/* <img src={pro[0].image} alt="" /> 
             <h4>{pro[0].title}</h4>
            <p>${pro[0].price}</p>
          </div>
          <div className="cart2">
          <img src={pro[1].image} alt="" />
            <h4>{pro[1].title}</h4>
            <p>${pro[1].price}</p>
          </div> 
          <div className="cart3">
          <img src={pro[2].image} alt="" />
            <h4>{pro[2].title}</h4>
            <p>${pro[2].price}</p> */}
          {/* </div> */}
        </div>
        <button>Открыть магазин</button>
      </div>
    </div>
  )
}

export default Home