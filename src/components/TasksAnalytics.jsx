
const TasksAnalytics = ({ tasks, deleteAllTasks }) => {
   const executedTasks = tasks.filter(task => task.executed)

   return (
      <div className="tasks__analytics">
         <div className="tasks__analytics-box">
            <h4 className="tasks__analytics__item">Всего: {tasks.length} заданий</h4>
            <h4 className="tasks__analytics__item">Выполнено: {executedTasks.length} Заданий</h4>
         </div>
         <button onClick={deleteAllTasks} className="tasks__analytics-btn"><span className="tasks__analytics__item">Удалить всё</span></button>
      </div>
   )
}

export default TasksAnalytics