export const MyProjects = () => {
  return (
    <div className="container flex">
      <div>
        <p>My Projects</p>
        <h2>My Projects</h2>
        <p>A selection of projects that showcase my skills .......</p>
        <div className="flex gap-2">
          <div className="flex-1 max-w-sm bg-[#f7f5f3] border border-gray-200 rounded-xl shadow-[0_8px_16px_rgba(0,0,0,0.08)] p-4 cursor-pointer group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <p className="text-[22px] font-bold group-hover:underline underline-offset-3">
              Upload App
            </p>
            <p>
              Secure and modern full-stack web application that allows
              authenticated users to upload, store, manage and share files. It
              solves the problem of managing personal cloud storage with
              fine-grained access control and token-based security.
            </p>
          </div>
          <div className="flex-1 max-w-sm bg-[#f7f5f3] border border-gray-200 rounded-xl shadow-[0_8px_16px_rgba(0,0,0,0.08)] p-4 cursor-pointer group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <p className="text-[22px] font-bold group-hover:underline underline-offset-3">
              Organizer App
            </p>
            <p>
              Multifunctional organizer application featuring a customizable
              Pomodoro timer, persistent To-Do list, calculator, secure password
              generator and a weather module powered by external API.
            </p>
          </div>
          <div className="flex-1 max-w-sm bg-[#f7f5f3] border border-gray-200 rounded-xl shadow-[0_8px_16px_rgba(0,0,0,0.08)] p-4 cursor-pointer group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <p className="text-[22px] font-bold group-hover:underline underline-offset-3">
              JWT Authorization Page
            </p>
            <p>
              User authentication app with JWT login/registration, protected
              routes, backend-powered user profiles, form validation and toast
              notifications.
            </p>
          </div>
          <div className="flex-1 max-w-sm bg-[#f7f5f3] border border-gray-200 rounded-xl shadow-[0_8px_16px_rgba(0,0,0,0.08)] p-4 cursor-pointer group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <p className="text-[22px] font-bold group-hover:underline underline-offset-3">
              Superheroes App
            </p>
            <p>
              Superhero management app with hybrid data handling (external API +
              localStorage), advanced CRUD, instant debounced search and a
              responsive UI with full error handling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
