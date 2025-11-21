import React, { useState } from "react";
import Categories from "../CategoryLIstingPage/Categories";
import { useNavigate } from "react-router";

const Searbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };

  return (
    <>
      <div className="main">
        <div className="heading">
          <h1>We provide you with the best meals</h1>
        </div>
        <div className="searchbox">
          <form onSubmit={submitForm} className="search-bar">
            <input
              type="text"
              className="search-bar"
              value={search}
              placeholder="search your meal"
              onChange={(e) => setSearch(e.target.value)}
              required
            />

            <button className="search-btn" type="submit">
              Search 
            </button>
          </form>
        </div>
        <Categories />
      </div>
    </>
  );
};

export default Searbar;
