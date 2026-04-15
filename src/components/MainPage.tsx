import Photo from "../assets/Photo.jpg";

export const MainPage = () => {
  const handleScroll = () => {
    const el = document.getElementById("projects-section");
    if (el) {
      el.scrollIntoView();
    }
  };

  return (
    <div className="container flex justify-evenly items-center min-h-screen">
      <div className="leading-tight mr-5">
        <h1 className="text-[#79542e] text-[60px] min-[1450px]:text-[110px] font-bold">
          Maria Ridal
        </h1>
        <p className="text-[#79542e] text-[26px] min-[1450px]:text-[50px] mb-6">
          Frontend Developer
        </p>
        <button
          onClick={handleScroll}
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
          className="relative min-[1450px]:w-90 min-[1450px]:h-90 w-60 h-60 rounded-full border-4 border-white shadow-lg object-cover"
        />
      </div>
    </div>
  );
};
