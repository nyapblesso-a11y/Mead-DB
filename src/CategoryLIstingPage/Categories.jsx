import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getMealCategories, searchMealByName } from "../services";
import "./Listing.css";
import { useNavigate } from "react-router";

const Categories = () => {
  const navigate = useNavigate()
  const { data, error, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getMealCategories,
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) return <span>Oops!</span>;

  return    (
    <>
      <div>
        <h1 className="header">Meal categories</h1>
      </div>
      <ul className="card-sec">
        {data.categories.map((category) => (
          <div key={category.idCategory} className="card" onClick={()=> navigate(`/category/${category.strCategory}`)}>
            <h1 className="meal-type">{category.strCategory}</h1>
            <img src={category.strCategoryThumb} alt="" className="meal-img" />
          </div>
        ))}
      </ul>
    </>
  );
};

export default Categories;
