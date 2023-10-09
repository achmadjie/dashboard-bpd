"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js/auto";
import { Montserrat } from "next/font/google";

import styles from "./DoughnutChart.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const montserratFont = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});

const data = {
  labels: ["Remaja", "Dewasa", "Lanjut Usia"],
  datasets: [
    {
      label: "Demografi Umur Linmas",
      data: [143000, 125300, 51300],
      backgroundColor: ["#3AA2DD", "#F05153", "#FFB800"],
    },
  ],
};

const options = {
  plugins: {
    title: {
      display: true,
      text: "Demografi Umur Linmas",
      font: { family: "Montserrat", size: 20 },
      color: "#000",
      align: "center",
    },
  },
};

const informationAge = [
  { id: 1, color: "#3AA2DD", infoAge: "Remaja (12 - 17 Thn)" },
  { id: 2, color: "#F05153", infoAge: "Dewasa (17 - 63 Thn)" },
  { id: 3, color: "#FFB800", infoAge: "Lanjut Usia ( > 63 Thn)" },
];

function DoughnutChart() {
  return (
    <div className={`${styles.doughnut_container}`}>
      <Doughnut data={data} options={options} />
      <div
        className={`${styles.information_section} ${montserratFont.className} d-flex flex-column gap-3 justify-content-center mx-auto`}
      >
        <>
          {informationAge.map((item) => {
            return (
              <div
                key={item.id}
                className={`${styles.information_container} d-flex align-items-center gap-2`}
              >
                <div
                  className={`${styles.color_age} ${
                    item.infoAge === "Remaja (12 - 17 Thn)"
                      ? styles.color_age_blue
                      : ""
                  }
                    ${
                      item.infoAge === "Dewasa (17 - 63 Thn)"
                        ? styles.color_age_red
                        : ""
                    }
                    ${
                      item.infoAge === "Lanjut Usia ( > 63 Thn)"
                        ? styles.color_age_yellow
                        : ""
                    }
                    `}
                ></div>
                <span>{item.infoAge}</span>
              </div>
            );
          })}
        </>
      </div>
    </div>
  );
}

export default DoughnutChart;
