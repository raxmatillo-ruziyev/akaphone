import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import './Slider.scss'
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
import Card2 from "../Card2/Card2";

function Sliderr() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  return (
    <div className="container">
    <div className="slider-container">
   
      <Slider asNavFor={nav2} 
      ref={slider => (sliderRef1 = slider)}
      slidesToShow={4}>
      <div key={1}>
                            <Card2   tell={tel1} />
                        </div>
                        <div key={2}>
                            <Card2  tell={tel2} />
                        </div>
                        <div key={3}>
                            <Card2  tell={tel3} />
                        </div>
                        <div key={4}>
                            <Card2  tell={tel4} />
                        </div>
                        <div key={5}>
                            <Card2 tell={tel5} />
                        </div>
                        <div key={6}>
                            <Card2 tell={tel6} />
                        </div>
                        <div key={7}>
                            <Card2  tell={tel7} />
                        </div>
                        <div key={8}>
                            <Card2  tell={tel8} />
                        </div>
                        <div key={9}>
                            <Card2 tell={tel9} />
                        </div>
      </Slider>

      <Slider
        asNavFor={nav1}
        ref={slider => (sliderRef2 = slider)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
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
      </Slider><br />
      <Slider
        asNavFor={nav1}
        ref={slider => (sliderRef2 = slider)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        
   <div key={1}>
   <Card name="Galaxy Tab S6" price="25" tell={tel9} />
                        </div>
                        <div key={2}>
                            <Card name="Samsung S7" price="16" tell={tel2} />
                        </div>
                        <div key={3}>
                        <Card name="HyperX Cloud Stinger" price="2" tell={tel8} />
                        </div>
                        <div key={4}>
                         
                            <Card name="HTC 10 - Black" price="8" tell={tel3} />
                        </div>
                        <div key={5}>
                         
                            <Card name="Google Pixel - Black" price="10" tell={tel1} />
                        </div>
                        <div key={6}>
                            <Card name="Kreslo INDI CA-1613A" price="8" tell={tel6} />
                        </div>
                        <div key={7}>
                         
                            <Card name="Lenovo IdeaPad L340" price="80" tell={tel5} />
                        </div>
                        <div key={8}>
                           
                            <Card name="Vintage Iphone" price="17" tell={tel4} />
                        </div>
                        <div key={9}>
                            
                            <Card name="Holitic Change" price="8" tell={tel7} />
                        </div>
      </Slider>
    </div>
    </div>
  );
}

export default Sliderr;
