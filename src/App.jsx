import TitleBar from "./components/TitleBar";
import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="mt-2 mr-5 flex">
      <div className = "flex-1 flex flex-col gap-4">

      <SideBar />
      </div>
      <div className="">
        <TitleBar />
      </div>
      <div className="col-start-2 space-y-2">
        <MainContent />
      </div>
    </div>
  );
}

export default App;
