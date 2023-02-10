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
        data: labels.map(() => 1),
        backgroundColor: "rgba(29, 100, 141, 0.5)",
      },
    ],
  };

  return (
    <div className="w-1/2">
      <Bar options={options} data={data} />
    </div>
  );
};

export default GraphChart;
