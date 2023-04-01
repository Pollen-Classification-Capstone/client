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
    <div className="bg-black py-36 px-12 flex justify-end">
      <Image
        src="/images/spring-pollen-allergies.jpg"
        width={600}
        height={1200}
        alt="The Pollen Project Logo"
        className="  "
      />
    </div>
  );
};

export default LandingPage;
