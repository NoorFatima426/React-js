function Input({ analyzeText, getInput, inputData }) {
  return (
    <div className="input-container">
      <h1 className="font-bold text-center text-4xl text-cyan-300 pb-10">
        Sentiment Analyzer
      </h1>
      <div>
        <p className="text-sky-500 font-bold text-xl  pb-5">
          Analyze your text
        </p>
        <textarea
          name=""
          id="msg"
          rows="5"
          value={inputData}
          className="border border-slate-600  text-sm bg-slate-800 text-white focus:outline-white block w-full p-3.5 rounded-lg placeholder:text-white"
          placeholder="Enter your Message"
          onChange={getInput}
           onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey){
                e.preventDefault();
              analyzeText();
            }
          }}
         
        ></textarea>
        <br />
        <button
          onClick={analyzeText}
          className="bg-blue-500 hover:bg-blue-600 border-2 border-solid rounded-sm text-white p-2.5"
        >
          Click to Analyze
        </button>
      </div>
    </div>
  );
}
export default Input;
