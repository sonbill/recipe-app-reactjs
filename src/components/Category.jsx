import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';

import { NavLink } from 'react-router-dom'

import React from 'react'

function Category() {
  return (
    <div className="flex items-center justify-center space-x-5 my-5">
      <NavLink to={'/cuisine/italian'} activeclassname="active">
        <div className="flex flex-col items-center justify-center p-5">
          <FaPizzaSlice />
          <p>Italian</p>
        </div>
      </NavLink>
      <NavLink to={'/cuisine/american'} activeclassname="active">
        <div className="flex flex-col items-center justify-center p-5">
          <FaHamburger />
          <p>American</p>
        </div>
      </NavLink>
      <NavLink to={'/cuisine/japanese'} activeclassname="active">
        <div className="flex flex-col items-center justify-center p-5">
          <GiNoodles />
          <p>Japanese</p>
        </div>
      </NavLink>
      <NavLink to={'/cuisine/vietnamese'} activeclassname="active">
        <div className="flex flex-col items-center justify-center p-5">
          <GiChopsticks />
          <p>Vietnamese</p>
        </div>
      </NavLink>
    </div>
  )
}

export default Category