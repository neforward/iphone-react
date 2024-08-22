const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-first">
                            <div className="footer-logo">
                                <img src="https://i.ibb.co/Y0dZPZR/logo-d.png" alt="Logo" />
                            </div>
                            <nav className="footer-navbar">
                                <a href="">Наши услуги</a>
                                <a href="">Бренды</a>
                                <a href="">Отзывы</a>
                            </nav>
                        </div>
                        <div className="footer-second">
                            <h3>+8 (343) 311-21-11</h3>
                            <button>Перезвонить мне</button>
                        </div>
                    </div>

                </div>
            </footer>
            <div className="copyright">
                <div className="container">
                    <p>Copyright 2020. Все права защищены</p>
                    <p>Дизайн, разработка, реклама by Axmobi 8961-098-81-11</p>
                </div>
            </div>
        </>
    )
}

export default Footer