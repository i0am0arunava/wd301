import React from "react"

interface Taskpropss{
    title:string;
    description:string;
    dueDate:Date;
}
class Task extends React.Component<Taskpropss> {
    render() {
        return (
          <div className="TaskItem">
            <h2 >{this.props.title}</h2>
            <p >
              Due Date:{this.props.dueDate.toISOString().split('T')[0]}
            </p>
            <p>
              Description: {this.props.description}
            </p>
          </div>
        );
      }
    
}
export default Task;
