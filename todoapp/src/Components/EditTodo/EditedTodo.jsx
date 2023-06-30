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
    <form onSubmit={onSubmitHandler}>
      <input type="text" onChange={getEditTodo} />
    </form>
  );
};
export default EditedTodo;
