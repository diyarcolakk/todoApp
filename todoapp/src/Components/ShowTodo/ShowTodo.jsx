import CheckTodo from "../CheckTodo/CheckTodo";
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
    <div className="showTodo-Container">
      {addTodoList.map((perTodo) => {
        const { todo, id ,isEdited,isDone} = perTodo;
        return (
          <div key={id} className="design-container">
            {isEdited ? (
             <EditedTodo id={id} addTodoList={addTodoList} setEditedText={setEditedText} setAddTodoList={setAddTodoList} editedText={editedText}/>
            ) : (
              <label  className="label-container" style={{textDecoration:isDone && "line-through"  }}>{todo}</label  >
            )}
            <RemoveTodo
              addTodoList={addTodoList}
              setAddTodoList={setAddTodoList}
              perTodo={perTodo}
            />
            <EditTodo id={id} addTodoList={addTodoList} setAddTodoList={setAddTodoList}/>
            <CheckTodo id={id} addTodoList={addTodoList} setAddTodoList={setAddTodoList}/>
          </div>
        );
      })}
    </div>
  );
};
export default ShowTodo;
