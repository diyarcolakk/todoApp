import EditTodo from "../EditTodo/EditTodo";
import EditedTodo from "../EditTodo/EditedTodo";
import RemoveTodo from "../RemoveTodo/RemoveTodo";
import "./ShowTodo.css";

const ShowTodo = ({
  addTodoList,
  setAddTodoList,
  setEditedText,
  editedText,
}) => {

  return (
    <div className="showTodo-container">
      {addTodoList.map((perTodo) => {
        const { todo, id ,isEdited} = perTodo;
        return (
          <div key={id} className="design-container">
            {isEdited ? (
             <EditedTodo id={id} addTodoList={addTodoList} setEditedText={setEditedText} setAddTodoList={setAddTodoList} editedText={editedText}/>
            ) : (
              <label className="label-container">{todo}</label>
            )}
            <RemoveTodo
              addTodoList={addTodoList}
              setAddTodoList={setAddTodoList}
              perTodo={perTodo}
            />
            <EditTodo id={id} addTodoList={addTodoList} setAddTodoList={setAddTodoList}/>
          </div>
        );
      })}
    </div>
  );
};
export default ShowTodo;
