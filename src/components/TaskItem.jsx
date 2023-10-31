import { useState } from "react"
import deleteImg from '../img/fi_trash-2.svg'

const TaskItem = ({ text, id, changeExecuted, deleteTask }) => {
   const [exe, setExe] = useState(true)
   const changeExecutedHandler = () => {
      setExe(prev => !prev)
      console.log(exe);
      changeExecuted(id, exe)
   }



   return (
      <div className="task-item">
         <label className="task-item__label">
            <input onClick={changeExecutedHandler} className="task-item__checkbox" type="checkbox" />
            <span className="task-item__custom-checkbox"></span>
            {text}
         </label>
         <a href="#" onClick={() => deleteTask(id)} className="task-item__btn" ><img src={deleteImg} alt="#" /></a>
      </div>
   )
}

export default TaskItem