import { useState } from "react"

const AddTask = ({ onAddTask }) => {
   const [id, setId] = useState(1)
   const [text, setText] = useState('')

   const changeTextHandler = (e) => {
      setText(e.target.value)
   }

   const submitHandler = (e) => {
      e.preventDefault()
      const newTask = {
         id,
         text,
         executed: false
      }

      onAddTask(newTask)
      setText('')
      setId(prev => ++prev)
   }

   return (
      <div className="task__add-task">
         <form onSubmit={submitHandler} className="add-task__form">
            <input onChange={changeTextHandler} className="add-task__text" value={text} type="text" placeholder="добавить задачу" />
            <button className="add-task__btn" type="submit"><span>+</span></button>
         </form>
      </div>
   )
}

export default AddTask