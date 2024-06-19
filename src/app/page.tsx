export default async function Home() {
  return (
    <div className="bg-slate-950 flex flex-1 h-screen flex-row">
      <div className="flex flex-col w-2/5 text-white align-middle h-full border-blue-100 border-2 justify-center">
        <div className="flex-1">
          <p>Hello! John Doe</p>
        </div>
        <div className="border-white border-2 rounded flex-1">
          Events
        </div>
        <div className="border-white border-2 rounded flex-1">
          Flights
        </div>
        <div className="flex flex-row flex-1">
          <div className="border-white border-2 rounded flex-1">
            Flight Time
          </div>
          <div className="border-white border-2 rounded flex-1">
            Flight Distance
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex flex-col flex-1">
        Globe
      </div>
    </div>
  );
}
