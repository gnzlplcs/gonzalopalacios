import React from 'react';
import { Link } from "react-router-dom"


export const Header = ({ title }) => {
  return (
    <header>
      <Link to='/'>
        <h1>{title}</h1>
      </Link>
    </header>
  )
}
