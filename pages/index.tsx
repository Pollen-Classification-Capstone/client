import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import MapChart from "../components/MapChart";
import { useState } from "react";
import { GetServerSideProps } from "next";
import prisma from "../lib/prisma";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  const [data, setData] = useState();
  const fetchData = async (e: React.SyntheticEvent) => {
    fetch("api/QUERY_TABLE")
      .then((data) => {
        console.log("Success");
        return data.json();
      })
      .then((data) => {
        setData(data);
      });
  };

  let test = data;
  return (
    <div className="text-blue-600">
      <div>Select A Location</div>
      <div className="border-2 w-8/12">
        <MapChart />
      </div>

      <div>Table Content Here</div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={fetchData}
      >
        {" "}
        Test
      </button>
      {data && <div>{JSON.stringify(props)}</div>}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const feed = await prisma.pollen_data.findMany({});
  return {
    props: { feed },
  };
};
