import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';



function Veggie() {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const check = localStorage.getItem('veggie');
    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=vegetarian`);
      const data = await api.json();

      localStorage.setItem('veggie', JSON.stringify(data.recipes));
      console.log(data.recipes)
      setVeggie(data.recipes)
    }
  }
  return (
    <div>
      <div className="my-3 space-y-5">
        <h3 className="font-bold text-xl">Our vegetarian picks</h3>
        <Splide options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '5rem',
        }}>
          {veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <div className="overflow-hidden rounded min-h-7 relative">
                  <Link to={"/recipe/" + recipe.id}>
                    <div className="absolute bg-gradient-to-t from-[#1B1A17] w-full h-full"></div>
                    <img src={recipe.image} alt={recipe.title} className="w-full h-full rounded object-cover" />
                    <p className="z-5 absolute left-[50%] bottom-0 translate-x-[-50%] translate-y-0 text-white w-full text-center font-bold h-[40%] flex justify-center items-center">{recipe.title}</p>
                  </Link>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  )
}
export default Veggie