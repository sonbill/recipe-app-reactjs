import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  }

  return (
    <div>
      <form onSubmit={submitHandler} className="flex items-center px-10 space-x-3">
        <input type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="border-1 border-black bg-black px-3 py-1 text-white rounded w-full"
        />
        <FaSearch />
      </form>
    </div>
  )
}

export default Search