export default function Post({
  thumbNail,
  heading,
  profilePicture,
  accountName,
  viewCount,
  timePosted,
}) {
  return (
    <div className="border rounded-2xl min-w-60 min-h-90">
      <div
        className="border rounded-2xl h-70 overflow-hidden hover:bg-gray-200 hover:min-w-62 flex justify-center
      transform transition duration-250 ease-out hover:scale-102
      "
      >
        <img src={thumbNail} alt="" className=" h-screen w-full" />
      </div>

      <p className="flex gap-2 mt-3 font-bold">
        <div className="border h-10 w-10 rounded-full overflow-hidden ">
          <img src={profilePicture} alt="" className="h-full w-full" />
        </div>
        {heading}
      </p>
      <p className="ml-11">{accountName}</p>
      <p className="ml-11">{viewCount} . { timePosted }</p>
    </div>
  );
}
