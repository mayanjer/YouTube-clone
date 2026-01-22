import menuLogo from "../assets/menu-symbol.svg";
import youtubeLogo from "../assets/youtube-logo.svg";
import { Mic, Bell, Menu, Circle } from "lucide-react";

export default function TitleBar() {
  return (
    <span className="flex gap-2">
      <Menu className="mt-2"/>
      <img src={youtubeLogo} alt="" className="w-25" />
      <span className="flex gap-3 mx-auto">
        <input
          type="text"
          className="border w-100 h-10  rounded-2xl px-4"
          placeholder="Search"
        />

        <Mic className="mt-2" />
          </span>
          <span className="flex gap-2">
              <button className="bg-gray-100">Create</button>
              <Bell className="mt-2" />
              <Circle className="mt-2"/>

          </span>
    </span>
  );
}
