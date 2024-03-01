import React from "react";
import { FiDownload, FiSearch } from "react-icons/fi";
import { MdArrowDropDown } from "react-icons/md";
import { pops } from "@/app/utils/font";
import dynamic from "next/dynamic";

const ActiveLinmas = dynamic(() =>
  import("../activate-linmas/ActivateLinmas")
);

const NonActiveLinmas = dynamic(() =>
  import("../non-activate-linmas/NonActivateLinmas")
);

import styles from "./TableLinmasKemendagri.module.css";

const tableHeader = [
  "No.",
  "Nama Linmas",
  "Lokasi",
  "Desa",
  "Gender",
  "Umur",
  "Status",
];

const tableData = [
  {
    id: 0,
    no: 1,
    name: "Hans Julio M.",
    location: "Bali/Badung/Kuta Utara",
    village: "Canggu",
    gender: "L",
    age: "25 Tahun",
    status: "Aktif",
  },
  {
    id: 1,
    no: 2,
    name: "Dony Prastiya",
    location: "Jawa Barat/Bekasi/Bekasi Selatan",
    village: "Kayuringin Jaya",
    gender: "L",
    age: "27 Tahun",
    status: "Aktif",
  },
  {
    id: 2,
    no: 3,
    name: "Hans Julio M.",
    location: "Bali/Badung/Kuta Utara",
    village: "Canggu",
    gender: "L",
    age: "25 Tahun",
    status: "Aktif",
  },
  {
    id: 3,
    no: 4,
    name: "Dony Prastiya",
    location: "Jawa Barat/Bekasi/Bekasi Selatan",
    village: "Kayuringin Jaya",
    gender: "L",
    age: "27 Tahun",
    status: "Aktif",
  },
  {
    id: 4,
    no: 5,
    name: "Hans Julio M.",
    location: "Bali/Badung/Kuta Utara",
    village: "Canggu",
    gender: "L",
    age: "25 Tahun",
    status: "Aktif",
  },
  {
    id: 5,
    no: 6,
    name: "Dony Prastiya",
    location: "Jawa Barat/Bekasi/Bekasi Selatan",
    village: "Kayuringin Jaya",
    gender: "L",
    age: "27 Tahun",
    status: "Aktif",
  },
  {
    id: 6,
    no: 7,
    name: "Hans Julio M.",
    location: "Bali/Badung/Kuta Utara",
    village: "Canggu",
    gender: "L",
    age: "25 Tahun",
    status: "Aktif",
  },
  {
    id: 7,
    no: 8,
    name: "Dony Prastiya",
    location: "Jawa Barat/Bekasi/Bekasi Selatan",
    village: "Kayuringin Jaya",
    gender: "L",
    age: "27 Tahun",
    status: "Aktif",
  },
  {
    id: 8,
    no: 9,
    name: "Hans Julio M.",
    location: "Bali/Badung/Kuta Utara",
    village: "Canggu",
    gender: "L",
    age: "25 Tahun",
    status: "Aktif",
  },
];

function TableLinmasKemendagri() {
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
            <h1>List Linmas Canggu</h1>
            <span>Berikut adalah list Linmas yang ada di Indonesia</span>
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
            {tableHeader.map((item) => {
              return (
                <th
                  className={`${styles.table_header} ${
                    item === "No." ? `${styles.table_title}` : "text-center"
                  }`}
                  key={item}
                >
                  {item}
                </th>
              );
            })}
          </tr>
          {tableData.map((data) => {
            return (
              // <div
              //   key={data.id}
              //   className={`${
              //     data.no % 2 == 0 ? styles.table_blue_column : ``
              //   }`}
              // >
                <tr className={`${styles.data_table} }`} key={data.id}>
                  <td className={`${styles.table_data_number}`}>{data.no}</td>
                  <td className={`${styles.table_data_name} text-start`}>
                    {data.name}
                  </td>
                  <td className={`${styles.table_data_location}`}>
                    {data.location}
                  </td>
                  <td className={`${styles.table_data_village}`}>
                    {data.village}
                  </td>
                  <td className={`${styles.table_data_gender}`}>
                    {data.gender}
                  </td>
                  <td className={`${styles.table_data_age}`}>{data.age}</td>
                  <td className={`${styles.table_data_status}`}>
                    {data.status === "Aktif" ? (
                      <ActiveLinmas />
                    ) : (
                      <NonActiveLinmas />
                    )}
                  </td>
                </tr>
              // </div>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableLinmasKemendagri;
