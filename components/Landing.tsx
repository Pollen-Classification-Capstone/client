import React from "react";
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

export const LandingPage = ({}) => {
  return (
    <div className="">
      <div className="absolute">
        <Image
          src="/images/bee-flower.jpg"
          width={2000}
          height={1500}
          alt="The Pollen Project Logo"
          className=""
        />
        <div className="absolute mb-4 bottom-96 px-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white">
          The Pollen Project{" "}
        </div>
        <div className="absolute mb-6 px-12   bottom-80 text-lg font-normal text-gray-500 lg:text-xl  dark:text-gray-400">
          {" "}
          Welcome To the future of Pollen Research{" "}
        </div>
        <button className="absolute mb-6 left-40 p-2 text-md bg-white rounded-xl    bottom-64">
          {" "}
          Find Out More{" "}
        </button>
      </div>
    </div>
  );
};

export default LandingPage;