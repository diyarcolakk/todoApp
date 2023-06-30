import { MdModeEdit } from "react-icons/md";
const EditTodo = ({setEditTodo}) => {
  
  const editClick = () => {
    setEditTodo(pre => !pre)
  }
  
  return (
    <div>
      <MdModeEdit onClick={editClick}/>
    </div>
  )
}
export default EditTodo