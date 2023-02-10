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

export interface NavBarProps {}
export const NavBar = ({}: NavBarProps) => {
  return (
    <div className="">
      <Image
        src="/images/the-pollen-project-low-resolution-logo-color-on-transparent-background.png"
        width={150}
        height={50}
        alt="The Pollen Project Logo"
        className="p-1  "
      />
    </div>
  );
};

export default NavBar;
