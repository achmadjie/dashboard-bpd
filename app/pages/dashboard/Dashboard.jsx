// "use client";

import React from "react";
import SideBar from "../../components/side-bar/SideBar";
import DashboardContent from "@/app/components/dashboard-content/DashboardContent";
import CarouselItem from "@/app/components/carousel/CarouselItem";
import TableListLinmas from "@/app/components/table-list-linmas/TableListLinmas";
import styles from "./Dashboard.module.css";

function Dashboard() {
  return (
    <div className={`${styles.container_content_section} d-flex gap-3`}>
      <SideBar />
      <div className={`${styles.container_content} d-flex flex-column gap-4`}>
        <DashboardContent />
        <CarouselItem />
        <TableListLinmas />
      </div>
    </div>
  );
}

export default Dashboard;
