import { MdDelete } from "react-icons/md";


const RemoveTodo = ({perTodo,setAddTodoList,addTodoList}) => {
  const removeHandler = () => {
    const newTodos = addTodoList.filter(todo => todo.id !== perTodo.id)
    setAddTodoList(newTodos);
  }

  return (
    <div>
      <MdDelete onClick={removeHandler}/>
    </div>
  )
}
export default RemoveTodo