import Globe from "react-globe.gl";
import * as d3 from "d3";

function TopBottomTextLayout({ upperText, lowerText }: { upperText: string; lowerText: string; }) {
  return (
    <div className="border-white border-2 rounded flex-1">

    </div>
  );
}

async function fetchData() {
  const airportParse = ([airportId, name, city, country, iata, icao, lat, lng, alt, timezone, dst, tz, type, source]) => ({ airportId, name, city, country, iata, icao, lat, lng, alt, timezone, dst, tz, type, source });
  const routeParse = ([airline, airlineId, srcIata, srcAirportId, dstIata, dstAirportId, codeshare, stops, equipment]) => ({ airline, airlineId, srcIata, srcAirportId, dstIata, dstAirportId, codeshare, stops, equipment});

  const [airportData, routes] = await Promise.all([
    fetch('https://raw.githubusercontent.com/jpatokal/openflights/master/data/airports.dat').then(res => res.text())
    .then(d => d3.csvParseRows(d, airportParse)),
    fetch('https://raw.githubusercontent.com/jpatokal/openflights/master/data/routes.dat').then(res => res.text())
    .then(d => d3.csvParseRows(d, routeParse))
  ])

  const byIata = indexBy(airports, 'iata', false);

  const routeData = routes
  .filter(d => byIata.hasOwnProperty(d.srcIata) && byIata.hasOwnProperty(d.dstIata)) // exclude unknown airports
  .filter(d => d.stops === '0') // non-stop flights only
  .map(d => Object.assign(d, {
    srcAirport: byIata[d.srcIata],
    dstAirport: byIata[d.dstIata]
  }))
  .filter(d => d.srcAirport.country === COUNTRY && d.dstAirport.country !== COUNTRY); // international routes from country

  return { airportData, routeData };
}

export default async function Home() {

  const { airportData, routeData } = await fetchData();

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
        <Globe 
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          arcsData={routeData}
          arcLabel={d => `${d.airline}: ${d.srcIata} &#8594; ${d.dstIata}`}
          arcStartLat={d => +d.srcAirport.lat}
          arcStartLng={d => +d.srcAirport.lng}
          arcEndLat={d => +d.dstAirport.lat}
          arcEndLng={d => +d.dstAirport.lng}
          arcDashLength={0.25}
          arcDashGap={1}
          arcDashInitialGap={() => Math.random()}
          arcDashAnimateTime={4000}
          arcColor={d => [`rgba(0, 255, 0, ${OPACITY})`, `rgba(255, 0, 0, ${OPACITY})`]}
          arcsTransitionDuration={0}

          pointsData={airportData}
          pointColor={() => 'orange'}
          pointAltitude={0}
          pointRadius={0.02}
          pointsMerge={true}
        />
      </div>
    </div>
  );
}
