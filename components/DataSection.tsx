import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Image from "next/image";
import { GetServerSideProps } from "next";
import GraphChart from "./GraphChart";
import MapChartWrapper from "./MapChart";

export const DataSection = () => {
  const [data, setData] = useState();
  const [selectedLocation, setSelectedLocation] = useState("Toronto");
  const [rawData, setRawData] = useState(false);
  const locations = ["Toronto", "Hamilton"];

  let rawDataObject;
  let filteredDataObject;

  const hamiltonDataRaw = dataFetch.feed.filter(
    (element: any) => element.index > 5000
  );
  const torontoDataRaw = dataFetch.feed.filter(
    (element: any) => element.index < 5000
  );

  const hamiltonData = dataFetch.result.filter(
    (element: any) => element.index > 5000
  );
  const torontoData = dataFetch.result.filter(
    (element: any) => element.index < 5000
  );

  if (selectedLocation === "Toronto") {
    rawDataObject = torontoDataRaw;
    filteredDataObject = torontoData;
  } else if (selectedLocation === "Hamilton") {
    rawDataObject = hamiltonDataRaw;
    filteredDataObject = hamiltonData;
  }
  const fetchData = async (e: React.SyntheticEvent) => {};
  return (
    <div className={`rounded text-sm flex `}>
      <div className="border-2   w-5/12">
        <MapChartWrapper setSelectedLocation={setSelectedLocation} />
        <div className="px-2 flex-nowrap  ">
          <div className="">Location Selected:</div>
          <select
            className={`rounded bg-gray-300 py-1 w-6/12`}
            name="Select From List"
            id="Select From List"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            {locations.map((location) => (
              <option value={location}> {location} </option>
            ))}
          </select>
          <div className="flex justify-between py-4 ">
            <div className="  ">
              {" "}
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white p-1 font-bold rounded flex"
                onClick={fetchData}
              >
                {" "}
                Fetch Latest Data
              </button>
            </div>
            <div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold  p-1 rounded flex"
                onClick={() => setRawData(!rawData)}
              >
                {" "}
                {rawData ? "Hide Raw Data" : "Reveal Raw Data"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <GraphChart
          dataLocation={selectedLocation}
          graphData={filteredDataObject}
        />
      </div>
      {/* <div className="">{rawData && JSON.stringify(rawDataObject)}</div> */}
    </div>
  );
};

export default DataSection;
