function Header() {
    return (
        <header>
            <div className="header-navigate d-flex justify-between align-center">
                <div className="header-navigate__item d-flex align-center">
                    <img width="40" height="40" src="/img/logo.svg" alt="logo" />
                    <div className="header-navigate__item__text">
                        <h3>REACT SNEAKERS</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
                <div className="header-navigate__item">
                    <ul className='d-flex align-center'>
                        <li>
                            <img width="18" height="18" src="/img/card.svg" alt="logo" />
                            <span>1205 руб.</span>
                        </li>
                        <li>
                            <img width="18" height="18" src="/img/like.svg" alt="logo" />
                            <span>Закладки</span>
                        </li>
                        <li>
                            <img width="18" height="18" src="/img/profile.svg" alt="logo" />
                            <span>Профиль</span>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header 