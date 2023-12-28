import "./Taskcard.css";
const TaskCard = (p) => {
  console.log(p)
  if (p.complete=="yes")
    return (
      <div className="TaskItem  border-black border rounded-md p-4">
        <h1 className="text-xl font-bold">{p.title}</h1>
        <p>Completed on: {p.completedAtDate}</p>
        <p>Assignee: {p.assigneeName}</p>
      </div>

    )
  else if(p.complete=="no")
    return (


      <div className="TaskItem  border-black border rounded-md p-4">
        <h1 className="text-xl font-bold">{p.title}</h1>
        <p>Due on: {p.dueDate}</p>
        <p>Assignee: {p.assigneeName}</p>
      </div>
    )
}
export default TaskCard



