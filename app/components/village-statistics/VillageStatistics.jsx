import React from "react";

import styles from "./VillageStatistics.module.css";
import BarChart from "../bar-chart/BarChart";
import SideBar from "../side-bar/SideBar";
import DoughnutChart from "../doughnut-chart/DoughnutChart";
import PieChart from "../pie-chart/PieChart";

function VillageStatistics() {
  return (
    <div className={`${styles.container_content_section} d-flex gap-3 container-fluid`}>
      <SideBar />
      <div className={`${styles.container_content} row`}>
        <div className={`col col-8 ${styles.bar_chart_container}`}>
          <BarChart />
        </div>
        <div className={`col col-4 ${styles.doughnut_pie_container} d-flex flex-column gap-4`}>
          <DoughnutChart />
          <PieChart />
        </div>
      </div>
    </div>
  );
}

export default VillageStatistics;
