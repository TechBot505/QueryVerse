import { useState } from "react";
import { loader, linkIcon, copy, tick } from "../assets";

function Demo() {
  const [userPrompt, setUserPrompt] = useState("");
  const [sqlQuery, setSqlQuery] = useState("");
  const [copied, setCopied] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsGenerating(true);
    const query = await generateQuery();
    setSqlQuery(query);
    setIsGenerating(false);
  };

  const generateQuery = async () => {
    const response = await fetch("https://query-verse.onrender.com/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ queryDescription: userPrompt }),
    });

    const data = await response.json();
    return data.sqlQuery.trim();
  };

  const handleCopy = (copyQuery) => {
    setCopied(copyQuery);
    navigator.clipboard.writeText(copyQuery);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={onSubmit}
        >
          <img
            src={linkIcon}
            alt="link-icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="text"
            placeholder="Enter some Text"
            value={userPrompt}
            onChange={(e) => setUserPrompt(e.target.value)}
            className="url_input peer"
            required
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            Go
          </button>
        </form>
      </div>

      <div className="my-10 max-w-full flex justify-center items-center">
        {isGenerating && <img src={loader} alt="loader" className="w-20 h-20 object-contain" />}
        {sqlQuery && !isGenerating && (
          <div className="flex flex-col gap-3">
            <h2 className="font-satoshi text-bold text-gray-600 text-xl">
              SQL <span className="blue_gradient">Query</span>
            </h2>
            <div className="summary_box">
              <div className="copy_btn" onClick={() => handleCopy(sqlQuery)}>
                <img
                  src={copied === sqlQuery ? tick : copy}
                  alt="copy-btn"
                  className="w-[40%] h-[40%] object-contain"
                />
              </div>
              <p className="font-inter px-3 font-medium text-sm text-gray-700">
                {sqlQuery}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Demo;
