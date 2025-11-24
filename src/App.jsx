import "./Components/SearchBar/Search.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Category from "./CategoryPage/Category";
import Searbar from "./Components/SearchBar/Searbar";
import SearchItemsList from "./Components/SearchItemsList";
import MealDetailPage from "./MealDetialPage/MealDetailPage";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Searbar />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/meals/:id" element={<MealDetailPage/>} />
        <Route path="/search/:name" element= {<SearchItemsList/> } />
      </Routes>
    </Router>
  );
}

export default App;
