import Prev1 from "../assets/Prev1.png";
import Prev2 from "../assets/Prev2.png";
import Prev3 from "../assets/Prev3.jpg";
import Prev4 from "../assets/Prev4.png";

export const MyProjects = () => {
  return (
    <div className="container flex flex-col">
      <div className="flex items-center justify-center gap-4 mt-20 mb-6">
        <div className="h-0.75 w-20 bg-linear-to-r from-transparent to-[#d89b68]"></div>
        <p
          id="projects-section"
          className="text-[26px] font-semibold tracking-widest uppercase text-[#a47148] scroll-mt-20"
        >
          My Projects
        </p>
        <div className="h-0.75 w-20 bg-linear-to-l from-transparent to-[#d89b68]"></div>
      </div>
      <h2 className="text-center text-[20px] mb-6">
        A selection of projects that showcase my skills and reflect my
        continuous learning in frontend development.
      </h2>
      <div className="flex gap-2">
        <a
          href="https://reactpizza-v1wv.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 max-w-sm flex"
        >
          <div className="flex-1 max-w-sm bg-[#f7f5f3] border border-gray-200 rounded-xl shadow-[0_8px_16px_rgba(0,0,0,0.08)] p-4 cursor-pointer group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <img src={Prev1} alt="Preview image" />
            <p className="min-[1300px]:text-[22px] text-[18px] font-bold group-hover:underline underline-offset-3">
              Pizza App
            </p>
            <div className="font-bold my-1">
              <span className="min-[1300px]:text-[17px] text-[15px] underline">
                Stack:
              </span>
              <span className="max-[1300px]:text-[15px]">
                {" "}
                TypeScript, React, TailwindCSS, Zustand.
              </span>
            </div>
            <p>
              Modern and responsive web application that allows users to browse
              products, add products to favorites and cart, and place orders
              with delivery scheduling and promo code support.
            </p>
          </div>
        </a>
        <a
          href="https://reactupload.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 max-w-sm flex"
        >
          <div className="flex-1 max-w-sm bg-[#f7f5f3] border border-gray-200 rounded-xl shadow-[0_8px_16px_rgba(0,0,0,0.08)] p-4 cursor-pointer group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <img src={Prev2} alt="Preview image" />
            <p className="min-[1300px]:text-[22px] text-[18px] font-bold group-hover:underline underline-offset-3">
              Upload App
            </p>
            <div className="font-bold my-1">
              <span className="min-[1300px]:text-[17px] text-[15px] underline">
                Stack:
              </span>
              <span className="max-[1300px]:text-[15px]">
                {" "}
                TypeScript, React, TailwindCSS, Zustand.
              </span>
            </div>
            <p>
              Secure and modern full-stack web application that allows
              authenticated users to upload, store, manage and share files. It
              solves the problem of managing personal cloud storage with
              fine-grained access control and token-based security.
            </p>
          </div>
        </a>
        <a
          href="https://superheroes-app-7jgn.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 max-w-sm flex"
        >
          <div className="flex-1 max-w-sm bg-[#f7f5f3] border border-gray-200 rounded-xl shadow-[0_8px_16px_rgba(0,0,0,0.08)] p-4 cursor-pointer group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <img src={Prev3} alt="Preview image" />
            <p className="min-[1300px]:text-[22px] text-[18px] font-bold group-hover:underline underline-offset-3">
              Superheroes App
            </p>
            <div className="font-bold my-1">
              <span className="min-[1300px]:text-[17px] text-[15px] underline">
                Stack:
              </span>
              <span className="max-[1300px]:text-[15px]">
                {" "}
                TypeScript, React, Zustand.
              </span>
            </div>
            <p>
              Superhero management app with hybrid data handling (external API +
              localStorage), advanced CRUD, instant debounced search and a
              responsive UI with full error handling.
            </p>
          </div>
        </a>
        <a
          href="https://organizer-app-ehzz.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 max-w-sm flex"
        >
          <div className="flex-1 max-w-sm bg-[#f7f5f3] border border-gray-200 rounded-xl shadow-[0_8px_16px_rgba(0,0,0,0.08)] p-4 cursor-pointer group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <img src={Prev4} alt="Preview image" />
            <p className="min-[1300px]:text-[22px] text-[18px] font-bold group-hover:underline underline-offset-3">
              Organizer App
            </p>
            <div className="font-bold my-1">
              <span className="min-[1300px]:text-[17px] text-[15px] underline">
                Stack:
              </span>
              <span className="max-[1300px]:text-[15px]">
                {" "}
                TypeScript, React.
              </span>
            </div>
            <p>
              Multifunctional organizer application featuring a customizable
              Pomodoro timer, persistent To-Do list, calculator, secure password
              generator and a weather module powered by external API.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};
