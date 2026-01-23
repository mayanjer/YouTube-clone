import {
  House,
  Clapperboard,
  Youtube,
  UserPen,
  History,
  ListMusic,
  Clock,
  ThumbsUp,
  Music2,
  TvMinimalPlay,
  Gamepad2,
  Settings
} from "lucide-react";
import { SUBSCRIPTIONS } from "../data";

export default function SideBar() {
  // simple sidebar rendered initially
  const simpleSideBar = (
    <section className="mt-4">
      <span className="text-xs flex flex-col w-20 justify-center items-center hover:bg-gray-300 rounded p-2">
        <House />
        Home
      </span>

      <span className="text-xs flex flex-col w-20 justify-center items-center hover:bg-gray-300 rounded p-2">
        <Clapperboard />
        Shorts
      </span>

      <span className="text-xs flex flex-col w-20 justify-center items-center hover:bg-gray-300 rounded p-2">
        <Youtube />
        Subscriptions
      </span>

      <span className="text-xs flex flex-col w-20 justify-center items-center hover:bg-gray-300 rounded p-2">
        <div className="border rounded-full">
          <UserPen />
        </div>
        You
      </span>
    </section>
  );

  // detailed sidebar rendered on click of the menu icon
  const detailedSideBar = (
    <section className="ml-6 mt-4 flex flex-col w-55 text-sm">
      <span className="flex gap-8 w-45 h-10  items-center hover:bg-gray-300 rounded-xl px-1">
        <House />
        Home
      </span>
      <span className="flex gap-8 w-45 h-10 items-center hover:bg-gray-300 rounded-xl px-1">
        <Clapperboard />
        Shorts
      </span>
      <hr className="w-55 border-gray-300 mt-5 -ml-6" />

      {/* Subscriptions */}
      <h5 className="flex gap-4 hover:bg-gray-300 rounded-xl h-10 items-center px-1 mt-2">
        <span className="font-bold">Subscriptions</span>
        {">"}
      </h5>
      <div>
        {SUBSCRIPTIONS.map(({ name, imageSource }) => (
          <p className="flex gap-8 items-center hover:bg-gray-300 h-10 rounded-xl">
            <span className="rounded-full h-7 w-7 overflow-hidden">
              <img src={imageSource} className="h-full w-full" />
            </span>
            {name}
          </p>
        ))}
      </div>
      <hr className="w-55 border-gray-300 mt-5 -ml-6" />

      {/* You */}
      <div className="flex flex-col">
        <h5 className="flex gap-4 hover:bg-gray-300 rounded-xl h-10 items-center px-1 mt-2">
          <span className="font-bold">You</span>
          {">"}
        </h5>
        <p className="flex gap-8 hover:bg-gray-300 h-10 items-center rounded-xl p-1">
          <History /> History
        </p>
        <p className="flex gap-8 hover:bg-gray-300 h-10 items-center rounded-xl p-1">
          <ListMusic /> Play Lists
        </p>
        <p className="flex gap-8 hover:bg-gray-300 h-10 items-center rounded-xl p-1">
          <Clock /> Watch Later
        </p>
        <p className="flex gap-8 hover:bg-gray-300 h-10 items-center rounded-xl p-1">
          <ThumbsUp /> Liked Videos
        </p>
        <p className="flex gap-8 hover:bg-gray-300 h-10 items-center rounded-xl p-1">
          <Youtube /> Your Videos
        </p>
      </div>
      <hr className="w-55 border-gray-300 mt-5 -ml-6" />

      {/* explore */}
      <div className="flex flex-col mt-2">
        <h5 className="flex gap-3  h-10 items-center font-bold">Explore</h5>
        <p className="flex gap-8 h-10 items-center rounded-xl p-1 hover:bg-gray-300">
          <span>
            <Music2 />
          </span>
          Music
        </p>
        <p className="flex gap-8 h-10 items-center rounded-xl p-1 hover:bg-gray-300">
          <span>
            <TvMinimalPlay />
          </span>
          Movies
        </p>
        <p className="flex gap-8 h-10 items-center rounded-xl p-1 hover:bg-gray-300">
          <span>
            <Gamepad2 />
          </span>
          Gaming
        </p>
      </div>

      <hr className="w-55 border-gray-300 mt-5 -ml-6" />

      {/* Settings */}
      <div className="mt-2 flex flex-col gap-2">
        <p className="flex gap-8"><Settings/>Settings</p>
        <p>Report history</p>
        <p>Help</p>
        <p>Send feedback</p>
        <hr className="w-55 border-gray-300 mt-5 -ml-6" />
      </div>
    </section>
  );

  return detailedSideBar;
}
