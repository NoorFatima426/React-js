import Input from "./Input.jsx";
import Result from "./Result.jsx";
import { useState } from "react";

function App() {
  let [inputData, setInputData] = useState("");
  let [isLoading, setIsLoading] = useState(false);
  let [result, setResult] = useState(null);
  const getInput = (e) => {
    setInputData(e.target.value);
  };
  const analyzeText = async () => {
    if (inputData.trim() === "") {
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_KEY}`,
          },
          body: JSON.stringify({
            model: "openrouter/auto",
            messages: [
              {
                role: "user",
                content: `Analyze sentiment of this text and reply ONLY in JSON format like this:
            {"sentiment": "Positive/Negative/Neutral", "confidenceScore": "00%"}
            
            Text: ${inputData}`,
              },
            ],
          }),
        },
      );

      const data = await response.json();
      const content = data.choices[0].message.content;
      const cleaned = content.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(cleaned);
      setResult(parsed);
      setInputData("");
    } catch (error) {
      setResult({
        sentiment: "Error",
        confidenceScore: "0%",
      });
    } finally {
      setIsLoading(false);
    }
    setTimeout(()=>{setResult("")},6000);
  };
  return (
    <div className="bg-amber-50 min-h-screen flex items-center justify-center overflow-hidden">
      <div className="rounded-xl p-10 w-2/3 flex flex-col items-center text-white bg-slate-900">
        <Input
          analyzeText={analyzeText}
          getInput={getInput}
          inputData={inputData}
        />
        <Result result={result} isLoading={isLoading} />
      </div>
    </div>
  );
}
export default App;
