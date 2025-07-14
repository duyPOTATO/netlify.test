import '../styles/fNavigation.css';
import logo from '../../../images/dupo-logo-line.png';
import { useState } from 'react';

const FinalNavigation = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };
    return (
        <>
            <div className="navbar-fixed">
                <div className="nav-container">
                    <div className="nav-left">
                        <a href="#" className="menu-items logo">
                            <img className="img" src={logo} alt="" />
                        </a>
                    </div>
                    <div className="nav-right">
                        <ul>
                            <li>
                                <a className="nav-text nav-home" href="#">
                                    HOME
                                </a>
                            </li>
                            <li>
                                <a className="nav-text nav-works" href="#">
                                    MY WORK
                                </a>
                            </li>
                            <li>
                                <a className="nav-text nav-about" href="#">
                                    ABOUT
                                </a>
                            </li>
                            <li>
                                <a className="nav-text nav-contact" href="#">
                                    CONTACT
                                </a>
                            </li>
                        </ul>
                        <div
                            className="toggle-button"
                            href="#"
                            onClick={handleClick}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-menu-2"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                ></path>
                                <line x1="4" y1="6" x2="20" y2="6"></line>
                                <line x1="4" y1="12" x2="20" y2="12"></line>
                                <line x1="4" y1="18" x2="20" y2="18"></line>
                            </svg>
                        </div>
                    </div>
                </div>
                <div
                    className={`nav-menu-mobile bg-white md:hidden ${active ? 'active' : ''}`}
                >
                    <ul>
                        <li>
                            <a className="nav-menu-text nav-menu-home" href="#">
                                HOME
                            </a>
                        </li>
                        <li>
                            <a
                                className="nav-menu-text nav-menu-works"
                                href="#p"
                            >
                                MY WORK
                            </a>
                        </li>
                        <li>
                            <a
                                className="nav-menu-text nav-menu-about"
                                href="#"
                            >
                                ABOUT
                            </a>
                        </li>
                        <li>
                            <a
                                className="nav-menu-text nav-menu-contact"
                                href="#"
                            >
                                CONTACT
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="lamexD"></div>
        </>
    );
};
export default FinalNavigation;
