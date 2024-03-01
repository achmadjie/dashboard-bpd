import React from "react";
import { FiDownload, FiSearch } from "react-icons/fi";
import { MdArrowDropDown } from "react-icons/md";
import { pops } from "@/app/utils/font";

import styles from "./TableDesaKemendagri.module.css";

const tableHeader = [
  "Kode",
  "Nama Desa",
  "Provinsi",
  "Kabupaten",
  "Kecamatan",
  "Linmas Aktif",
];

const tableData = [
  {
    id: 0,
    code: "231AB",
    villageName: "Canggu",
    province: "Bali",
    regency: "Bandung",
    subDistrict: "Kuta Utara",
    activeLinmas: 2.315,
  },
  {
    id: 1,
    code: "231FC",
    villageName: "Kayuringin Jaya",
    province: "Jawa Barat",
    regency: "Bekasi",
    subDistrict: "Bekasi Selatan",
    activeLinmas: 5.231,
  },
  {
    id: 2,
    code: "231AB",
    villageName: "Canggu",
    province: "Bali",
    regency: "Bandung",
    subDistrict: "Kuta Utara",
    activeLinmas: 2.315,
  },
  {
    id: 3,
    code: "231FC",
    villageName: "Kayuringin Jaya",
    province: "Jawa Barat",
    regency: "Bekasi",
    subDistrict: "Bekasi Selatan",
    activeLinmas: 5.231,
  },
  {
    id: 4,
    code: "231AB",
    villageName: "Canggu",
    province: "Bali",
    regency: "Bandung",
    subDistrict: "Kuta Utara",
    activeLinmas: 2.315,
  },
  {
    id: 5,
    code: "231FC",
    villageName: "Kayuringin Jaya",
    province: "Jawa Barat",
    regency: "Bekasi",
    subDistrict: "Bekasi Selatan",
    activeLinmas: 5.231,
  },
  {
    id: 6,
    code: "231AB",
    villageName: "Canggu",
    province: "Bali",
    regency: "Bandung",
    subDistrict: "Kuta Utara",
    activeLinmas: 2.315,
  },
  {
    id: 7,
    code: "231FC",
    villageName: "Kayuringin Jaya",
    province: "Jawa Barat",
    regency: "Bekasi",
    subDistrict: "Bekasi Selatan",
    activeLinmas: 5.231,
  },
  {
    id: 8,
    code: "231AB",
    villageName: "Canggu",
    province: "Bali",
    regency: "Bandung",
    subDistrict: "Kuta Utara",
    activeLinmas: 2.315,
  },
  {
    id: 9,
    code: "231FC",
    villageName: "Kayuringin Jaya",
    province: "Jawa Barat",
    regency: "Bekasi",
    subDistrict: "Bekasi Selatan",
    activeLinmas: 5.231,
  },
  {
    id: 10,
    code: "231AB",
    villageName: "Canggu",
    province: "Bali",
    regency: "Bandung",
    subDistrict: "Kuta Utara",
    activeLinmas: 2.315,
  },
];

function TableDesaKemendagri() {
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
            <h1>List Desa</h1>
            <span>Berikut adalah list Desa yang ada di Indonesia</span>
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
                  className={`${styles.table_header} ${`text-start`}`}
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
              <tr
                className={`${styles.data_table}`}
                key={data.id}
              >
                <td className={`${styles.table_data_code} text-start`}>{data.code}</td>
                <td className={`${styles.table_village_name} text-start`}>
                  {data.villageName}
                </td>
                <td className={`${styles.table_data_province} text-start`}>
                  {data.province}
                </td>
                <td className={`${styles.table_data_regency} text-start`}>
                  {data.regency}
                </td>
                <td className={`${styles.table_data_sub_district} text-start`}>
                  {data.subDistrict}
                </td>
                <td className={`${styles.table_data_active_linmas}`}>
                  {data.activeLinmas}
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

export default TableDesaKemendagri;
