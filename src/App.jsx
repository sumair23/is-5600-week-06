import productData from './data/full-products';
import Header from './components/Header';
import CardList from './components/CardList';
import  Button from './components/Button'
import { Route, Routes} from 'react-router-dom';
import SingleView from './components/SingleView';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path="/" element={<CardList data={productData} />} />
          <Route path="/product/:id" element={<SingleView data={productData} />} />
        </Routes>      
       </div>
  );
}

export default App;
