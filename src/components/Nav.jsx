import React from 'react'
import { FaCookieBite } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <Link to={'/'}>
        <div className="flex items-center space-x-3 text-3xl">
          <p className="font-bold font-serif">Son Cook</p>
          <FaCookieBite />
        </div>
      </Link>
    </div>
  )
}

export default Nav