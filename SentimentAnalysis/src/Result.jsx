import "./App.css";

function Result({ result, isLoading }) {
  if (isLoading) {
    return (
      <p className="font-bold text-center text-xl text-cyan-300 p-5">
        Analyzing...
      </p>
    );
  }

  if (!result) {
    return null;
  }
  let sentimentColor = result
    ? result.sentiment === "Positive"
      ? "green"
      : result.sentiment === "Negative"
        ? "red"
        : "yellow"
    : "";
  return (
    <div className="bg-slate-800 rounded-xl p-8 w-84 mt-6  text-center">
      <p className="text-base pb-3 font-bold">
        Result:
        <span className={`text-xl font-bold pb-3 ${sentimentColor}`}>
          &nbsp; {result.sentiment}
        </span>
      </p>
      <p className="text-xs font-light text-gray-500  ">
        Confidence Score {result.confidenceScore}
      </p>
      <div className="w-full bg-gray-600 rounded-full h-2 mt-4">
        <div
          className="bg-blue-500 h-2 rounded-full"
          style={{ width: result.confidenceScore }}
        ></div>
      </div>
    </div>
  );
}
export default Result;
