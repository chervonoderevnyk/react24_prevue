import React, {FC} from 'react';
import './App.css';

fetch('https://dummyjson.com/products')
    .then(value => value.json())
    .then(value => {
      console.log(value);
    })

const App: FC = () => {
  return (

      <>hello</>

  );
}

export default App;
