import EditTodo from "../EditTodo/EditTodo";
import RemoveTodo from "../RemoveTodo/RemoveTodo";
import "./ShowTodo.css";

const ShowTodo = ({ addTodoList ,setAddTodoList , editTodo ,setEditTodo}) => {

  console.log(editTodo);

  return (
    <div className="showTodo-container">
      {addTodoList.map((perTodo) => {
        const {todo,id} = perTodo
        return (
          <div key={id}className="design-container">
            <label htmlFor=""></label>
            <RemoveTodo  addTodoList={addTodoList} setAddTodoList = {setAddTodoList} perTodo={perTodo} />
            <EditTodo editTodo={editTodo} setEditTodo={setEditTodo}  />
          </div>
        );
      })}
    </div>
  );
};
export default ShowTodo;
