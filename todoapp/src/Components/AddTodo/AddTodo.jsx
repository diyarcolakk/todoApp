import "./AddTodo.css";
const AddTodo = ({setAddTodo,setAddTodoList,addTodo}) => {

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if(addTodo !== ""){
        setAddTodoList((pre) => [...pre,{todo:addTodo,id:new Date().getTime()}])
        setAddTodo("")
    }
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="addTodo-container">
        <input value={addTodo} type="text" className="add-container"  onChange={(e) => setAddTodo(e.target.value)} />
        <button className="btn" type="submit">
          Add Todo
        </button>
      </div>
    </form>
  );
};
export default AddTodo;
