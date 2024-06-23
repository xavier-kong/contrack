function TopBottomTextLayout({ upperText, lowerText }: { upperText: string; lowerText: string; }) {
  return (
    <div className="border-white border-2 rounded flex-1">

    </div>
  );
}

export default async function Home() {
  return (
    <div className="bg-slate-950 flex flex-1 h-screen flex-row p-20">
      <div className="flex flex-col w-2/5 text-white align-middle h-full border-blue-100 border-2 justify-center">
        <div className="rounded flex-1 flex-col flex pl-5">
          <div className="flex-1 justify-start items-end flex p-1">
            <p className="text-2xl">
              Events
            </p>
          </div>
          <div className="flex-1 justify-start items-start flex p-1">
            <p className="text-5xl font-bold">
              500
            </p>
          </div>
        </div>

        <div className="rounded flex-1 flex-col flex pl-5">
          <div className="flex-1 justify-start items-end flex p-1">
            <p className="text-xl">
              Countries
            </p>
          </div>
          <div className="flex-1 justify-start items-start flex p-1">
            <p className="text-5xl font-bold">
              5
            </p>
          </div>
        </div>

        <div className="rounded flex-1 flex-col flex pl-5">
          <div className="flex-1 justify-start items-end flex p-1">
            <p className="text-2xl">
              Flights
            </p>
          </div>
          <div className="flex-1 justify-start items-start flex p-1">
            <p className="text-5xl font-bold">
              5
            </p>
          </div>
        </div>

        <div className="rounded flex-1 flex-col flex pl-5">
          <div className="flex-1 justify-start items-end flex p-1">
            <p className="text-xl">
              Flight Time
            </p>
          </div>
          <div className="flex-1 justify-start items-start flex p-1">
            <p className="text-5xl font-bold">
              5 mins
            </p>
          </div>
        </div>

        <div className="rounded flex-1 flex-col flex pl-5">
          <div className="flex-1 justify-start items-end flex p-1">
            <p className="text-xl">
              Flight Distance
            </p>
          </div>
          <div className="flex-1 justify-start items-start flex p-1">
            <p className="text-5xl font-bold">
              5km
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 bg-green-900">
        Globe
      </div>
    </div>
  );
}
