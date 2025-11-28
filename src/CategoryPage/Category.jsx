import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getMealCategory } from "../Services/services";
import { useNavigate, useParams } from "react-router-dom";
import "../Components/SearchBar/Search.css";
import { useState } from "react";
const Category = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["category", category],
    queryFn: () => getMealCategory(category),
  });

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>ERROR: {error.message}</span>;

  console.log("our data", data?.meals);

  if (!data?.meals) {
    return <p>No meals found for this category.</p>;
  }

  return (
    <>
      <div className="">
        <div className="header">
          <h1>Meal(s) in the {category} category</h1>
        </div>
        <div className="searchbox">
          <form onSubmit={submitForm} className="search-bar">
            <input
              type="text"
              className="search-bar"
              value={search}
              placeholder="search for the specific meal type"
              onChange={(e) => setSearch(e.target.value)}
              required
            />

            <button className="search-btn" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
      <ul className="card-sec">
        {data.meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="card"
            onClick={() => navigate(`/meals/${meal.idMeal}`)}
          >
            <h1 className="meal-type">{meal.strMeal}</h1>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="meal-img"
            />
          </div>
        ))}
      </ul>
    </>
  );
};

export default Category;
