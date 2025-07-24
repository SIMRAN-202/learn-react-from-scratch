import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Meals = () => {
    const [meals, setMeals] = useState([])

    useEffect(()=>{
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then(res => {setMeals(res.data.meals)})
        .catch(err => console.log(err))
    },[])


  return (
    <div className="p-6 bg-blue-50">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">Seafood Meals</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {meals.map(({idMeal, strMeal, strMealThumb }) => (
                
                <li key={idMeal}   className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
                    <div className='flex justify-between p-2 bg-blue-300'>
                    <h3 className="text-lg font-semibold text-center text-gray-800">{strMeal}</h3>
                    <p>{idMeal}</p>
                    </div>
                    <img src={strMealThumb} alt="" width={150} className="w-full h-48 object-cover" />
                </li>
            
            ))}
        </ul>
    </div>
  )
}

export default Meals