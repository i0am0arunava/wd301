

interface TaskItem {
  id:string;
  title: string;
  description: string;
  dueDate: string;
}
interface savedItem{
  tasks:TaskItem [];
}
const deleteTask = (id: string) => {
  const savedItemString = localStorage.getItem("tasks");
  
  if (savedItemString) {
    const savedItem: savedItem = JSON.parse(savedItemString);
    console.log(savedItem.tasks);

   
    const updatedTasks = savedItem.tasks.filter(task => task.id !== id);
    savedItem.tasks = updatedTasks;

  
   localStorage.setItem("tasks", JSON.stringify(savedItem));
   window.location.reload()
  }
};
const Task = (props: TaskItem) => {
  console.log(props)
  return (
    <div className="TaskItem shadow-md border border-slate-100">
        <a href={`/tasks/${props.id || ""}`}>
        <h2 className="text-base font-bold my-1">{props.title}</h2>
          </a>
     
      <p className="text-sm text-slate-500">{props.dueDate}</p>
      <p className="text-sm text-slate-500">Description: {props.description}</p>
      <button
        className="deleteTaskButton "
        onClick={() => deleteTask(props.id)}
      >Delete
      </button>
    </div>
  );
};
export default Task;
