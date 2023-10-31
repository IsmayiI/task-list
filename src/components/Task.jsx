import { useState } from "react"
import AddTask from "./AddTask"
import Tasks from "./Tasks"


const Task = () => {
   const [tasks, setTasks] = useState([])

   const onAddTask = (task) => {
      setTasks(prevTasks => [...prevTasks, task])
   }

   const changeExecuted = (id, exe) => {
      setTasks(prevTasks => prevTasks.map(task => {
         if (task.id === id) return { ...task, executed: exe }
         return task
      }))
   }

   const deleteTask = (id) => {
      setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
   }

   const deleteAllTasks = () => {
      setTasks([])
   }

   console.log(tasks);

   return (
      <div className="container">
         <div className="task">
            <h1 className="task__title">Todo</h1>
            <AddTask
               onAddTask={onAddTask} />
            <Tasks
               deleteTask={deleteTask}
               deleteAllTasks={deleteAllTasks}
               changeExecuted={changeExecuted}
               tasks={tasks} />
         </div>
      </div>
   )
}

export default Task