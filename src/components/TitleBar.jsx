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
        <span className="bg-gray-100 hover:bg-gray-200 rounded-full w-10 flex justify-center">
          <Mic className="mt-2" />
        </span>
      </span>
      <span className="flex gap-5">
        <button className="bg-gray-100 font-bold p-2 flex gap-2 rounded-2xl hover:bg-gray-200">
          <Plus />
          Create
        </button>
        <Bell className="mt-2 rounded-full  hover:bg-gray-200" />
        <div className="border rounded-full w-10 flex justify-center">
          <div className="flex flex-col justify-center">
            <UserPen />
          </div>
        </div>
      </span>
    </span>
  );
}
