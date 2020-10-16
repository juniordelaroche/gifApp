import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball']);

  // const handleAdd = () => {
  //   setCategories(cats => [...cats, 'Naruto']);
  // }

  return (
    <> 
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={ setCategories }/>
      <hr/>
      <ol>
        {
          // Aca se espera que el key sea unico siempre
          categories.map( category =>
           <GifGrid 
            key={ category }
            category={ category }
           />
          )
        }
      </ol>
    </>
  );
}
export default GifExpertApp;