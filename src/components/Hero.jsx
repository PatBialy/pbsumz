import { logo } from "../assets 4";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between item-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://github.com/PatBialy")}
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarizing Articles So You Don't Have To With{" "}
        <br className="max-md:hidden" />
        <span className="orange_gradient">GPT-4</span>
      </h1>
      <h2 className="desc">
        Say goodbye to information overload! Summize, the open-source article
        summarizer, condenses long reads into bite-sized summaries, making your
        reading experience simpler and more efficient.
      </h2>
    </header>
  );
};

export default Hero;
