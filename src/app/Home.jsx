import Bug from "../components/layouts/Bug";
import Done from "../components/layouts/Done";
import New from "../components/layouts/New";
import OnGoing from "../components/layouts/Ongoing";

export default function Home() {
  return (
    <div className="flex flex-row h-screen overflow-y-hidden items-start bg-gray-900 p-4 gap-4">
      <New />
      <Bug />
      {/* <OnStage /> */}
      <OnGoing />
      <Done />
    </div>
  );
}
