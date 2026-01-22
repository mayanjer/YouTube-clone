import menuLogo from "../assets/menu-symbol.svg";
import youtubeLogo from "../assets/youtube-logo.svg";
import { Mic, Bell, Menu, UserPen, Plus } from "lucide-react";

export default function TitleBar() {
  return (
    <span className="flex gap-2">
      <Menu className="mt-2" />
      <img src={youtubeLogo} alt="" className="w-25" />
      <span className="flex gap-3 mx-auto">
        <input
          type="text"
          className="border w-100 h-10  rounded-2xl px-4"
          placeholder="Search"
        />
        <span className="bg-gray-100 hover:bg-gray-300 rounded-full w-10 flex justify-center items-center h-10">
          <Mic/>
        </span>
      </span>
      <span className="flex gap-5">
        <button className="bg-gray-100 font-bold p-2 flex gap-2 rounded-2xl hover:bg-gray-300">
          <Plus />
          Create
        </button>
        <span className="rounded-full hover:bg-gray-300 w-10 h-10 flex justify-center items-center">
          <Bell />
        </span>
        <div className="border rounded-full w-10 h-10 flex justify-center items-center">
        
            <UserPen />
         
        </div>
      </span>
    </span>
  );
}
