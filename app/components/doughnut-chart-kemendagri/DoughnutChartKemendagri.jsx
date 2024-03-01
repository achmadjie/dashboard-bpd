"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js/auto";
// import { mons } from "@/app/utils/font";

import styles from "./DoughnutChartKemendagri.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Remaja (12 - 17 Thn)", "Dewasa (17 - 63 Thn)", "Lanjut Usia ( > 63 Thn)"],
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
      font: { family: "Montserrat", size: 18 },
      color: "#000",
      align: "center",
    },
  },
};

// const informationAge = [
//   { id: 1, color: "#3AA2DD", infoAge: "Remaja (12 - 17 Thn)" },
//   { id: 2, color: "#F05153", infoAge: "Dewasa (17 - 63 Thn)" },
//   { id: 3, color: "#FFB800", infoAge: "Lanjut Usia ( > 63 Thn)" },
// ];

function DoughnutChartKemendagri() {
  return (
    <div className={`${styles.doughnut_container} d-flex`}>
      <Doughnut data={data} options={options} />
      {/* <div
        className={`${styles.information_section} ${montserratFont.className} d-flex flex-column gap-3 justify-content-start mx-auto`}
      >
        <>
          {informationAge.map((item) => {
            return (
              <>
                <div
                  key={item.id}
                  className={`${styles.information_container} d-flex justify-content-start align-items-start gap-2`}
                >
                  <div
                  key={item.id}
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
                  <span key={item.id}>{item.infoAge}</span>
                </div>
              </>
            );
          })}
        </>
      </div> */}
    </div>
  );
}

export default DoughnutChartKemendagri;
