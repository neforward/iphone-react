
const Header = () => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header-content">
                        <div className="header-first">
                            <div className="header-logo">
                                <img src="https://i.ibb.co/Y0dZPZR/logo-d.png" alt="" />
                            </div>
                            <nav className="navbar">
                                <a href="">Наши услуги</a>
                                <a href="">Бренды</a>
                                <a href="">Отзывы</a>
                            </nav>
                        </div>
                        <div className="header-second">
                            <h3>+8 (343) 311-21-11</h3>
                            <button>Перезвонить мне</button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header