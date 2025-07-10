import '../styles/fNavigation.css';
import logo from "../../../assets/images/dupo-logo-line.png"
import { useState } from 'react';

function FNavigation() {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };
    return (
        <div className="navbar-fixed">
            <div className="nav-container">
                <div className="nav-left">
                    <a className="menu-items logo"><img className="img" src={logo} alt="" /></a>
                </div>
                <div className="nav-right">
                    <ul>
                        <li><a className="nav-text nav-home" >HOME</a></li>
                        <li><a className="nav-text nav-works" >MY WORK</a></li>
                        <li><a className="nav-text nav-about" >ABOUT</a></li>
                        <li><a className="nav-text nav-contact" >CONTACT</a></li>
                    </ul>
                    <div className='toggle-button' onClick={handleClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <line x1="4" y1="6" x2="20" y2="6"></line>
                            <line x1="4" y1="12" x2="20" y2="12"></line>
                            <line x1="4" y1="18" x2="20" y2="18"></line>
                        </svg>
                    </div>
                </div>
            </div>
            <div className={`md:hidden nav-menu-mobile bg-white ${active ? 'active' : ''}`}>
                <ul>
                    <li><a className="nav-menu-text nav-menu-home" >HOME</a></li>
                    <li><a className="nav-menu-text nav-menu-works" href="#p">MY WORK</a></li>
                    <li><a className="nav-menu-text nav-menu-about" >ABOUT</a></li>
                    <li><a className="nav-menu-text nav-menu-contact" >CONTACT</a></li>
                </ul>
            </div>
        </div>
    );
}
export default FNavigation;