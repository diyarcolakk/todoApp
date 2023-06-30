import AddTodo from "../AddTodo/AddTodo"
import ShowTodo from "../ShowTodo/ShowTodo"
import "./TodoContainer.css"
import { useState } from "react"

const TodoContainer = () => {
  const [addTodo, setAddTodo] = useState("");
  const [addTodoList, setAddTodoList] = useState([]);
  const [editTodo,setEditTodo] = useState(true)
  return (
    <>
        <div className="main-container">
            <AddTodo setAddTodo={setAddTodo} setAddTodoList={setAddTodoList} addTodo={addTodo} addTodoList={addTodoList}/>
            <ShowTodo addTodoList={addTodoList}  setAddTodoList={setAddTodoList} editTodo={editTodo} setEditTodo={setEditTodo}/>
        </div>
    </>
  )
}
export default TodoContainer