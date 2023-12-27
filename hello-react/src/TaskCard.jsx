import "./Taskcard.css";
const Taskcard = (p) => {
  console.log(p)
  if (p.completed)
    return (
      <div className="TaskItem  bg-gray-200 rounded-md p-4">
        <h1 className="text-xl font-bold">{p.title}</h1>
        <p>Completed on: {p.completedAtDate}</p>
        <p>Assignee: {p.assignname}</p>
      </div>

    )
  else
    return (


      <div className="TaskItem  bg-gray-200 rounded-md p-4">
        <h1 className="text-xl font-bold">{p.title}</h1>
        <p>Due on: {p.dueDate}</p>
        <p>Assigne: {p.assignname}</p>
      </div>
    )
}
export default Taskcard



