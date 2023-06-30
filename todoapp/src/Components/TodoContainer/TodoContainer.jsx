import AddTodo from "../AddTodo/AddTodo"
import ShowTodo from "../ShowTodo/ShowTodo"
import "./TodoContainer.css"
import { useState } from "react"

const TodoContainer = () => {
  const [addTodo, setAddTodo] = useState("");
  const [addTodoList, setAddTodoList] = useState([]);
  const [editedText,setEditedText] = useState("")

  return (
    <>
        <div className="main-container">
            <AddTodo setAddTodo={setAddTodo} setAddTodoList={setAddTodoList} addTodo={addTodo} addTodoList={addTodoList}/>
            <ShowTodo addTodoList={addTodoList} setAddTodoList={setAddTodoList} setEditedText={setEditedText} editedText={editedText}/>
        </div>
    </>
  )
}
export default TodoContainer