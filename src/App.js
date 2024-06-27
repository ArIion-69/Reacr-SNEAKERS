import './main.styl';

function App() {
  return <div className="wrapper clear">
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
      
      <main>
        <div className="showcase">
          <div className="showcase-top">
            <h1 className='showcase-top__title'>Все кроссовки</h1>
            <div className="showcase-top__search">
              <img wight={14} height={14} src="/img/search.svg" alt="search" />
              <input placeholder='Поиск...' />
            </div>
          </div>
          <div className="showcase-wraper">
            <div className="showcase-wraper-item">
              <img className='showcase-wraper-item-favorite ' width={32} height={32} src="/img/like-icon.svg" alt="like" />
              <img width={133} height={112} src="/img/item/sneakers1.jpg" alt="item1" />
              <h2 className='showcase-wraper-item__title'>Мужские Кроссовки Nike Blazer Mid Suede</h2>
              <span className='showcase-wraper-item__suptitle'>Цена:</span>
              <span className='showcase-wraper-item__price'>12 999 руб.</span>
              <button className='showcase-wraper__btn'>
                <img width={11} height={11} src="/img/plus.svg" alt="plus-icon" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
}

export default App;
  