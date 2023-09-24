import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';


const MealDetails = () => {
    const navigate = useNavigate();
    const mealItems = useLoaderData()
    const { idMeal, strMeal, strMealThumb, strInstructions } = mealItems.meals[0];
    return (
        <div>
            <div className='max-w-5xl p-5 m-5 mx-auto border-2 rounded-lg'>
                <h1 className='text-3xl text-center mb-5 text-pink-600'>Meal Details</h1>
                <div className='flex justify-center'>
                    <img className='w-96' src={strMealThumb} alt="img" />
                </div>
                <div className='mt-5'>
                    <h1 className='text-3xl font-semibold'>Id: {idMeal}</h1>
                    <h2 className='text-2xl font-semibold'>Meal Name: {strMeal}</h2>
                    <p><span className='text-1xl font-semibold'>Description:</span>  {strInstructions}</p>
                </div>
                <div className='flex justify-end mt-5'>
                    <Link onClick={() => navigate(-1)}><button className='border-2 border-pink-600 py-2 px-7 rounded-lg '>Back to Foods</button></Link>
                </div>
            </div>
        </div>
    );
};

export default MealDetails;