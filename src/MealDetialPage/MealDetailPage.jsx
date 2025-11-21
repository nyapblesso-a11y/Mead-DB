import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'
import { getMealDetailById } from '../services'
import './MealDetailPage.css'
import React from 'react'


function MealDetailPage() {
    const { id } = useParams()
    const { data, isLoading, error} = useQuery ({
        queryKey: ["meal", id],
        queryFn: () => getMealDetailById(id),
    })

    if(isLoading) {
        return <span>Loading</span>
    }

    if(error) {
        return <span>EROR: {error.message}</span>
    }
  return (
    <>
    <div>
        <h1 className='title'>Details of {data.meals[0].strMeal} and method of preparation</h1>
    </div>

    <div className='detials'>
     <div className='image-title'>  
        <h1>{data.meals[0].strMeal}</h1> 
        <img src={data.meals[0].strMealThumb}/>
        </div>
       <div className='descriptions'>
         <p>{data.meals[0].strInstructions}</p> 
        <a href="https://www.youtube.com/watch?v=4aZr5hZXP_s">tuitorial</a>
       </div>
    </div>
    </>
  )
}

export default MealDetailPage