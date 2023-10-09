"use client";

import React from "react";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { Montserrat } from "next/font/google";

import styles from "./PieChart.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const montserratFont = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});

function PieChart() {
  const data = {
    labels: ["Laki-Laki", "Perempuan"],
    datasets: [
      {
        label: "Jenis Kelamin Linmas",
        data: [3693, 285],
        backgroundColor: ["#3AA2DD", "#FFB800"],
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Jenis Kelamin Linmas",
        font: { family: "Montserrat", size: 20 },
        color: "#000",
        align: "center",
      },
    },
  };

  const informationGender = [
    { id: 1, infoGender: "Laki-Laki" },
    { id: 2, infoGender: "Perempuan" },
  ];

  return (
    <div className={`${styles.pie_container}`}>
      <Pie data={data} options={options} />
      <div
        className={`${styles.information_section} ${montserratFont.className} d-flex flex-column gap-3 justify-content-center mx-auto`}
      >
        <>
          {informationGender.map((item) => {
            return (
              <>
                <div
                  key={item.id}
                  className={`${styles.information_container} d-flex align-items-center gap-2`}
                >
                  <div
				  key={item.id}
                    className={`${styles.color_gender} ${
                      item.infoGender === "Laki-Laki"
                        ? styles.color_age_blue
                        : ""
                    }
                    ${
                      item.infoGender === "Perempuan"
                        ? styles.color_age_yellow
                        : ""
                    }
                    `}
                  ></div>
                  <span key={item.id}>{item.infoGender}</span>
                </div>
              </>
            );
          })}
        </>
      </div>
    </div>
  );
}

export default PieChart;
