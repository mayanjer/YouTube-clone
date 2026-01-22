import { House, Clapperboard, Youtube, UserPen} from "lucide-react";
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
    <section className="ml-6 mt-4 flex flex-col w-55">
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
          <p className="flex gap-8 items-center  text-sm hover:bg-gray-300 h-10 rounded-xl">
            <span className="rounded-full h-7 w-7 overflow-hidden">
              <img src={imageSource} className="h-full w-full" />
            </span>
            {name}
          </p>
        ))}
      </div>
      <hr className="w-55 border-gray-300 mt-5 -ml-6" />
      {/* You */}
      <div>
        <p>hello world!</p>
      </div>
    </section>
  );

  return detailedSideBar;
}
