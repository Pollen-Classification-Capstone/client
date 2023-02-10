import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import MapChart, { MapChartWrapper } from "../components/MapChart";
import { useState } from "react";
import { GetServerSideProps } from "next";
import prisma from "../lib/prisma";
import GraphChart from "@/components/GraphChart";

export default function Home(props: any, result: any) {
  const [data, setData] = useState();
  const [selectedLocation, setSelectedLocation] = useState("Toronto");
  const [rawData, setRawData] = useState(false);
  const locations = ["Toronto", "Hamilton"];

  let rawDataObject;
  let filteredDataObject;

  const hamiltonDataRaw = props.feed.filter(
    (element: any) => element.index > 5000
  );
  const torontoDataRaw = props.feed.filter(
    (element: any) => element.index < 5000
  );

  const hamiltonData = props.result.filter(
    (element: any) => element.index > 5000
  );
  const torontoData = props.result.filter(
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
    <div className="">
      <Image
        src="/images/the-pollen-project-low-resolution-logo-color-on-transparent-background.png"
        width={100}
        height={50}
        alt="The Pollen Project Logo"
        className="p-1"
      />
      <div className={`rounded text-sm wrap flex justify-center p-4 `}>
        <div className="border-2  justify-center w-2/12">
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
        <div className=" w-8/12 px-8">
          <GraphChart
            dataLocation={selectedLocation}
            graphData={filteredDataObject}
          />
        </div>
      </div>
      <div className="">{rawData && JSON.stringify(rawDataObject)}</div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const feed = await prisma.pollen_data.findMany({ take: 10000 });
  const result = await prisma.$queryRaw`SELECT 
index,
CASE greatest (p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12)
WHEN p1  THEN '1'
WHEN p2  THEN '2'
WHEN p3  THEN '3'
WHEN p4  THEN '4'
WHEN p5  THEN '5'
WHEN p6  THEN '6'
WHEN p7  THEN '7'
WHEN p8  THEN '8'
WHEN p9  THEN '9'
WHEN p10  THEN '10'
WHEN p11  THEN '11'
WHEN p12  THEN '12'
END AS Selected_type
FROM public.pollen_data;`;

  return {
    props: { feed, result },
  };
};
