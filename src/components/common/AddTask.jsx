import { Plus } from "lucide-react";
import { useState } from "react";
import { useAddTaskMutation } from "../../configs/redux";

const AddTask = ({ status }) => {
  const [newTask, setNewTask] = useState("");
  const [addTask] = useAddTaskMutation();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const task = { value: newTask, completed: false, status: status };
        addTask(task);
        setNewTask("");
      }}
      className="my-2 flex h-8 w-full items-center rounded border-2 border-solid border-gray-700 px-2 text-sm font-medium"
    >
      <Plus className="h-5 w-5 fill-current text-gray-400" />
      <input
        className="ml-4 h-8 w-full flex-grow bg-transparent font-medium focus:outline-none"
        type="text"
        placeholder="Add a new task"
        onChange={(e) => setNewTask(e.target.title)}
        value={newTask}
        required
      />
      <button className="text-indigo-400">Add</button>
    </form>
  );
};

export default AddTask;
