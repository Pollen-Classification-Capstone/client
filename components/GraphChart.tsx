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
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export interface GraphChartProps {
  dataLocation: string;
  graphData: any;
}
export const GraphChart = ({ dataLocation, graphData }: GraphChartProps) => {
  let p1 = 0,
    p2 = 0,
    p3 = 0,
    p4 = 0,
    p5 = 0,
    p6 = 0,
    p7 = 0,
    p8 = 0,
    p9 = 0,
    p10 = 0,
    p11 = 0,
    p12 = 0;

  graphData.map((element: any) => {
    if (element.selected_type == "12") {
      p12 += 1;
    } else if (element.selected_type == "11") {
      p11 += 1;
    } else if (element.selected_type == "10") {
      p10 += 1;
    } else if (element.selected_type == "9") {
      p9 += 1;
    } else if (element.selected_type == "8") {
      p8 += 1;
    } else if (element.selected_type == "7") {
      p7 += 1;
    } else if (element.selected_type == "6") {
      p6 += 1;
    } else if (element.selected_type == "5") {
      p5 += 1;
    } else if (element.selected_type == "4") {
      p4 += 1;
    } else if (element.selected_type == "3") {
      p3 += 1;
    } else if (element.selected_type == "2") {
      p2 += 1;
    } else if (element.selected_type == "1") {
      p1 += 1;
    }
  });

  const labels = [
    "Pollen 1",
    "Pollen 2",
    "Pollen 3",
    "Pollen 4",
    "Pollen 5",
    "Pollen 6",
    "Pollen 7",
    "Pollen 8",
    "Pollen 9",
    "Pollen 10",
    "Pollen 11",
    "Pollen 12",
  ];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: `${dataLocation} Pollen Count`,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: `Number of Pollen Particles`,
        data: [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12],
        backgroundColor: "rgba(29, 100, 141, 0.5)",
      },
    ],
  };

  return (
    <div className="px-12">
      <Bar options={options} data={data} width={650} height={550} />
    </div>
  );
};

export default GraphChart;
