import { Check, Trash2 } from "lucide-react";
import {
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} from "../../configs/redux";

export default function Task({ task }) {
  const [updateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();
  const { id, value, completed } = task;

  return (
    <div className="task">
      <input
        className="hidden"
        type="checkbox"
        id={id}
        checked={completed}
        onChange={() => {
          updateTask({ id, completed: !completed });
        }}
      />
      <label
        className="flex h-10 items-center rounded px-2 hover:bg-gray-900"
        htmlFor={id}
      >
        <span className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border-2 border-gray-500 text-transparent">
          <Check className="h-4 w-4 fill-current" />
        </span>
        <span className="ml-4 text-sm">{value}</span>
        <button
          onClick={(e) => {
            e.preventDefault();
            deleteTask(id);
          }}
          className="ml-auto"
        >
          <Trash2 className="h-5 w-5 cursor-pointer text-red-400 hover:text-red-500" />
        </button>
      </label>
    </div>
  );
}
