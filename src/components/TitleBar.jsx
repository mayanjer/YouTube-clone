
import { Mic, Bell, Menu, UserPen, Plus } from "lucide-react";
import youtubeLogo from '../assets/youtube-logo.svg'

export default function TitleBar() {
  return (
    <section className="flex gap-4">
      <span className="flex">
        <button className="hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center ">
          <Menu />
        </button>
        <img
          src={youtubeLogo}
          alt=""
          className="w-20 md:w-20 lg:w-25 col-span-2 col-start-2 mt-2 ml-3"
        />
      </span>

      <span className="flex gap-4 mx-auto">
        <input
          type="text"
          className="border lg:w-100 lg:h-10 rounded-4xl px-4 md:w-80 w-15"
          placeholder="Search"
        />
        <span className="bg-gray-100 hover:bg-gray-300 rounded-full w-10 flex justify-center items-center h-10">
          <Mic />
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
    </section>
  );
}
