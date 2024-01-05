import React from "react"
import "./TaskCard.css";
interface User {
  title:string,
  dueDate:string,
  completedAtDate:string,
  assigneeName:string,
  completed:boolean

}

const TaskCard :React.FC<User>= ({title,dueDate,completedAtDate,assigneeName,completed}) => {
  console.log()
  if (completed)
    return (
      <div className="TaskItem  border-black border rounded-md p-4">
        <h1 className="text-xl font-bold">{title}</h1>
        <p>Completed on: {completedAtDate}</p>
        <p>Assignee: {assigneeName}</p>
      </div>

    )
  else
    return (


      <div className="TaskItem  border-black border rounded-md p-4">
        <h1 className="text-xl font-bold">{title}</h1>
        <p>Due on: {dueDate}</p>
        <p>Assignee: {assigneeName}</p>
      </div>
    )
}
export default TaskCard



