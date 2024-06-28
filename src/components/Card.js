function Card() {
    return(
        <div className="showcase-wraper-item">
        <img className='showcase-wraper-item-favorite ' width={32} height={32} src="/img/like-icon.svg" alt="like" />
        <img width={133} height={112} src="/img/item/sneakers4.jpg" alt="item1" />
        <h2 className='showcase-wraper-item__title'>Мужские Кроссовки Nike Blazer Mid Suede</h2>
        <span className='showcase-wraper-item__suptitle'>Цена:</span>
        <span className='showcase-wraper-item__price'>12 999 руб.</span>
        <button className='showcase-wraper__btn'>
          <img width={11} height={11} src="/img/plus.svg" alt="plus-icon" />
        </button>
      </div>
    );
}

export default Card