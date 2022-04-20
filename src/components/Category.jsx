import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';

import { NavLink } from 'react-router-dom'

import React from 'react'

function Category() {
  return (
    <div className="flex items-center justify-center">
      <NavLink to={'/cuisine/italian'}>
        <FaPizzaSlice />
        <p>Italian</p>
      </NavLink>
      <NavLink to={'/cuisine/italian'}>
        <FaHamburger />
        <p>American</p>
      </NavLink>
      <NavLink to={'/cuisine/italian'}>
        <GiNoodles />
        <p>Japanese</p>
      </NavLink>
      <NavLink to={'/cuisine/italian'}>
        <GiChopsticks />
        <p>Vietnamese</p>
      </NavLink>
    </div>
  )
}

export default Category