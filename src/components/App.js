import {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  
  const [tasks, setTasks] = useState(TASKS)
  const [filterBy, setFilterBy] = useState("All")

  function handleDeleteTask(text){
    setTasks(tasks.filter(task => task.text !== text))
  }

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask])
  }

  const filteredTasks = tasks.filter(task => 
  filterBy === "All" ? true : task.category === filterBy
  )

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} setFilterBy={setFilterBy} filterBy={filterBy}/>
      <NewTaskForm categories={CATEGORIES.filter(category => category !== "All")} onTaskFormSubmit={handleAddTask}/>
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
