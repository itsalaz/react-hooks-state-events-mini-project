import react from "react";
import Task from "./Task"
import TaskList from "./TaskList"

function CategoryFilter({categories, setFilterBy, filterBy}) {

  function handleFilterChange(event) {
      setFilterBy(event.target.value)
  }

  return (
    <div className= "categories">
      <h5>Category filters</h5>
      {categories.map(category => (
        <button
          key={category}
          value={category}
          className={filterBy === category ? "selected" : ""}
          onClick={handleFilterChange}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
