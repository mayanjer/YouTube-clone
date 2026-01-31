import TitleBar from "./components/TitleBar";
import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="mt-2 mr-5 flex">
      <div className="flex flex-col gap-4 border">
        <SideBar />
      </div>
      <div className="flex-1 flex-col gap-4 border">
        <TitleBar />
        <MainContent />
      </div>
     
    </div>
  );
}

export default App;
