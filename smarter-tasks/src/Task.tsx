import React from "react"

interface Taskpropss{
    title:string;
}
class Task extends React.Component<Taskpropss> {
    render() {
        return (
          <div className="rounded-md p-2 md:p-4 mt-3 shadow-md border border-slate-100">
            <h2 className="text-base font-bold my-1">{this.props.title}</h2>
            <p className="text-sm text-slate-500">
              Due Date:
            </p>
            <p className="text-sm text-slate-500">
              Description: 
            </p>
          </div>
        );
      }
    
}
export default Task;
