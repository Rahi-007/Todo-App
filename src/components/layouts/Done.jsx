import { ClipboardCheck } from "lucide-react";
import AllTask from "../common/AllTask";

const Done = () => {
  return (
    <div className="task-app w-full rounded-lg bg-gray-800 px-6 pb-2 pt-6 text-gray-200 shadow-lg">
      <div className="mb-6 flex items-center">
        <ClipboardCheck className="h-8 w-8 stroke-current text-indigo-700" />
        <h4 className="ml-3 text-lg font-semibold">Compiled Tasks</h4>
      </div>
      <AllTask status="done" />
    </div>
  );
};

export default Done;
