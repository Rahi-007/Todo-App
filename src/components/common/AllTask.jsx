import { useGetAllTasksQuery } from "../../configs/redux";
import Task from "./TaskItem";

const AllTask = ({ status }) => {
  const { data, isLoading, error, isError } = useGetAllTasksQuery();
  return (
    <div className="tasks-container overflow-auto">
      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : isError ? (
        <p className="text-center">{error.error || "Something went wrong"}</p>
      ) : (
        data
          .filter((task) => !task.completed && task.status === status)
          .map((task) => <Task key={task.id} task={task} />)
      )}
    </div>
  );
};

export default AllTask;
