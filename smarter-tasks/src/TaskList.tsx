import './TaskCard.css'
import React from "react"
import Task from "./Task"
interface Props {
    tasks:TaskItem[]
}


interface State {
    tasks: TaskItem[];
}
class TaskList extends React.Component<Props, State> {
  
    render() {
        return (
            <>
                {this.props.tasks.map(( task,idx) => (
                    <Task key={idx} title={task.title} description={task.description} dueDate={task.dueDate}/>
                ))}
            </>
        );
    }
}
export default TaskList
export interface TaskItem {
    title: string;
    description:string;
    dueDate:Date
  }