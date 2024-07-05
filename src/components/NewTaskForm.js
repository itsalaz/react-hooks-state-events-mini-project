import {useState} from "react";


function NewTaskForm({categories, onTaskFormSubmit}) {
  const [text, setText] = useState("")
  const [category, setCategory] = useState(categories[0])


  function handleSubmit(event) {
    event.preventDefault()
    const newTask = {
      text: text,
      category: category
    }
    onTaskFormSubmit(newTask)
    setText("")
    setCategory(categories[0])
  }

  function handleChange(e) {
    setText(e.target.value)
  }

  function handleCategoryChange(e) {
    setCategory(e.target.value)
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
        type="text" 
        placeholder = "New Task"
        value= {text}
        onChange= {handleChange}
        />
      </label>
      <label>
        Category
        <select 
        name="category" 
        value= {category}
        onChange={handleCategoryChange}>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task"/>
    </form>
  );
}

export default NewTaskForm;
