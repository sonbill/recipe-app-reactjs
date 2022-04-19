import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`);
      const data = await api.json();

      localStorage.setItem('popular', JSON.stringify(data));
      setPopular(data.recipes);
    }



  };

  return (
    <div>
      <div className="w-full my-3">
        <h3 className="font-bold">Popular picks</h3>
        <Splide options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '5rem',
        }}>
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <div className="overflow-hidden rounded min-h-7 relative w-full">
                  <p className="absolute z-5 left-[50%] bottom-[0%] translate-x-[50%] translate-y-[0%] text-white w-full text-center h-[40%] flex justify-center items-center">{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} className="rounded absolute left-0 w-full h-full object-cover" />
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  )
}

export default Popular