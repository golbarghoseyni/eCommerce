import { Header } from './components/header/Header';
import { Products } from './components/products/Products';

function App() {
  const products = [
    {
      id: 'p1',
      name: 'Toilet Paper',
      price: 94.12,
    },
    { id: 'p2', name: 'TV', price: 799.49},
    {
      id: 'p3',
      name: 'laptop',
      price: 294.67
    },
    {
      id: 'p4',
      name: 'Desk',
      price: 450,
    },
  ];
  return (
    <div >
     <Header />
     <Products products={products}/>
    </div>
  );
}

export default App;
