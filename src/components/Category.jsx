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
      <NavLink to={'/cuisine/american'}>
        <FaHamburger />
        <p>American</p>
      </NavLink>
      <NavLink to={'/cuisine/japanese'}>
        <GiNoodles />
        <p>Japanese</p>
      </NavLink>
      <NavLink to={'/cuisine/vietnamese'}>
        <GiChopsticks />
        <p>Vietnamese</p>
      </NavLink>
    </div>
  )
}

export default Category