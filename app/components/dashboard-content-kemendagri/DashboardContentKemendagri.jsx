import React from "react";
import Image from "next/image";
// import dynamic from "next/dynamic";
import { FiUsers, FiSearch } from "react-icons/fi";
import { MdArrowDropDown } from "react-icons/md";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { pops, mons } from "@/app/utils/font";
import LinmasMap from "../../assets/image/map-1.png";
import DoughnutChartKemendagri from "../doughnut-chart-kemendagri/DoughnutChartKemendagri";

import styles from "./DashboardContentKemendagri.module.css";

function DashboardContentKemendagri() {
  return (
    <div
      className={`${styles.dashboard_section} ${pops.className} container-fluid`}
    >
      <div
        className={`${styles.dashboard_main_container} d-flex justify-content-between`}
      >
        <div
          className={`${styles.dashboard_title_active_linmas_container} d-flex flex-column gap-4 justify-content-start`}
        >
          <div className={`${styles.dashboard_title}`}>
            <h1>Dashboard</h1>
            <p>
              Selamat datang di dashboard, Berikut adalah data tentang Satlinmas
              di Indonesia
            </p>
          </div>
          <div className={`${styles.board_container} d-flex gap-5`}>
            <div
              className={`${styles.active_board_container} d-flex flex-column justify-content-between`}
            >
              <div
                className={`${styles.active_limas_with_icon} d-flex align-items-start justify-content-between`}
              >
                <FiUsers className={`${styles.user_icon}`}></FiUsers>
                <span>Jumlah Linmas Aktif</span>
              </div>
              <span className={`${styles.linmas_active_number}`}>9.538</span>
            </div>
            <div
              className={`${styles.board_input_container} d-flex flex-column justify-content-center gap-3`}
            >
              <div
                className={`${styles.village_list_container} d-flex flex-column`}
              >
                <span>List Desa</span>
                <TfiArrowCircleRight
                  className={`${styles.village_list_icon}`}
                />
              </div>
              <div
                className={`${styles.statistics_container} d-flex flex-column`}
              >
                <span>Statistik</span>
                <TfiArrowCircleRight
                  className={`${styles.statistics_icon}`}
                ></TfiArrowCircleRight>
              </div>
            </div>
          </div>
        </div>
        <div className={`d-flex align-items-start justify-content-start`}>
          <DoughnutChartKemendagri />
        </div>
      </div>
      <div
        className={`${styles.linmas_maps_section} d-flex flex-column justify-content-center align-items-center`}
      >
        <div className={`${styles.title_container}`}>
          <h2 className={`${mons.className}`}>
            Persebaran Linmas di Indonesia
          </h2>
        </div>

        <div
          className={`${styles.search_filter_bar_container} d-flex justify-content-between gap-3`}
        >
          <div
            className={`${styles.search_bar} d-flex align-items-center justify-content-between`}
          >
            Cari Desa...
            <FiSearch className={`${styles.search_bar_icon}`} />
          </div>
          <div
            className={`${styles.filter_bar} d-flex align-items-center justify-content-between`}
          >
            Filter Provinsi
            <MdArrowDropDown className={`${styles.filter_bar_icon}`} />
          </div>
        </div>
        <Image
          className={`img-fluid`}
          src={LinmasMap}
          alt="linmas-map-image"
        ></Image>
      </div>
    </div>
  );
}

export default DashboardContentKemendagri;
