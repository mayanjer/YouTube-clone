export default function Post({image, heading}) {
  return (
    <div className="border rounded-2xl min-w-60 min-h-90">
      <div className="border rounded-2xl h-70 overflow-hidden hover:bg-gray-200 hover:min-w-62 flex justify-center">
        
          <img src={image} alt="" className=" h-screen w-full" />
      
      </div>
      <p>{heading}</p>
    </div>
  );
}
