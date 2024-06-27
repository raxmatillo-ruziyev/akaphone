import React, { useState } from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { Button, Drawer } from 'antd'
const Navbar = () => {
    const handleButtonClick = () => {
        window.location.href = 'tel:+998938901105';
    };
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className="navbar">
                <div className="container">
                    <ul className="navbar-list">
                        <li className='navbar-item'><Link to={'/'} className='nav-link'>
                            <img src={logo} alt="" width={'70'} />
                            <div className="nav">
                                <h1 className="logo-title">AkaPhone</h1>
                                <h3 className="logo-subtitle">Качестенное по доступное цену</h3>
                            </div>
                        </Link></li>
                        <li className='navbar-item'>
                            <Link to={'/'} className='navbar-link'>Скидки</Link>
                            <Link to={'/'} className='navbar-link'>Специальные предложения</Link>
                            <Link to={'/'} className='navbar-link'>Каталог товаров</Link>
                        </li>
                        <li className='navbar-item'>
                            <div className='nav-boxcha'>
                                <a className='nav-tel' >+998(90) 225 - 19 - 97</a> <br />
                                <Link to={'/'} className='navbar-link' >
                                    <button onClick={handleButtonClick} className='nav-btn' danger>Заказать звонок</button>
                                </Link>
                            </div>
                            <Link to={'/'} className='navbar-link'><i id='bag' className='fa fa-shopping-bag'></i></Link>
                        </li>
                        <li>   <i id='burger' onClick={showDrawer} className='	fa fa-align-justify'></i></li>

                        <Drawer className='menu' title="Menu" onClose={onClose} open={open}>
                           
                               
                                    <Link to={'/'} className='menu-link'>Скидки</Link> <br />
                                    <Link to={'/'} className='menu-link'>Специальные предложения</Link> <br />
                                    <Link to={'/'} className='menu-link'>Каталог товаров</Link> <br /> 
                                
                                    <Link to={'/'} className='menu-link'><i id='modalbag' className='fa fa-shopping-bag'></i></Link> <br /> <br />
                                    <div className='menu-boxcha'>
                                        <a className='menu-tel' >+998(90) 225 - 19 - 97</a> <br /> 
                                        <Link to={'/'} className='menu-link' >
                                            <button onClick={handleButtonClick} className='menu-btn' danger>Заказать звонок</button>
                                        </Link>
                                    </div> <br /> <br />
                                 
                    
                        
                        </Drawer>
                    </ul>




                </div>
            </div>
            <br />
            <br /><br /><br /><br /><br /><br />
        </>
    )
}

export default Navbar
