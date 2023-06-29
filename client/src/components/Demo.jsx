import { useState } from "react";
import { linkIcon } from "../assets";

function Demo() {
  const [text, setText] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(text);
  };

  const changeHandler = (event) => {
    setText(event.target.value);
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={submitHandler}
        >
          <img
            src={linkIcon}
            alt="link-icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="text"
            placeholder="Enter some Text"
            value={text}
            onChange={changeHandler}
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
    </section>
  );
}

export default Demo;
