import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';

import { NavLink } from 'react-router-dom'

import React from 'react'

function Category() {
  return (
    <div className="flex items-center justify-center space-x-5 my-5">
      <NavLink to={'/cuisine/italian'} activeClassName="active">
        <div className="flex flex-col items-center justify-center p-5">
          <FaPizzaSlice />
          <p>Italian</p>
        </div>
      </NavLink>
      <NavLink to={'/cuisine/american'} activeClassName="active">
        <div className="flex flex-col items-center justify-center p-5">
          <FaHamburger />
          <p>American</p>
        </div>
      </NavLink>
      <NavLink to={'/cuisine/japanese'} activeClassName="active">
        <div className="flex flex-col items-center justify-center p-5">
          <GiNoodles />
          <p>Japanese</p>
        </div>
      </NavLink>
      <NavLink to={'/cuisine/vietnamese'} activeClassName="active">
        <div className="flex flex-col items-center justify-center p-5">
          <GiChopsticks />
          <p>Vietnamese</p>
        </div>
      </NavLink>
    </div>
  )
}

export default Category