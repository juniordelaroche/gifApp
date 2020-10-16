import React, { useState } from 'react'
import ProTypes from 'prop-types'

export default function AddCategory({ setCategories }) {

  const [inputValue, setInputValue] = useState('');

  // Para actualizar el valor del input
  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  }

  // Para controlar el darle enter al input
  const handleSubmit = (e) => {
    // Se evita el refresh
    e.preventDefault();

    // Se valida que no se mande un valor vacio
    if(inputValue.trim().length > 2) {
      setCategories(cats => [inputValue, ...cats]);
      setInputValue('');
    }

  }

  return (
    <form onSubmit={ handleSubmit }>
      <input 
        type="text"
        value={ inputValue }
        onChange={ handleInputValue }
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories : ProTypes.func.isRequired
}
