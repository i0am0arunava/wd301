import React from "react"
import "./TaskCard.css";
interface User {
  title: string;
  dueDate?: string; 
  completedAtDate?: string;
  assigneeName: string;
 
}

const TaskCard :React.FC<User>= (props) => {
  console.log()
  if (props.completedAtDate)
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



