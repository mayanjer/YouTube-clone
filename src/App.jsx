import TitleBar from "./components/TitleBar";
import SideBar from "./components/SideBar";
import { useState } from "react";

function App() {
  return (
    <div className="mt-2 mr-5 grid grid-cols-[200px_1fr_1fr]">
      <SideBar />
      <div className="col-span-2">
        
      <TitleBar />
</div>
    </div>
  );
}

export default App;
