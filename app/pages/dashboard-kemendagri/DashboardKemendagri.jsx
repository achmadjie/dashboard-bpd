// "use client";

import React from "react";

import SideBar from "../../components/side-bar/SideBar";
import DashboardContentKemendagri from "@/app/components/dashboard-content-kemendagri/DashboardContentKemendagri";
import styles from "./DashboardKemendagri.module.css";

function DashboardKemendagri() {
  return (
    <div className={`${styles.container_content_section} d-flex gap-3`}>
      <SideBar />
      <div className={`${styles.container_content} d-flex flex-column gap-4`}>
        <DashboardContentKemendagri />
      </div>
    </div>
  );
}

export default DashboardKemendagri;
