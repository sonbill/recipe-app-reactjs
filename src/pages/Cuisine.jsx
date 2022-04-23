import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom'

function Cuisine() {
  const [cuisine, setCuisine] = useState([])
  let params = useParams();

  const getCuisine = async (name) => {
    // const check = localStorage.getItem('popular');
    // if (check) {
    //   setCuisine(JSON.parse(check));
    // } else {
    //   const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`);
    //   const data = await api.json();

    //   localStorage.setItem('popular', JSON.stringify(data.recipes));
    //   console.log(data.recipes)
    //   setCuisine(data.recipes)
    // }
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
    const recipes = await data.json();
    setCuisine(recipes.results);
  }
  useEffect(() => {
    getCuisine(params.type);
  }, [params.type])

  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisine.map((item) => {
        return (
          <div key={item.id} className="space-y-3">
            <Link to={'/recipe/' + item.id} >
              <img src={item.image} alt={item.image} className="rounded object-cover" />
              <h4 className="font-bold">{item.title}</h4>
            </Link>
          </div>
        );
      })}
    </motion.div>
  )
}

export default Cuisine