import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const Meal = ({ meal }) => {
    const { strMeal, strMealThumb, idMeal } = meal;

    const [zoom, setZoom] = useState(false)
    return (
        <div onClick={() => setZoom(!zoom)} className='min-w-min mx-5 md:mx-auto md:w-72'>
            <div>
                <img className={`min-w-full md:w-72 h-48 duration-300 md:hover:scale-125 ${zoom === true ? 'hover:scale-125' : 'hover:scale-100'}`} src={strMealThumb} alt="meal-img" />
            </div>
            <div className='flex justify-between items-center py-2'>
                <h2 className='text-xl font-bold text-pink-500'>{strMeal}</h2>
                <Link to={`/mealDetails/${idMeal}`} className='text-xl font-bold text-pink-500'>Details</Link>
            </div>
        </div>
    );
};

export default Meal;