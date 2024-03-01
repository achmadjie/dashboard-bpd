// "use client";

import React from "react";
import {
  MdOutlineKeyboardArrowRight,
  // MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { pops } from "@/app/utils/font";
import Link from "next/link";
import ActiveLinmas from "../activate-linmas/ActivateLinmas";
import NonActiveLinmas from "../non-activate-linmas/NonActivateLinmas";
import EditLinmasModal from "../edit-linmas-modal/EditLinmasModal";

import styles from "./TableListLinmas.module.css";

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
    action: EditLinmasModal,
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
    action: EditLinmasModal,
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
    action: EditLinmasModal,
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
    action: EditLinmasModal,
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
    action: EditLinmasModal,
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
    action: EditLinmasModal,
  },
];

function TableListLinmas() {
  return (
    <div
      className={`${styles.tablelistlinmas_container} ${pops.className} container-fluid p-0`}
    >
      <div
        className={`${styles.title_with_see_more_container} d-flex justify-content-between align-items-center`}
      >
        <div
          className={`${styles.title_with_active_inactive_number_container} d-flex align-items-center gap-4`}
        >
          <span className={`${styles.title_text}`}>List Linmas</span>
          <div
            className={`${styles.active_inactive_number_container} d-flex flex-column`}
          >
            <span className={`${styles.active_text}`}>Aktif : 9.538</span>
            <span className={`${styles.inactive_text}`}>Non-Aktif : 2.602</span>
          </div>
        </div>
        <Link href="/pages/list-linmas">
          <div className={`${styles.see_more_container}`}>
            <span>Lihat Semua</span>
            <MdOutlineKeyboardArrowRight
              className={`${styles.arrow_for_more}`}
            />
          </div>
        </Link>
      </div>
      <hr className={`${styles.table_line}`} />
      <table
        className={`${styles.table_linmas_container} mt-1 d-flex justify-content-center`}
      >
        <tbody className={`${styles.table_body}`}>
          <tr className={``}>
            {tableHeader.map((item) => {
              return (
                <th
                  key={item}
                  className={`${styles.table_header} ${
                    item === "Nama Linmas" ? `text-start` : `text-center`
                  }`}
                >
                  {item}
                </th>
              );
            })}
          </tr>
          {tableData.map((data) => {
            return (
              <>
                {/* <div
                    key={data.id}
                    className={`${
                      data.no % 2 === 0 ? styles.table_data_background : ``
                    }`}
                  > */}
                <tr className={`${styles.data_table}`} key={data.id}>
                  <td className={`${styles.table_data_number}`}>{data.no}</td>
                  <td className={`${styles.table_data_name} text-start`}>
                    {data.name}
                  </td>
                  <td className={`${styles.table_data_gender}`}>
                    {data.gender}
                  </td>
                  <td className={`${styles.table_data_age}`}>{data.age}</td>
                  <td className={`${styles.table_data_numKTA}`}>
                    {data.numKTA}
                  </td>
                  <td className={`${styles.table_data_numRTRW}`}>
                    {data.numRTRW}
                  </td>
                  <td className={`${styles.table_data_status}`}>
                    {data.status === "Aktif" ? (
                      <ActiveLinmas />
                    ) : (
                      <NonActiveLinmas />
                    )}
                  </td>
                  <td className={`${styles.table_data_action}`}>
                    <data.action />
                  </td>
                </tr>
                {/* </div> */}
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableListLinmas;
