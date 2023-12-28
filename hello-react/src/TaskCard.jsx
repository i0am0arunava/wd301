import "./TaskCard.css";
const TaskCard = (props) => {
  console.log(props)
  if (props.completed)
    return (
      <div className="TaskItem  border-black border rounded-md p-4">
        <h1 className="text-xl font-bold">{props.title}</h1>
        <p>Completed on: {props.completedAtDate}</p>
        <p>Assignee: {props.assigneeName}</p>
      </div>

    )
  else
    return (


      <div className="TaskItem  border-black border rounded-md p-4">
        <h1 className="text-xl font-bold">{props.title}</h1>
        <p>Due on: {props.dueDate}</p>
        <p>Assignee: {props.assigneeName}</p>
      </div>
    )
}
export default TaskCard



