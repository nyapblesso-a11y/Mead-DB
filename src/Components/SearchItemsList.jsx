import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate, useParams } from "react-router";
import { searchMealByName } from "../Services/services";
import { useState } from "react";

const SearchItemsList = () => {
  const navigate = useNavigate();
  let { name } = useParams();
  const [search, setSearch] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };
  const { data, isLoading, error } = useQuery({
    queryKey: ["search", name],
    queryFn: () => searchMealByName(name),
  });

  console.log(data);

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>ERROR: {error.message}</span>;

  return (
    <div>
      {data.meals != null ? (
        <>
          <div className="head">
            <h1>Meals {name} in the category</h1>
            <div className="searchbox">
          <form onSubmit={submitForm} className="search-bar">
            <input
              type="text"
              className="search-bar"
              value={search}
              placeholder="add more detail to ge the meal"
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
                <span>
                  <h6>click card</h6>
                </span>
              </div>
            ))}
          </ul>
        </>
      ) : (
        <h1>MEAL NOT FOUND!</h1>
      )}
    </div>
  );
};

export default SearchItemsList;
