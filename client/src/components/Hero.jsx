function Hero() {
  return (
    <header className="w-full flex justify-center flex-col items-center">
      <nav className="flex justify-between w-full mb-10 pt-3 items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4492/4492311.png"
          alt="app-logo"
          className="w-28 object-contain"
        />
        <a href="https://github.com/TechBot505/QueryVerse.git">
          <button type="button" className="black_btn">
            Github
          </button>
        </a>
      </nav>
      <h1 className="head_text">
        Generate SQL with <br className="max-md:hidden" />{" "}
        <span className="green_gradient">OpenAI DAVINCI-003</span>
      </h1>
      <h2 className="desc">
        Effortlessly generate SQL queries with our AI tool, empowering you to
        streamline database interactions like never before.
      </h2>
    </header>
  );
}

export default Hero;
