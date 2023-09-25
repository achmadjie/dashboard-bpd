import React from "react";
import { FiDownload, FiSearch, FiEdit } from "react-icons/fi";
import { IoAddSharp } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import { Poppins } from "next/font/google";

import styles from "./TableLinmas.module.css";

const pops = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});

const tableHeader = [
  "No.",
  "Nama Linmas",
  "Gender",
  "Umur",
  "No. KTA",
  "RT/RW",
  "Status",
  "Aksi",
];

const tableData = [
  {
    id: 0,
    no: 1,
    name: "Hans Julio M.",
    gender: "L",
    age: "25 Tahun",
    numKTA: 58159321,
    numRTRW: "001/005",
    status: "Aktif",
    action: FiEdit,
  },
  {
    id: 1,
    no: 2,
    name: "Dony Prastiya",
    gender: "L",
    age: "25 Tahun",
    numKTA: 58159321,
    numRTRW: "001/005",
    status: "Aktif",
    action: FiEdit,
  },
  {
    id: 2,
    no: 3,
    name: "Ahsan Mubariz",
    gender: "L",
    age: "25 Tahun",
    numKTA: 58159321,
    numRTRW: "001/005",
    status: "Aktif",
    action: FiEdit,
  },
  {
    id: 3,
    no: 4,
    name: "Syifa Tri Gardini",
    gender: "P",
    age: "25 Tahun",
    numKTA: 58159321,
    numRTRW: "001/005",
    status: "Non-Aktif",
    action: FiEdit,
  },
  {
    id: 4,
    no: 5,
    name: "Syifa Tri Gardini",
    gender: "P",
    age: "25 Tahun",
    numKTA: 58159321,
    numRTRW: "001/005",
    status: "Non-Aktif",
    action: FiEdit,
  },
  {
    id: 5,
    no: 6,
    name: "Syifa Tri Gardini",
    gender: "P",
    age: "25 Tahun",
    numKTA: 58159321,
    numRTRW: "001/005",
    status: "Non-Aktif",
    action: FiEdit,
  },
  {
    id: 6,
    no: 7,
    name: "Hans Julio M.",
    gender: "L",
    age: "25 Tahun",
    numKTA: 58159321,
    numRTRW: "001/005",
    status: "Aktif",
    action: FiEdit,
  },
  {
    id: 8,
    no: 9,
    name: "Dony Prastiya",
    gender: "L",
    age: "25 Tahun",
    numKTA: 58159321,
    numRTRW: "001/005",
    status: "Aktif",
    action: FiEdit,
  },
  {
    id: 9,
    no: 10,
    name: "Ahsan Mubariz",
    gender: "L",
    age: "25 Tahun",
    numKTA: 58159321,
    numRTRW: "001/005",
    status: "Aktif",
    action: FiEdit,
  },
  {
    id: 10,
    no: 11,
    name: "Syifa Tri Gardini",
    gender: "P",
    age: "25 Tahun",
    numKTA: 58159321,
    numRTRW: "001/005",
    status: "Non-Aktif",
    action: FiEdit,
  },
  {
    id: 11,
    no: 12,
    name: "Syifa Tri Gardini",
    gender: "P",
    age: "25 Tahun",
    numKTA: 58159321,
    numRTRW: "001/005",
    status: "Non-Aktif",
    action: FiEdit,
  },
  {
    id: 12,
    no: 13,
    name: "Syifa Tri Gardini",
    gender: "P",
    age: "25 Tahun",
    numKTA: 58159321,
    numRTRW: "001/005",
    status: "Non-Aktif",
    action: FiEdit,
  },
];

function TableLinmas() {
  return (
    <div
      className={`${styles.table_linmas_container} container-fluid ${pops.className}`}
    >
      <div
        className={`${styles.title_search_sort_container} d-flex flex-column gap-4`}
      >
        <div
          className={`${styles.title_add_export_container} d-flex align-items-end justify-content-between`}
        >
          <div className={`${styles.title_container}`}>
            <h1>List Linmas</h1>
            <span>
              Berikut adalah list dari linmas yang terdaftar di desa ini
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
          className={`${styles.search_sort_bar_container} d-flex justify-content-between gap-3`}
        >
          <div
            className={`${styles.search_bar} d-flex align-items-center justify-content-between`}
          >
            Cari Linmas...
            <FiSearch className={`${styles.search_bar_icon}`} />
          </div>
          <div
            className={`${styles.sort_bar} d-flex align-items-center justify-content-between`}
          >
            Sort
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
                      className={`${styles.table_data_name} text-start`}
                      key={data.id}
                    >
                      {data.name}
                    </td>
                    <td className={`${styles.table_data_gender}`} key={data.id}>
                      {data.gender}
                    </td>
                    <td className={`${styles.table_data_age}`} key={data.id}>
                      {data.age}
                    </td>
                    <td className={`${styles.table_data_numKTA}`} key={data.id}>
                      {data.numKTA}
                    </td>
                    <td
                      className={`${styles.table_data_numRTRW}`}
                      key={data.id}
                    >
                      {data.numRTRW}
                    </td>
                    {data.status === "Aktif" && (
                      <td
                        key={data.id}
                        className={`${styles.active_linmas} ${styles.table_data_status}`}
                      >
                        {data.status}
                      </td>
                    )}
                    {data.status === "Non-Aktif" && (
                      <td
                        key={data.id}
                        className={`${styles.non_active_linmas} ${styles.table_data_status}`}
                      >
                        {data.status}
                      </td>
                    )}
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

export default TableLinmas;
