import Done from "../components/cards/Done";
import New from "../components/cards/New";
import OnGoing from "../components/cards/Ongoing";
import OnStage from "../components/cards/Onstage";

export default function Home() {
  return (
    <div className="flex h-screen items-start justify-between gap-2 bg-gray-900 p-4">
      <New />
      <OnStage />
      <OnGoing />
      <Done />
    </div>
  );
}
