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
import Link from "next/link";

export const LandingPage = ({}) => {
  return (
    <div>
      <div className="bg-black py-20 left-full px-20 justify-center relative flex  ">
        <Image
          src="/images/spring-pollen-allergies.jpg"
          width={600}
          height={1200}
          alt="The Pollen Project Logo"
          className="  "
        />
      </div>
      <div className="flex justify-center relative ">
        <div>
          <p className="text-white  absolute bottom-96 left-44">
            Hey there, do you know what pollen is? It's those tiny things that
            plants make to help them reproduce. But sometimes scientists want to
            know what kind of pollen it is and it's hard to tell just by looking
            at it.
          </p>
        </div>
        <div className="text-white absolute bottom-64 left-44">
          That's where our advanced pollen classification algorithm comes in! It
          can look at pictures of the pollen and figure out what kind it is all
          by itself. You just need to give it the pictures and it does the rest.
        </div>
        <div className="text-white absolute bottom-32  left-44">
          This algorithm can help identify and measure pollen levels in
          different areas around the world and help give accurate up to date
          measurements. See for yourself with our live demo!
        </div>
        <Link
          href="/#home"
          className=" mb-12   py-2 px-10 text-md bg-white rounded-xl    "
        >
          {" "}
          Try it out!{" "}
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
