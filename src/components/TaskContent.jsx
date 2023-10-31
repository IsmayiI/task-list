import TaskItem from "./TaskItem"
import notTaskImg from '../img/empty.03134fbadb47c1eea438.png'

const TaskContent = ({ tasks, changeExecuted, deleteTask }) => {

   if (!tasks.length) return (
      <div className="not-tasks">
         <img className="not-tasks__img" src={notTaskImg} alt="#" />
         <h2 className="not-tasks__title">В настоящее время нет задач в списке
         </h2>
      </div>
   )

   return (
      <ul>
         {tasks.map(({ text, executed, id }) => (
            <li key={text + id}>
               <TaskItem
                  id={id}
                  deleteTask={deleteTask}
                  changeExecuted={changeExecuted}
                  text={text}
                  executed={executed} />
            </li>
         ))}
      </ul>
   )
}

export default TaskContent