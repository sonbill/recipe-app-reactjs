import { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem('popular');
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`);
      const data = await api.json();

      localStorage.setItem('popular', JSON.stringify(data.recipes));
      console.log(data.recipes)
      setPopular(data.recipes)
    }
  }
  return (
    <div>
      <div className="my-3">
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
                <div className="rounded min-h-7 relative w-full h-full">
                  <div className="absolute bg-gradient-to-t from-[#1B1A17] w-full h-full"></div>
                  <img src={recipe.image} alt={recipe.title} className="rounded object-cover" />
                  <p className="z-5 absolute left-[50%] bottom-0 translate-x-[-50%] translate-y-0 text-white w-full text-center font-bold h-[40%] flex justify-center items-center">{recipe.title}</p>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
}

export default Popular