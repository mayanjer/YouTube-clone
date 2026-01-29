import TitleBar from "./components/TitleBar";
import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <>
      <TitleBar />

      <div className="mt-2 mr-5 grid grid-cols-[200px_1fr_1fr] grid-rows-5">
        <div className="row-start-1 col-start-1">

        <SideBar />
        </div>

        <div className="col-start-2 space-y-2 row-start-1">
          <MainContent />
        </div>
      </div>
    </>
  );
}

export default App;
