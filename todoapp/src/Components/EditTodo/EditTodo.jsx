import { MdModeEdit } from "react-icons/md";
const EditTodo = ({ addTodoList, setAddTodoList, id }) => {
  const onClickHandler = (e) => {
    console.log(addTodoList);

    const newTodo = addTodoList.map((todos) => {
      return todos.id === id
        ? { ...todos,isEdited: todos.isEdited ? false : true }
        : todos;
    });
      setAddTodoList(newTodo)
  };

  return (
    <div>
      <MdModeEdit onClick={onClickHandler} />
    </div>
  );
};
export default EditTodo;
