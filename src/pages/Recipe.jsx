import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instruction")

  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData)
  }

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-5">
          <h1 className="font-bold text-2xl">{details.title}</h1>
          <img src={details.image} alt={details.title} className="w-full object-cover" />
        </div>
        <div className="space-y-5">
          <div className="space-x-5 text-center md:text-left">
            <button
              className={activeTab === 'instruction' ? 'activeTab' : 'notActiveTab'}
              onClick={() => setActiveTab("instruction")}
            >
              Instruction
            </button>
            <button
              className={activeTab === 'ingredient' ? 'activeTab' : 'notActiveTab'}
              onClick={() => setActiveTab("ingredient")}
            >
              Ingredient
            </button>
          </div>
          {activeTab === 'instruction' && (
            <div>
              <p dangerouslySetInnerHTML={{ __html: details.summary }} className="font-bold text-lg"></p>
              <p dangerouslySetInnerHTML={{ __html: details.instructions }} className="font-medium"></p>
            </div>
          )}
          {activeTab === 'ingredient' && (
            <ul className="px-5">
              {details.extendedIngredients?.map((ingredient) => (
                <li key={ingredient.id} className="list-disc">{ingredient.original}</li>
              ))}
            </ul>
          )}

        </div>
      </div>
    </div >
  )
}

export default Recipe