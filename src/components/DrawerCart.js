function DrawerCart({onClose, items = [] }) {

    return (
        <div className="wrapper-overlye">
            <div className="wrapper-aside">
                <h2 className="wrapper-aside-title d-flex justify-between">Корзина
                    <img onClick={onClose} className="aside-cartItem__icon" width="32" height="32" src="/img/btn-remove.svg" alt="remove" />
                </h2>
                <div className="aside-top">
                    {items.map((obj)=>(
                    <div className="aside-cartItem d-flex align-center">
                        <img className='aside-cartItem__img' width="70" height="70" src={obj.imageUrl} alt="item1" />
                        <div className="aside-cartItem-text">
                            <p className="aside-cartItem-text__title">{obj.title}</p>
                            <b className="aside-cartItem-text__price">{obj.price} руб.</b>
                        </div>
                        <img className="aside-cartItem__icon" width="32" height="32" src="/img/btn-remove.svg" alt="remove" />
                    </div>
                    ))}

                </div>

                <div className="aside-bottom">
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <div className='aside-bottom__dashed'></div>
                            <span>21 498 руб.</span>
                        </li>
                        <li>
                            <span>Налог 5%:</span>
                            <div className='aside-bottom__dashed'></div>
                            <span>1074 руб.</span>
                        </li>
                    </ul>

                    <button style={{ backgroundImage: 'url(/img/arrow_btn.svg)' }} className='aside-bottom___btn'>Оформить заказ</button>
                </div>


            </div>
        </div>
    );
}

export default DrawerCart