import React from "react";

import BarChart from "../../components/bar-chart/BarChart";
import DoughnutChart from "../../components/doughnut-chart/DoughnutChart";
import PieChart from "../../components/pie-chart/PieChart";
import { pops } from "@/app/utils/font";
import styles from "./VillageStatistics.module.css";

function VillageStatistics() {
  return (
    <div className={`${styles.container_content} row`}>
      <div className={`col col-8 ${styles.bar_chart_container}`}>
        <div className={`${styles.title_container} ${pops.className}`}>
          <h1>Statistik Desa</h1>
          <p>
          Berikut adalah statistik mengenai desa anda
          </p>
        </div>
        <BarChart />
      </div>
      <div
        className={`col col-4 ${styles.doughnut_pie_container} d-flex flex-column gap-4`}
      >
        <DoughnutChart />
        <PieChart />
      </div>
    </div>
  );
}

export default VillageStatistics;
