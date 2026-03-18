import Photo from "../assets/Photo.jpg";

export const MainPage = () => {
  return (
    <div className="container flex justify-evenly items-center min-h-screen">
      <div className="leading-tight">
        <h1 className="text-[#79542e] text-[110px] font-bold">Maria Ridal</h1>
        <p className="text-[#79542e] text-[50px] mb-6">Frontend Developer</p>
        <button
          className="text-white bg-[#d89b68] rounded-full border-2 border-[#a47148] p-4 cursor-pointer transition-all duration-300 
hover:bg-[#c48755] hover:shadow-[0_10px_25px_rgba(216,155,104,0.4)] hover:-translate-y-0.5"
        >
          View my projects
        </button>
      </div>
      <div className="relative inline-block">
        <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#a47148] rounded-full"></div>
        <div className="absolute top-4 left-4 w-full h-full bg-[#e6d3c3] rounded-full"></div>
        <img
          src={Photo}
          alt="My photo"
          className="relative w-90 h-90 rounded-full border-4 border-white shadow-lg object-cover"
        />
      </div>
    </div>
  );
};
