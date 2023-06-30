import "./Edit.css"

const EditedTodo = ({ addTodoList, setAddTodoList , id ,editedText,setEditedText}) => {

    const getEditTodo = (e) => {
        setEditedText(e.target.value);
      };
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const newAddTodolist = addTodoList.map((todos) =>  { return todos.id === id ? {...todos,todo:editedText,isEdited:false} : todos})
        setAddTodoList(newAddTodolist)
    }
  return (
    <form className="form-container" onSubmit={onSubmitHandler}>
      <input autoFocus placeholder="Please enter edit text" type="text" className="edit-container" onChange={getEditTodo} />
    </form>
  );
};

export default EditedTodo;
