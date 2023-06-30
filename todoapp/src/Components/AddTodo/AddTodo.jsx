import "./AddTodo.css";
const AddTodo = ({setAddTodo,setAddTodoList,addTodo}) => {

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if(addTodo !== ""){
        setAddTodoList((pre) => [...pre,{todo:addTodo,isEdited:false,isDone:false,id:new Date().getTime()}])
        setAddTodo("")
    }
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <h1 className="todo-app-Header">TODO APP</h1>
      <div className="addTodo-container">
        <input value={addTodo} type="text" className="add-container" placeholder="Please Add Todo" onChange={(e) => setAddTodo(e.target.value)} />
        <button className="btn" type="submit">
          Add Todo
        </button>
      </div>
    </form>
  );
};
export default AddTodo;
