import "./Taskcard.css";
const TaskCard = (p) => {
  console.log(p)
  if (p.completed)
    return (
      <div className="TaskItem  border-black border rounded-md p-4">
        <h1 className="text-xl font-bold">{p.title}</h1>
        <p>Completed on: {p.completedAtDate}</p>
        <p>Assignee: {p.assigneeName}</p>
      </div>

    )
  else
    return (


      <div className="TaskItem  border-black border rounded-md p-4">
        <h1 className="text-xl font-bold">{p.title}</h1>
        <p>Due on: {p.dueDate}</p>
        <p>Assignee: {p.assigneeName}</p>
      </div>
    )
}
export default TaskCard



