import { ClipboardCheck } from "lucide-react";
import { useGetAllTasksQuery } from "../../configs/redux";
import Task from "../common/TaskItem";

const Done = () => {
  const { data, isLoading, error, isError } = useGetAllTasksQuery();

  return (
    <div className="task-app w-full rounded-lg bg-gray-800 px-6 pb-2 pt-6 text-gray-200 shadow-lg">
      <div className="mb-6 flex items-center">
        <ClipboardCheck className="h-8 w-8 stroke-current text-indigo-700" />
        <h4 className="ml-3 text-lg font-semibold">Compiled Tasks</h4>
      </div>
      <div className="tasks-container overflow-auto">
        {isLoading ? (
          <p className="text-center">Loading...</p>
        ) : isError ? (
          <p className="text-center">{error.error || "Something went wrong"}</p>
        ) : (
          data
            .filter((task) => task.completed)
            .map((task) => <Task key={task.id} task={task} />)
        )}
      </div>
    </div>
  );
};

export default Done;
