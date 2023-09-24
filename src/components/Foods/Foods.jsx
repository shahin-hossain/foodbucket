import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from '../../Meal/Meal';

const Foods = () => {
    const { meals } = useLoaderData();
    // console.log(meals)
    return (
        <div>
            <h2 className='text-3xl text-pink-500 font-bold text-center mt-14 mb-14'>Find Your Favorite Meal</h2>
            <div className=' max-w-7xl mx-auto grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {meals.map(meal => <Meal
                    key={meal.idMeal}
                    meal={meal}
                ></Meal>)}
            </div>
        </div>
    );
};

export default Foods;