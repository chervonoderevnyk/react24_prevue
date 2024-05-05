import React, {FC, useEffect, useState} from 'react';

import './App.css';
import IProduct from "./model/IProduct";
import ProductComponent from "./components/product/ProductComponent";

const App: FC = () => {

    const [products, setProducts] = useState<IProduct[]>([])
    
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(value => value.json())
            .then(value => {
                const productsArray = value.products;
                setProducts(productsArray);
            });

        return () => {
            console.log('end');
        }
    }, []);

  return (
      <>
          {
              products.map(
                  ({ title, id, description, price},
                   index) =>
                  <ProductComponent
                      key={index}
                      id={id}
                      title={title}
                      description={description}
                      price={price}
                  />)
          }
      </>
  );
}

export default App;
