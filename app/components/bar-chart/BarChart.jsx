"use client";

import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Data } from "../../utils/Data";
import { Montserrat } from "next/font/google";
import styles from "./BarChart.module.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  BarElement,
  Legend,
} from "chart.js/auto";

// Register ChartJS components using ChartJS.register
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const options1 = {
  indexAxis: "y",
  scales: {
    y: {
      type: "category",
    },
  },
  plugins: {
    title: {
      display: true,
      text: "Jenis Laporan Trantibumlinmas",
      // fullSize: true,
      font: { family: "Montserrat", size: 20 },
      color: "#000",
      align: "start",
    },
    // labels: {
    //   font: { family: "Montserrat", size: 28 },
    //   color: "#000",
    //   align: "start",
    // },
  },
  responsive: true,
};

const options2 = {
  indexAxis: "x",
  scales: {
    x: {
      type: "category",
    },
  },
  plugins: {
    title: {
      display: true,
      text: "Taraf Pendidikan Linmas",
      // fullSize: true,
      font: { family: "Montserrat", size: 20 },
      color: "#000",
      align: "start",
    },
  },
};

function BarChart() {
  return (
    <div className={`${styles.bar_container}`}>
      <Bar
        data={{
          font: { family: "Montserrat", size: 28 },
          labels: [
            "CURANMOR",
            "Pelecehan",
            "Kebakaran",
            "Kehilangan",
            "Penipuan",
          ],
          datasets: [
            {
              label: "Jenis Laporan Trantibumlinmas",
              data: [67, 52, 23, 15, 5],
              backgroundColor: [
                "#FFB800",
                "#F05153",
                "#5B9F56",
                "#3AA2DD",
                "#3ADDC9",
              ],
            },
          ],
        }}
        options={options1}
      />

      <Bar
        data={{
          labels: ["N/A", "SD", "SMP", "SMA", "S1"],
          datasets: [
            {
              label: "Taraf Pendidikan Linmas",
              data: [37, 53, 35, 27, 17],
              backgroundColor: [
                "#FFB800",
                "#F05153",
                "#5B9F56",
                "#3AA2DD",
                "#3ADDC9",
              ],
            },
          ],
        }}
        options={options2}
      />
    </div>
  );
}

export default BarChart;
