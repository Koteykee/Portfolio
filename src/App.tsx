import { AboutMe } from "./components/AboutMe";
import { ContactMe } from "./components/ContactMe";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MainPage } from "./components/MainPage";
import { MyProjects } from "./components/MyProjects";

function App() {
  return (
    <div className="bg-[#f5eae2] min-h-screen">
      <Header />
      <MainPage />
      <AboutMe />
      <MyProjects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
