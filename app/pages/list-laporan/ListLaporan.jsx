import React from 'react'
import SideBar from "@/app/components/side-bar/SideBar";
import TableLaporan from '@/app/components/table-laporan/TableLaporan';
import styles from "./ListLaporan.module.css"

function ListLaporan() {
  return (
	<div className={`${styles.container_content_section} d-flex gap-3`}>
      <SideBar />
      <div className={`${styles.container_content} d-flex flex-column gap-4`}>
        <TableLaporan />
      </div>
    </div>
  )
}

export default ListLaporan