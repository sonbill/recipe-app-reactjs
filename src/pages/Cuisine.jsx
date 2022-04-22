import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom'

function Cuisine() {
  const [cuisine, setCuisine] = useState([])
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
    const recipes = await data.json();
    setCuisine(recipes.result);
    console.log(recipes.result);
  }
  useEffect(() => {
    getCuisine(params.type);
    console.log(params.type)
  }, [params.type])

  return (
    <div className="grid grid-cols-4 gap-10">
      {cuisine.map((item) => {
        return (
          <div key={item.id} className="space-y-3">
            <img src={item.image} alt={item.image} className="rounded object-cover" />
            <h4 className="font-bold">{item.title}</h4>
          </div>
        );
      })}
    </div>
  )
}

export default Cuisine