// import { logo } from "../assets";

function Hero() {
  return (
    <header className="w-full flex justify-center flex-col items-center">
      <nav className="flex justify-between w-full mb-10 pt-3 items-center">
        <img src="https://cdn.worldvectorlogo.com/logos/batman-30538.svg" alt="app-logo" className="w-28 object-contain" />
        <button type="button" className="black_btn">Github</button>
      </nav>
      <h1 className="head_text">
        Generate SQL with <br className="max-md:hidden" /> <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">Simplify your reading with Summarize, an open source article summarizer that transforms lengthy articles into clear and concise summaries.</h2>
    </header>
  );
}

export default Hero;
