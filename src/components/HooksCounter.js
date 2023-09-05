
import { useSelector } from "react-redux";

function HooksCounter({}) {
    const count = useSelector((state) => state.value);

  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{count}</div>
    </div>
  );
}

export default HooksCounter;