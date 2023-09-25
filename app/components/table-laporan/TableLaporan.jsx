import React from "react";
import { FiDownload, FiSearch, FiEdit } from "react-icons/fi";
import { IoAddSharp } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import { Poppins } from "next/font/google";

import styles from "./TableLaporan.module.css";

const pops = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});

const tableHeader = [
  "No.",
  "Judul Laporan",
  "Nama Linmas",
  "Jenis",
  "Tanggal",
  "Lampiran",
  "Aksi",
];

const tableData = [
  {
    id: 0,
    no: 1,
    ReportTitle: "CURANMOR Beat Pak Sumardi RT 006/RW 007",
    name: "Hans Julio M.",
    type: "CURANMOR",
    date: "08-06-23",
    attachment: "Lihat",
    action: FiEdit,
  },
  {
    id: 1,
    no: 2,
    ReportTitle: `Pelecehan Seksual Bu Fanny oleh orang tak 
	dikenal RT 006/RW 007`,
    name: "Dony Prastiya",
    type: "Pelecehan",
    date: "08-06-23",
    attachment: "Lihat",
    action: FiEdit,
  },
  {
    id: 2,
    no: 3,
    ReportTitle: `CURANMOR Beat Pak Sumardi RT 006/RW 007`,
    name: "Ahsan Mubariz",
    type: "CURANMOR",
    date: "08-06-23",
    attachment: "Lihat",
    action: FiEdit,
  },
  {
    id: 3,
    no: 4,
    ReportTitle: `Pelecehan Seksual Bu Fanny oleh orang tak 
	dikenal RT 006/RW 007`,
    name: "Syifa Tri Gardini",
    type: "Pelecehan",
    date: "08-06-23",
    attachment: "Lihat",
    action: FiEdit,
  },
  {
    id: 4,
    no: 5,
    ReportTitle: "CURANMOR Beat Pak Sumardi RT 006/RW 007",
    name: "Syifa Tri Gardini",
    type: "CURANMOR",
    date: "08-06-23",
    attachment: "Lihat",
    action: FiEdit,
  },
  {
    id: 5,
    no: 6,
    ReportTitle: `Pelecehan Seksual Bu Fanny oleh orang tak 
	dikenal RT 006/RW 007`,
    name: "Syifa Tri Gardini",
    type: "Pelecehan",
    date: "08-06-23",
    attachment: "Lihat",
    action: FiEdit,
  },
];

function TableLaporan() {
  return (
    <div
      className={`${styles.table_laporan_container} container-fluid ${pops.className}`}
    >
      <div
        className={`${styles.title_search_sort_container} d-flex flex-column gap-4`}
      >
        <div
          className={`${styles.title_add_export_container} d-flex align-items-end justify-content-between`}
        >
          <div className={`${styles.title_container}`}>
            <h1>List Laporan</h1>
            <span>
              Berikut adalah list dari laporan yang terdaftar di desa ini
            </span>
          </div>
          <div className={`${styles.active_add_export_container} d-flex gap-3`}>
            <div
              className={`${styles.active_inactive_container} d-flex flex-column`}
            >
              <span className={`${styles.active_text}`}>Aktif : 9.538</span>
              <span className={`${styles.inactive_text}`}>
                Non-Aktif : 2.602
              </span>
            </div>
            <div
              className={`${styles.add_export_button_container} d-flex gap-3`}
            >
              <button className={`${styles.export_button}`}>
                Export
                <FiDownload className={`${styles.button_icon}`} />
              </button>
              <button className={`${styles.add_button}`}>
                Tambah
                <IoAddSharp className={`${styles.button_icon}`} />
              </button>
            </div>
          </div>
        </div>
        <div
          className={`${styles.search_sort_filter_bar_container} d-flex justify-content-between gap-3`}
        >
          <div
            className={`${styles.search_bar} d-flex align-items-center justify-content-between`}
          >
            Cari Laporan...
            <FiSearch className={`${styles.search_bar_icon}`} />
          </div>
          <div
            className={`${styles.filter_bar} d-flex align-items-center justify-content-between`}
          >
            Filter Jenis
            <MdArrowDropDown className={`${styles.filter_bar_icon}`} />
          </div>
          <div
            className={`${styles.sort_bar} d-flex align-items-center justify-content-between`}
          >
            Sort Tanggal
            <MdArrowDropDown className={`${styles.sort_bar_icon}`} />
          </div>
        </div>
      </div>
      <hr className={`${styles.table_line}`} />
      <table
        className={`${styles.table_linmas_container} mt-1 d-flex justify-content-center`}
      >
        <tbody className={`${styles.table_body}`}>
          <tr className={``}>
            <>
              {tableHeader.map((item) => {
                return (
                  <>
                    <th
                      className={`${styles.table_header} text-center`}
                      key={item}
                    >
                      {item}
                    </th>
                    {/* {item === "Nama Linmas" && (
                    <th className={`${styles.table_header} text-left`}>{item}</th>
                   )} */}
                  </>
                );
              })}
            </>
          </tr>
          <>
            {tableData.map((data) => {
              return (
                <>
                  <tr className={`${styles.data_table}`} key={data.id}>
                    <td className={`${styles.table_data_number}`} key={data.id}>
                      {data.no}
                    </td>
                    <td
                      className={`${styles.table_data_report_title} text-start`}
                      key={data.id}
                    >
                      {data.ReportTitle}
                    </td>
                    <td
                      className={`${styles.table_data_name} text-start`}
                      key={data.id}
                    >
                      {data.name}
                    </td>
                    <td className={`${styles.table_data_type}`} key={data.id}>
                      {data.type}
                    </td>
                    <td className={`${styles.table_data_date}`} key={data.id}>
                      {data.date}
                    </td>
                    <td
                      key={data.id}
                      className={`${styles.table_data_attachment} container`}
                    >
                      {data.attachment}
                    </td>
                    <td className={`${styles.table_data_action}`}>
                      <data.action key={data.id} />
                    </td>
                  </tr>
                </>
              );
            })}
          </>
        </tbody>
      </table>
    </div>
  );
}

export default TableLaporan;
