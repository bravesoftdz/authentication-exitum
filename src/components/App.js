import React from 'react';
import Header from './Header';

// el componente app contiene el componente header

export default (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  )
}
