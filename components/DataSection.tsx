import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";

import GraphChart from "./GraphChart";
import MapChartWrapper from "./MapChart";

export const DataSection = (props: any) => {
  const [data, setData] = useState();
  const [selectedLocation, setSelectedLocation] = useState("Toronto");
  const [rawData, setRawData] = useState(false);
  const locations = [
    "Toronto",
    "Hamilton",
    "Vancouver",
    "New York City",
    "Miami",
  ];

  let rawDataObject;
  let filteredDataObject;
  const dataFetch = {
    feed: ["feed"],
    result: ["result"],
  };

  //Feed
  const hamiltonDataRaw = props.props.feed.filter(
    (element: any) => 0 < element.index && element.index < 2000
  );
  const torontoDataRaw = props.props.feed.filter(
    (element: any) => 2000 < element.index && element.index < 4000
  );
  const vancouverDataRaw = props.props.feed.filter(
    (element: any) => 4000 < element.index && element.index < 6000
  );
  const newYorkCityDataRaw = props.props.feed.filter(
    (element: any) => 6000 < element.index && element.index < 8000
  );
  const miamiDataRaw = props.props.feed.filter(
    (element: any) => 8000 < element.index && element.index < 10000
  );

  //Result
  const hamiltonData = props.props.result.filter(
    (element: any) => 0 < element.index && element.index < 2000
  );
  const torontoData = props.props.result.filter(
    (element: any) => 2000 < element.index && element.index < 4000
  );
  const vancouverData = props.props.result.filter(
    (element: any) => 4000 < element.index && element.index < 6000
  );
  const newYorkCityData = props.props.result.filter(
    (element: any) => 6000 < element.index && element.index < 8000
  );
  const miamiData = props.props.result.filter(
    (element: any) => 8000 < element.index && element.index < 10000
  );

  if (selectedLocation === "Toronto") {
    rawDataObject = torontoDataRaw;
    filteredDataObject = torontoData;
  } else if (selectedLocation === "Hamilton") {
    rawDataObject = hamiltonDataRaw;
    filteredDataObject = hamiltonData;
  } else if (selectedLocation === "Vancouver") {
    rawDataObject = vancouverDataRaw;
    filteredDataObject = vancouverData;
  } else if (selectedLocation === "New York City") {
    rawDataObject = newYorkCityDataRaw;
    filteredDataObject = newYorkCityData;
  } else if (selectedLocation === "Miami") {
    rawDataObject = miamiDataRaw;
    filteredDataObject = miamiData;
  }
  const fetchData = async () => {
    //rerender page hack
  };
  return (
    <div className={`rounded text-sm flex  bg-white`}>
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
      <div className="">{rawData && JSON.stringify(rawDataObject)}</div>
    </div>
  );
};

export default DataSection;
