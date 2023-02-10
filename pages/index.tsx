import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import MapChart, { MapChartWrapper } from "../components/MapChart";
import { useState } from "react";
import { GetServerSideProps } from "next";
import prisma from "../lib/prisma";
import GraphChart from "@/components/GraphChart";

export default function Home(props: any) {
  const [data, setData] = useState();
  const [selectedLocation, setSelectedLocation] = useState("Toronto");
  const [rawData, setRawData] = useState(false);
  const locations = ["Toronto", "Hamilton"];

  let rawDataObject;

  const hamiltonData = props.feed.filter((element: any) => element.index > 10);

  const torontoData = props.feed.filter((element: any) => element.index < 10);

  if (selectedLocation === "Toronto") {
    rawDataObject = torontoData;
  } else if (selectedLocation === "Hamilton") {
    rawDataObject = hamiltonData;
  }
  const fetchData = async (e: React.SyntheticEvent) => {};

  return (
    <div className="">
      <div className={`flex-nowrap rounded text-sm `}>
        <div className="border-2 w-8/12">
          <MapChartWrapper setSelectedLocation={setSelectedLocation} />
        </div>
        <div className="px-2 flex-nowrap">
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
          <div className="py-2">
            {" "}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex"
              onClick={fetchData}
            >
              {" "}
              Fetch Latest Data
            </button>
          </div>
        </div>
        <GraphChart dataLocation={selectedLocation} graphData={props} />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex"
          onClick={() => setRawData(!rawData)}
        >
          {" "}
          {rawData ? "Hide Raw Data" : "Reveal Raw Data"}
        </button>
        {rawData && JSON.stringify(rawDataObject)}
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const feed = await prisma.pollen_data.findMany({ take: 20 });
  return {
    props: { feed },
  };
};
