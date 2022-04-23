import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  }
  useEffect(() => {
    getSearched(params.search);
  }, [params.search])
  return (
    <div className="grid grid-cols-4 gap-10">
      {searchedRecipes.map((item) => {
        return (
          <div key={item.id} className="space-y-3">
            <Link to={'/recipe/' + item.id}>
              <img src={item.image} alt={item.image} className="rounded object-cover" />
              <h4 className="font-bold">{item.title}</h4>
            </Link>
          </div>
        );
      })}
    </div>
  )
}

export default Searched