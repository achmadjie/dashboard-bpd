import React from "react";
import TableLinmas from "@/app/components/table-linmas/TableLinmas";
import SideBar from "@/app/components/side-bar/SideBar";

import styles from "./ListLinmas.module.css";

function ListLinmas() {
  return (
    <div className={`${styles.container_content_section} d-flex gap-3`}>
      <SideBar />
      <div className={`${styles.container_content} d-flex flex-column gap-4`}>
        <TableLinmas />
      </div>
    </div>
  );
}

export default ListLinmas;
