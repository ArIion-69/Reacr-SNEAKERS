import React from "react"

function Card( {imageUrl, title, price, onPlus , onFavarite} ) {
  
  const [isAdded, setIsPlus] = React.useState(false);
  const [isAddedFavorite, setIsAddedFavorite] = React.useState(false);
  
  const onClickPlus = () => {
    onPlus({imageUrl, title, price,});
  };
  
  const onClickFavorite = () => {
    setIsAddedFavorite(!isAddedFavorite); 
    };
  

    return(
        <div className="showcase-wraper-item">
        <img className='showcase-wraper-item-favorite' onClick={onClickFavorite}  src={isAddedFavorite ? '/img/like-icon2.svg' : '/img/like-icon.svg'} alt="like" />
        <img width={133} height={112} src={imageUrl} alt="item1" />
        <h2 className='showcase-wraper-item__title'>{title}</h2>
        <span className='showcase-wraper-item__suptitle'>Цена:</span>
        <span className='showcase-wraper-item__price'>{price} руб.</span>
        <img  className='showcase-wraper-item-plus' onClick={onClickPlus}  src={isAdded ? '/img/btn-cheked.svg' : '/img/btn-nocheked.svg'} alt="plus-icon" />
      </div>
    );
}

export default Card