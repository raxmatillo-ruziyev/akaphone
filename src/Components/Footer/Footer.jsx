import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { Link } from 'react-router-dom'
import footer from '../../assets/footer-logo.svg'
ReactGA.initialize('YOUR_GOOGLE_ANALYTICS_TRACKING_ID');

import './Footer.scss'


const Footer = () => {
    useEffect(() => {

        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);
    return (
        <div className='footer'>
            <div className='container'>
                <ul className="footer-list">
                    <li className="footer-item">
                        <Link className='footer-link' to={'/'}>
                          <footer className='footer-img'>  <img className='imgggg' src={footer} alt="" /></footer>
                            <h1 className="footer-title">AkaPhone</h1>
                            <p className="footer-text">Качестенное по доступное цену</p>
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link className='footer-link' to={'/'}>О нас</Link> <br />
                        <Link className='footer-link' to={'/'}> Каталог продуктов</Link><br />
                        <Link className='footer-link' to={'/'}>Доставка</Link><br />
                        <Link className='footer-link' to={'/'}>Контакты</Link>
                    </li>
                    <li className="footer-item">
                        <Link className='footer-link' to={'/'}>Смартфоны</Link> <br />
                        <Link className='footer-link' to={'/'}> Смарт Часы</Link><br />
                        <Link className='footer-link' to={'/'}>Планшеты</Link> <br />
                        <Link className='footer-link' to={'/'}>Камеры</Link><br />
                        <Link className='footer-link' to={'/'}>Аксессуары</Link>
                    </li>
                    <li className="footer-item">
                        <div style={{ position: 'relative', overflow: 'hidden' }}>
                            <a href="https://yandex.uz/maps?utm_medium=mapframe&utm_source=maps" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}>
                                Яндекс Карты
                            </a>
                            <a href="https://yandex.uz/maps/geo/771270945/?ll=68.167623%2C39.365725&utm_medium=mapframe&utm_source=maps&z=6.93" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}>
                                Термез — Яндекс Карты
                            </a>
                            <iframe
                                src="https://yandex.uz/map-widget/v1/?ll=68.167623%2C39.365725&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgk3NzEyNzA5NDUSKk_Ku3piZWtpc3RvbiwgU3VyeG9uZGFyeW8gdmlsb3lhdGksIFRlcm1peiIKDQiNhkIVEuoUQg%2C%2C&z=6.93"
                                width="320"
                                height="230"
                                frameBorder="1"
                                allowFullScreen="true"
                                style={{ position: 'relative' }}
                                title="Yandex Map"
                            ></iframe>
                        </div>

                    </li>
                    <li className="footer-item">
                        <h3 className="footer-subtitle"> Наш телефон</h3>
                        <a className='linkcha' href="tel:+998(91) 163-12-36">+998(91) 163-12-36</a>
                        <h3 className="footer-subtitle">Наш E-mail</h3>
                        <a className='linkcha' href="mail:">info@akaphone.uz</a>
                        <h3 className="footer-subtitle">Наш адрес</h3>
                        <a className='linkcha' href="#">ул Мевазор дом 21</a><br />
                       <a href="https://www.facebook.com/"> <i id='footer-icon' className='fa fa-facebook' /></a>
                       <a href="https://www.telegram.com/"> <i id='footer-icon' className='fa fa-telegram' /></a>
                       <a href="https://www.instagram.com/"> <i id='footer-icon3' className='fa fa-instagram' /></a>
                      
                       








                    </li>

                </ul>
            </div>

        </div>
    )
}

export default Footer
