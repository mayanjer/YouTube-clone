import TitleBar from "./components/TitleBar";
import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="mt-2 mr-5 grid grid-cols-[245px_1fr] grid-rows-[auto_1fr] h-screen">
      <div className="row-span-2 col-start-1">
        <SideBar />
      </div>

      <TitleBar />

      <MainContent />
    </div>
  );
}

export default App;
