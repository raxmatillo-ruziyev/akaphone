import React from 'react'
import './Services.scss'
import one from '../../assets/tel5.png'
import one1 from '../../assets/tel8.png'
import one2 from '../../assets/tel12.png'
import one3 from '../../assets/tel6.png'
import one4 from '../../assets/tel7.png'
import one5 from '../../assets/tel9.png'
import Button from '../Button/Button'
const Services = () => {
  return (
    <>
    <div className="services">
        <div className="container">
            <h1 className="services-title">Специальные предложения</h1>
         <ul className="services-list">
            <li className="services-item">
                <div className="card-one">
                    <img src={one} alt="" width={150} />
                    <div className="one-box">
                        <h1 className="one-title">Lenovo IdeaPad L340</h1>
                        <h2 className="one-subtitle">80 ₽</h2>
                        <Button/>
                    </div>
                </div>
               <div className="card-left"> <div className="card-two">
                    <img className='card-img' src={one1} alt="" width={120} />
                    <div className="one-box">
                        <h1 className="two-title">HyperX Cloud Stinger</h1>
                        <h2 className="two-subtitle">2 ₽</h2>
                      <div className="btn">  <Button/></div>
                    </div>
                </div>
                <div className="card-two">
                    <img className='card-img' src={one2} alt="" width={130} />
                    <div className="one-box">
                        <h1 className="two-title">HyperX Cloud Stinger</h1>
                        <h2 className="two-subtitle">2 ₽</h2>
                      <div className="btn">  <Button/></div>
                    </div>
                </div></div>
            </li>
            <li className="services-item">
               <div className="card-right">
               <div className="card-three">
                <h1 className="one-title">Кресло INDI CA-1613A-1</h1>
                <h2 className="three-subtitle">5 ₽</h2>
                    <img src={one3} alt="" width={150} />
                    <br /> <br /><br /><br /><br />
                    <Button/>
                  
                </div>
                <div>
                <div className="card-four">
                    <img className='card-img' src={one5} alt="" width={100} />
                    <div className="one-box">
                        <h1 className="four-title">Galaxy Tab S6</h1>
                        <h2 className="four-subtitle">2 ₽</h2><br />
                      <Button/>
                    </div>
                </div>
                <div className="card-four">
                    <img className='card-img' src={one4} alt="" width={140} />
                    <div className="one-box">
                        <h1 className="four-title">Holitic Change</h1>
                        <h2 className="four-subtitle">2 ₽</h2><br />
                 <Button/>
                    </div>
                </div>
                </div>
               </div>
            </li>
         </ul>
        </div>
    </div>
      
    </>
  )
}

export default Services
