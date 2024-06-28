import './main.styl';
import Card from './components/Card'
import Header from './components/Header'
import DrawerCart from './components/DrawerCart'

function App() {
  return <div className="wrapper clear">
      <DrawerCart/>
    
      <Header/>
      
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
            <Card/>
          </div>
        </div>
      </main>
    </div>
}

export default App;
  