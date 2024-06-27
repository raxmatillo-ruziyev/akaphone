import React, { useRef } from "react";
import Slider from "react-slick";
import './Hero.scss'
import { Button } from 'antd'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from '../../assets/smart_watch.png'

const Hero = () => {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <div className="hero">
                <div className="container">
                   <div className="herocha">
                   <div className="hero-box">
                        <h1 className="hero-title">Смартфоны и гаджеты для близких и друзей по доступной цене</h1>
                        <p className="hero-text">В нашем магазине вы сможете найти качествунную продукцию по досутпным ценам для вашего близкого человека</p>
                        <button type="primary" danger className="hero-btn">Посмотреть каталог</button>
                    </div>
                   <div className="hero-boxcha">
                   <div className="slider-container">
                        <Slider
                            ref={slider => {
                                sliderRef = slider;
                            }}
                            {...settings}
                        >
                            <div key={1}>
                                <img src={slider1} alt="" className="slider-img" />
                            </div>
                            <div key={2}>
                                <img src={slider1} alt="" className="slider-img" />
                            </div>
                            <div key={3}>
                                <img src={slider1} alt="" className="slider-img" />
                            </div>
                        </Slider>
                        <div style={{ textAlign: "center" }}>
                            <button className="button" onClick={previous}>
                                
                            </button>
                            <button className="button" onClick={next}>
                            
                            </button>
                            <button className="button" onClick={previous}>
                                
                            </button>
                            <button className="button" onClick={next}>
                                
                            </button>
                        </div>
                    </div>
                   </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
