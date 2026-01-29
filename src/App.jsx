import TitleBar from "./components/TitleBar";
import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="mt-2 mr-5 grid grid-cols-[200px_1fr_1fr] grid-rows-5">
      <SideBar />
      <div className="col-span-2">
        <TitleBar />
      </div>
      <div className="col-start-2">
        <MainContent />
      </div>
    </div>
  );
}

export default App;
