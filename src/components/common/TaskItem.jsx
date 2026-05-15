import { Check, ClipboardCheck, Trash2 } from "lucide-react";
import {
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} from "../../configs/redux";
import Popup, { Content, Trigger } from "./Popup";

export default function Task({ task }) {
  const [updateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();
  const { id, title, description, status } = task;

  return (
    <div className="h-10 rounded flex items-center px-2 hover:bg-gray-900">
      <input
        className="hidden"
        type="checkbox"
        id={id}
        checked={status === "done"}
        onChange={() => {
          if (status === "done") {
            updateTask({ id, status: "new", updatedAt: new Date() });
          } else {
            updateTask({ id, status: "done", updatedAt: new Date() });
          }
        }}
      />

      <label className="" htmlFor={id}>
        <span className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border-2 border-gray-500 text-transparent">
          <Check className="h-4 w-4 fill-current" />
        </span>
      </label>
      <Popup>
        <Trigger>
          {status === "done" ? (
            <span className="ml-4 text-sm line-through">{title}</span>
          ) : (
            <span className="ml-4 text-sm">{title}</span>
          )}
        </Trigger>
        <Content>
          <div className="mb-4 flex items-center">
            <ClipboardCheck className="h-8 w-8 stroke-current text-indigo-700" />
            <h4 className="ml-3 text-lg font-semibold">{title}</h4>
          </div>
          <p className="text-sm">{description}</p>
        </Content>
      </Popup>
      <button
        onClick={(e) => {
          e.preventDefault();
          deleteTask(id);
        }}
        className="ml-auto"
      >
        <Trash2 className="h-5 w-5 cursor-pointer text-red-400 hover:text-red-500" />
      </button>
    </div>
  );
}
