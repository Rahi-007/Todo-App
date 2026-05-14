import { ClipboardCheck } from "lucide-react";
import { useGetAllTasksQuery } from "../../configs/redux";

const Bug = () => {
  const { data, isLoading, error, isError } = useGetAllTasksQuery();

  return (
    <div className="task-app w-full rounded-lg bg-gray-800 px-6 pb-2 pt-6 text-gray-200 shadow-lg">
      <div className="mb-6 flex items-center">
        <ClipboardCheck className="h-8 w-8 stroke-current text-indigo-700" />
        <h4 className="ml-3 text-lg font-semibold">Error and Bugs</h4>
      </div>
    </div>
  );
};

export default Bug;
