import './TaskCard.css'
import React from "react";
interface TaskItem {
  title: string;
  description: string;
  dueDate: Date
}

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
  title: string;
  description: string;
  dueDate: Date
}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);

    this.state = {
      title: "",
      description: "",
      dueDate: new Date()
    }
  }
  inputRef = React.createRef<HTMLInputElement>();
  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
      description: this.state.description,
      dueDate: this.state.dueDate
    };
    this.props.addTask(newTask);
    console.log(`added ${newTask}`)
    this.setState({ title: "" });
    this.setState({ description: "" });


  };
  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value });
  };
  desChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);

    this.setState({ description: event.target.value });
  };
  dateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    const selectedDate = new Date(event.target.value);
    this.setState({ dueDate: selectedDate });
  };
  render() {
    return (
      <form onSubmit={this.addTask} className="max-w-md mx-auto mt-8">
        <div className="flex flex-col space-y-4">
          <input
            id="todoTitle"
            type="text"
            value={this.state.title}
            onChange={this.titleChanged}
            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
            placeholder="Task Name"
            required
          />
          <input
            id="todoDescription"
            type="text"
            value={this.state.description}
            onChange={this.desChanged}
            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
            placeholder="Description"
            required
          />
          <input
            id="todoDueDate"
            type="date"
            value={this.state.dueDate.toISOString().split('T')[0]} // Formatting the Date object to 'YYYY-MM-DD' format
            onChange={this.dateChanged}
            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
            required
          />
          <button
            id="addTaskButton"
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Item
          </button>
        </div>
      </form>
    )
  }
}
export default TaskForm;