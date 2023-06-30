import { MdDone } from "react-icons/md";


const CheckTodo = ({addTodoList, setAddTodoList, id}) => {
 
    const onClickHandler = (e) => {
        setAddTodoList(addTodoList.map((todos) => {return todos.id === id ? {...todos,isDone : todos.isDone ? false : true }: todos}))
    }

    return (
    <MdDone onClick={onClickHandler} size={30}/>
  )
}
export default CheckTodo