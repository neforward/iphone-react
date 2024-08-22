import React, { useState } from 'react';
import Form from './Form';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.classList.toggle('no-scroll', !isMenuOpen);
    };

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header-content">
                        <div className="header-first">
                            <div className="header-logo">
                                <img src="https://i.ibb.co/Y0dZPZR/logo-d.png" alt="Company Logo" />
                            </div>
                            <nav className="navbar" aria-label="Secondary navigation">
                                <a href="#">Наши услуги</a>
                                <a href="#">Бренды</a>
                                <a href="#">Отзывы</a>
                            </nav>
                        </div>
                        <div className="header-second">
                            <h3>+8 (343) 311-21-11</h3>
                            <button onClick={() => setIsFormOpen(true)}>Перезвонить мне</button>
                        </div>
                        <div className="header-burger">
                            <div
                                className={`burger ${isMenuOpen ? 'active' : ''}`}
                                onClick={toggleMenu}
                                aria-expanded={isMenuOpen}
                            >
                                <span className="line"></span>
                                <span className="line"></span>
                                <span className="line"></span>
                            </div>
                            <div className={`burger-menu ${isMenuOpen ? 'active' : ''}`}>
                                <nav className="burger-nav" >
                                    <a href="#">Наши услуги</a>
                                    <a href="#">Бренды</a>
                                    <a href="#">Отзывы</a>
                                </nav>
                            </div>
                            <div className="header-logo">
                                <img src="https://i.ibb.co/Y0dZPZR/logo-d.png" alt="Company Logo" />
                            </div>
                            <div className="phone-call-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <g clipPath="url(#clip0_1_11136)">
                                        <path d="M27.7712 22.2502L24.0589 18.4091C24.0554 18.4055 24.0519 18.402 24.0484 18.3984C23.018 17.368 21.3503 17.3679 20.3198 18.3984L18.6249 20.0933C17.8444 20.8738 16.5809 20.874 15.8003 20.0933C15.7999 20.0929 15.7996 20.0926 15.7992 20.0922L9.9051 14.3375C9.12452 13.5569 9.1244 12.2935 9.9051 11.5128L11.5999 9.81799C12.6279 8.79002 12.6279 7.11735 11.5999 6.08938L7.87132 2.36077C6.84329 1.33287 5.17068 1.33287 4.14271 2.36077C4.14236 2.36113 2.89959 3.60396 2.89988 3.6036C2.89959 3.60396 2.7872 3.71628 2.78691 3.71663C-0.928394 7.43188 -0.929742 13.4455 2.7875 17.1628L12.9756 27.2115C16.6826 30.9185 22.6861 30.9323 26.4081 27.2245C26.4285 27.2057 27.7456 25.9925 27.7653 25.9728C28.7912 24.9468 28.7932 23.2786 27.7712 22.2502ZM5.3856 3.6036C5.72825 3.26095 6.28577 3.26095 6.62843 3.6036L10.357 7.33221C10.7005 7.67575 10.7006 8.23157 10.357 8.5751L9.73565 9.19649L4.76415 4.22505L5.3856 3.6036ZM14.2178 25.968L4.02974 15.9193C1.15877 13.0483 1.0226 8.52102 3.54476 5.49137L8.4988 10.4454C7.20124 11.9185 7.2552 14.1733 8.66333 15.5814L14.5585 21.3372C15.9675 22.7451 18.2151 22.803 19.6925 21.4997L24.6461 26.4533C21.5866 28.9948 17.0865 28.8367 14.2178 25.968ZM26.5328 24.7193L25.9422 25.2636L20.9412 20.2627L21.5626 19.6413C21.905 19.299 22.4576 19.2979 22.8011 19.6369C22.8079 19.644 26.5154 23.4801 26.5224 23.487C26.8616 23.8263 26.865 24.3759 26.5328 24.7193Z" fill="#BDBDBD" />
                                        <path d="M15.0595 0.000976562C14.5742 0.000976562 14.1807 0.394491 14.1807 0.879823C14.1807 1.36515 14.5742 1.75867 15.0595 1.75867C22.3284 1.75867 28.2421 7.67235 28.2421 14.9412C28.2421 15.4266 28.6356 15.8201 29.1209 15.8201C29.6063 15.8201 29.9998 15.4266 29.9998 14.9412C29.9998 6.6837 23.3177 0.000976562 15.0595 0.000976562Z" fill="#BDBDBD" />
                                        <path d="M15.0595 3.5166C14.5742 3.5166 14.1807 3.91012 14.1807 4.39545C14.1807 4.88078 14.5742 5.27429 15.0595 5.27429C20.39 5.27429 24.7268 9.61098 24.7268 14.9415C24.7268 15.4269 25.1203 15.8204 25.6056 15.8204C26.0909 15.8204 26.4845 15.4269 26.4845 14.9415C26.4845 8.64184 21.3592 3.5166 15.0595 3.5166Z" fill="#BDBDBD" />
                                        <path d="M15.0595 7.03223C14.5742 7.03223 14.1807 7.42574 14.1807 7.91107C14.1807 8.3964 14.5742 8.78992 15.0595 8.78992C18.4517 8.78992 21.2114 11.5496 21.2114 14.9418C21.2114 15.4271 21.6049 15.8206 22.0902 15.8206C22.5756 15.8206 22.9691 15.4272 22.9691 14.9418C22.9691 10.5804 19.4209 7.03223 15.0595 7.03223Z" fill="#BDBDBD" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_11136">
                                            <rect width="30" height="30" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {isFormOpen && <Form onClose={() => setIsFormOpen(false)} />}
        </>
    );
};

export default Header
