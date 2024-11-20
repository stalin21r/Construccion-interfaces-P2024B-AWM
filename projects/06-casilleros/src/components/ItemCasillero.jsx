import React from 'react';
import casillero from '../assets/locker.png';

export function ItemCasillero({ numero, isArrended, onClick }) {
  const className = `casillero ${isArrended ? 'red' : 'green'}`;

  return (
    <button className={className} onClick={onClick}>
      <img src={casillero} alt="casillero" />
      <span>{numero}</span>
    </button>
  );
}
