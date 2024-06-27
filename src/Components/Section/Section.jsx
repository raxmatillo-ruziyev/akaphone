import './Section.scss';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import tel1 from '../../assets/tel1.png';
import tel2 from '../../assets/tel2.png';
import tel3 from '../../assets/tel3.png';
import tel4 from '../../assets/tel4.png';
import tel5 from '../../assets/tel5.png';
import tel6 from '../../assets/tel6.png';
import tel7 from '../../assets/tel7.png';
import tel8 from '../../assets/tel8.png';
import tel9 from '../../assets/tel9.png';
import Card from '../Card/Card';

const Section = () => {
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
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1020,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    variableWidth: true
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1.2,
                    slidesToScroll: 1,
                    variableWidth: true
                }
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true
                }
            }
        ]
    };

    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">Горячие за неделью</h1>
                <div className="slider-container">
                    <Slider
                        ref={slider => {
                            sliderRef = slider;
                        }}
                        {...settings}
                    >
                        <div key={1}>
                            <Card name="Google Pixel - Black" price="10" tell={tel1} />
                        </div>
                        <div key={2}>
                            <Card name="Samsung S7" price="16" tell={tel2} />
                        </div>
                        <div key={3}>
                            <Card name="HTC 10 - Black" price="8" tell={tel3} />
                        </div>
                        <div key={4}>
                            <Card name="Vintage Iphone" price="17" tell={tel4} />
                        </div>
                        <div key={5}>
                            <Card name="Lenovo IdeaPad L340" price="80" tell={tel5} />
                        </div>
                        <div key={6}>
                            <Card name="Kreslo INDI CA-1613A" price="8" tell={tel6} />
                        </div>
                        <div key={7}>
                            <Card name="Holitic Change" price="8" tell={tel7} />
                        </div>
                        <div key={8}>
                            <Card name="HyperX Cloud Stinger" price="2" tell={tel8} />
                        </div>
                        <div key={9}>
                            <Card name="Galaxy Tab S6" price="25" tell={tel9} />
                        </div>
                    </Slider>
                    <div style={{ textAlign: 'center' }}>
                        <button className="button" onClick={previous}>

                        </button>
                        <button className="button" onClick={previous}>

                        </button>
                        <button className="button" onClick={next}>

                        </button>

                        <button className="button" onClick={next}>

                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;
