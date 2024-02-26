import Videos from "./Videos";

export default function Home() {
  return (
    <div className="flex justify-center  items-center mt-5  bg-slate-100">
      <div className="w-80 h-144  border rounded-lg overflow-hidden bg-slate-100">
        <Videos />
      </div>
      <div className="w-80 h-144  border rounded-lg overflow-hidden bg-slate-100">
        <Videos />
      </div>

      {/* app goes here */}
      {/* feed */}
      {/* widgets */}
      {/* video */}
      {/* <video /> */}
    </div>
  );
}
