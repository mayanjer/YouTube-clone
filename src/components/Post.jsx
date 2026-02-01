export default function Post({image, heading}) {
  return (
    <div className="border rounded-2xl min-w-60 min-h-90">
      <div className="border rounded-2xl h-70">
        <h2>{image}</h2>
      </div>
      <p>{heading}</p>
    </div>
  );
}
