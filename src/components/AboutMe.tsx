import Photo2 from "../assets/Photo2.jpg";
import HTML from "../assets/html.svg";
import CSS from "../assets/css.svg";
import SCSS from "../assets/scss.svg";
import JS from "../assets/js.svg";
import TS from "../assets/ts.svg";
import ReactIcon from "../assets/react.svg";
import TCSS from "../assets/tailwindcss.svg";
import Figma from "../assets/figma.svg";
import Git from "../assets/git.svg";
import Webpack from "../assets/webpack.svg";

export const AboutMe = () => {
  return (
    <div className="container flex flex-col">
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="h-0.75 w-20 bg-linear-to-r from-transparent to-[#d89b68]"></div>
        <p
          id="about-section"
          className="text-[26px] font-semibold tracking-widest uppercase text-[#a47148] scroll-mt-20"
        >
          About me
        </p>
        <div className="h-0.75 w-20 bg-linear-to-l from-transparent to-[#d89b68]"></div>
      </div>
      <div className="flex gap-8">
        <img
          src={Photo2}
          alt="My Photo"
          className="h-130 border-4 rounded-3xl border-white"
        ></img>
        <div>
          <h3 className="text-[24px]">Hello! I'm Maria Ridal.</h3>
          <p className="text-[22px] max-[1450px]:text-[18px] mb-6">
            Enthusiastic Frontend Developer with a solid foundation in modern
            web development. I focus on creating user-friendly and visually
            appealing interfaces, writing clean, maintainable code and
            continuously improving my skills to ensure applications work
            smoothly. I'm seeking an opportunity to apply my skills and grow
            within a dynamic and forward-thinking team.
          </p>
          <div className="flex flex-wrap justify-center gap-10 mb-4">
            <div className="flex flex-col items-center text-center">
              <p className="text-[22px] text-[#79542e] font-bold">
                Communication
              </p>
              <p className="text-[18px]">Clear and effective communication</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <p className="text-[22px] text-[#79542e] font-bold">
                Problem Solving
              </p>
              <p className="text-[18px]">Analytical and proactive mindset</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <p className="text-[22px] text-[#79542e] font-bold">
                Desire to Learn
              </p>
              <p className="text-[18px]">
                Passionate about growth and learning
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <p className="text-[22px] text-[#79542e] font-bold">
                Attention to Details
              </p>
              <p className="text-[18px]">Focused on quality and precision</p>
            </div>
          </div>
          <p className="text-[24px] text-[#79542e] font-bold">My Stack:</p>
          <div className="grid grid-cols-10 max-[1700px]:grid-cols-5 max-[1200px]:grid-cols-3 gap-2 my-3">
            <div className="flex flex-col items-center bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-2 shadow-lg">
              <img src={HTML} alt="HTML icon" className="w-12.5 mb-1" />
              <p>HTML</p>
            </div>
            <div className="flex flex-col items-center bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-2 shadow-lg">
              <img src={CSS} alt="CSS icon" className="w-12.5 mb-1" />
              <p>CSS</p>
            </div>
            <div className="flex flex-col items-center bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-2 shadow-lg">
              <img src={SCSS} alt="SCSS icon" className="w-12.5 mb-1" />
              <p>SCSS</p>
            </div>
            <div className="flex flex-col items-center bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-2 shadow-lg">
              <img src={JS} alt="JavaScript icon" className="w-12.5 mb-1" />
              <p>JavaScript</p>
            </div>
            <div className="flex flex-col items-center bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-2 shadow-lg">
              <img src={TS} alt="TypeScript icon" className="w-12.5 mb-1" />
              <p>TypeScript</p>
            </div>
            <div className="flex flex-col items-center bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-2 shadow-lg">
              <img src={ReactIcon} alt="React icon" className="w-12.5 mb-1" />
              <p>React</p>
            </div>
            <div className="flex flex-col items-center bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-2 shadow-lg">
              <img src={TCSS} alt="TailwindCSS icon" className="w-12.5 mb-1" />
              <p className="text-[14px] pt-0.5">TailwindCSS</p>
            </div>
            <div className="flex flex-col items-center bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-2 shadow-lg">
              <img src={Figma} alt="Figma icon" className="w-12.5 mb-1" />
              <p>Figma</p>
            </div>
            <div className="flex flex-col items-center bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-2 shadow-lg">
              <img src={Git} alt="Git icon" className="w-12.5 mb-1" />
              <p>Git</p>
            </div>
            <div className="flex flex-col items-center bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-2 shadow-lg">
              <img src={Webpack} alt="Webpack icon" className="w-12.5 mb-1" />
              <p>Webpack</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
