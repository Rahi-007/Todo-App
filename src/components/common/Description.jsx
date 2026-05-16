import { useState } from "react";
import { useUpdateTaskMutation } from "../../configs/redux";
import TextEditor from "../ui/TextEditor";

const Description = ({ id, description }) => {
  const [value, setValue] = useState("");
  const [updateTask] = useUpdateTaskMutation();
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: description }} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const task = { id, description: value, updatedAt: new Date() };
          updateTask(task);
          setValue("");
        }}
      >
        {/* <Plus className="h-5 w-5 fill-current text-gray-400" />
      <input
        className="ml-4 h-8 w-full flex-grow bg-transparent font-medium focus:outline-none"
        type="text"
        placeholder="Add a new task"
        onChange={(e) => setNewTask(e.target.value)}
        value={newTask}
        required
      /> */}
        <TextEditor value={value} setValue={setValue} />
        <div className="flex justify-end mt-2">
          <button
            type="submit"
            className="font-semibold text-indigo-400 hover:bg-blue-100/5 hover:text-indigo-300 rounded-sm py-1 px-2 transition-colors delay-75 ease-in-out hover:ease-out"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Description;
