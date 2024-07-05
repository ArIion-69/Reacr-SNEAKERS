import React from "react"
import './main.styl';
import Card from './components/Card';
import Header from './components/Header';
import DrawerCart from './components/DrawerCart';

function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)
  
  React.useEffect(() => {
    fetch('https://66872c010bc7155dc016e468.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);
  
  const onAddToCard = (obj) => {
    setCartItems(prev =>[... prev, obj])
  };
  
  
  
  return <div className="wrapper clear">
      { cartOpened && <DrawerCart items={cartItems} onClose={() => setCartOpened(false)} />}
    
      <Header onClickCart={() => setCartOpened(true)}/>
      
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
            {items.map((item) =>(
              <Card 
              title = {item.title}  
              price = {item.price} 
              imageUrl = {item.imageUrl}
              onFavorite = {( ) => console.log('like')}
              onPlus = {(obj) => onAddToCard(obj)}
              />  
            ))}

          </div>
        </div>
      </main>
    </div>
}

export default App;
  