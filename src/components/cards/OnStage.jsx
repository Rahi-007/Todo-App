import { ClipboardCheck } from "lucide-react";
import AddTask from "../common/AddTask";
import AllTask from "../common/AllTask";

const OnStage = () => {
  return (
    <div className="task-app w-full max-w-md rounded-lg bg-gray-800 px-6 pb-2 pt-6 text-gray-200 shadow-lg">
      <div className="mb-6 flex items-center">
        <ClipboardCheck className="h-8 w-8 stroke-current text-indigo-700" />
        <h4 className="ml-3 text-lg font-semibold">On Stage Tasks</h4>
      </div>
      <AddTask status="onstage" />
      <AllTask status="onstage" />
    </div>
  );
};

export default OnStage;
