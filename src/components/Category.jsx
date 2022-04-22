import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';

import { NavLink } from 'react-router-dom'

import React from 'react'

function Category() {
  return (
    <div className="flex items-center justify-center text-md space-x-5 my-5">
      <NavLink to={'/cuisine/italian'} activeclassname="active">
        <div className="flex flex-col items-center justify-center space-y-2 p-5">
          <FaPizzaSlice className="fa-icons" />
          <p>Italian</p>
        </div>
      </NavLink>
      <NavLink to={'/cuisine/american'} activeclassname="active">
        <div className="flex flex-col items-center justify-center space-y-2 p-5">
          <FaHamburger className="fa-icons" />
          <p>American</p>
        </div>
      </NavLink>
      <NavLink to={'/cuisine/japanese'} activeclassname="active">
        <div className="flex flex-col items-center justify-center space-y-2 p-5">
          <GiNoodles className="fa-icons" />
          <p>Japanese</p>
        </div>
      </NavLink>
      <NavLink to={'/cuisine/vietnamese'} activeclassname="active">
        <div className="flex flex-col items-center justify-center space-y-2 p-5">
          <GiChopsticks className="fa-icons" />
          <p>Vietnamese</p>
        </div>
      </NavLink>
    </div>
  )
}

export default Category