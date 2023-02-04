import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import MapChart from "../components/MapChart";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="text-blue-600">
      <div>Select A Location</div>
      <div className="border-2 w-8/12">
        <MapChart />
      </div>
      <div>Table Content Here</div>
    </div>
  );
}
