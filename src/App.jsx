import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Tovar from './components/Products/Products';
import Basket from './components/Basket/Basket';
import { useState } from 'react';

function App() {
  const [activeModal, setActive] = useState(false)
  const [basket, setBasket] = useState([])

  return (
      <BrowserRouter>
        <div className="App">
          <Basket activeModal={activeModal} setActive={setActive} basket={basket} setBasket={setBasket}/>
          <Header setActive={setActive} />
          <div className="content">
            <Routes>
                <Route path="/" element={<Home />} setBasket={setBasket}/>
                <Route path="/tovar/:id" element={<Tovar setBasket={setBasket} basket={basket}/> }/>
            </Routes>
          </div>
          <Header setActive={setActive} />
        </div>
      </BrowserRouter>
  );
}

export default App;
