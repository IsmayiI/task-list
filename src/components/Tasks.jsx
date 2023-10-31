import TaskContent from "./TaskContent"
import TasksAnalytics from "./TasksAnalytics"

const Tasks = ({ tasks, changeExecuted, deleteAllTasks, deleteTask }) => {
   return (
      <div className="tasks">
         <TaskContent
            deleteTask={deleteTask}
            changeExecuted={changeExecuted}
            tasks={tasks} />
         <TasksAnalytics
            deleteAllTasks={deleteAllTasks}
            tasks={tasks} />
      </div>
   )
}

export default Tasks