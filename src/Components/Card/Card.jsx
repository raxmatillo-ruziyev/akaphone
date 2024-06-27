import React from 'react'
import './Card.scss'
import tell10 from '../../assets/tell10.jpeg'
const Card = ({name,price,tell}) => {
    return (
        <>
            <div className="card">
              
                    <div className="card-box">
                    <h1 className="card-title">{name}</h1>  <br />
                        <img src={tell} alt="" width={"200px"} height={"170px"} />
                     
                        <p className="card-text">Белый, серый, синий</p>
                        <ul className="card-list">
                            <li className="card-item"><h2 className="card-subtitle">{price} ₽</h2></li> <br /><br />    
                            <li><button className='card-btn'>Add To Cart <i className='fa fa-shopping-cart'></i></button></li>
                        </ul>
                        
      
                    </div>
                    <img className='tell' src={tell10} alt="" width={90} />
            </div>
        </>
    )
}

export default Card
