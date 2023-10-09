import React from "react";
import dynamic from "next/dynamic";
import { FiUsers } from "react-icons/fi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import profile_pic from "../../assets/avatars/profile_picture.png";
import { Poppins } from "next/font/google";
// import InputLinmasModal from "../input-linmas-modal/InputLinmasModal";
// import InputLaporanModal from "../input-laporan-modal/InputLaporanModal";
// import vector_board_1 from "../../assets/vectors/Vector-2.svg"
// import vector_board_2 from "../../assets/vectors/Vector-3.svg"

import styles from "./DashboardContent.module.css";

const InputLinmasModal = dynamic(() =>
  import("../input-linmas-modal/InputLinmasModal")
);
const InputLaporanModal = dynamic(() =>
  import("../input-laporan-modal/InputLaporanModal")
);

function DashboardContent() {
  return (
    <div className={`${styles.dashboard_section}  container-fluid`}>
      <div
        className={`${styles.dashboard_main_container} d-flex gap-5 justify-content-between`}
      >
        <div
          className={`${styles.dashboard_title_active_linmas_container} d-flex flex-column gap-4 justify-content-start`}
        >
          <div className={`${styles.dashboard_title}`}>
            <h1>Dashboard</h1>
            <p>
              Selamat datang di dashboard, Berikut adalah data tentang Satlinmas
              di desa anda
            </p>
          </div>
          <div className={`${styles.board_container} d-flex gap-4`}>
            <div
              className={`${styles.active_board_container} d-flex flex-column justify-content-center`}
            >
              <div
                className={`${styles.active_limas_with_icon} d-flex align-items-start justify-content-between`}
              >
                <FiUsers className={`${styles.user_icon}`}></FiUsers>
                <span>Jumlah Linmas Aktif</span>
              </div>
              <span>9.538</span>
            </div>
            <div
              className={`${styles.board_input_container} d-flex flex-column justify-content-center`}
            >
              <div className={`${styles.linmas_input_container_with_modals}`}>
                <InputLinmasModal />
              </div>
              <div className={`${styles.report_input_container_with_modals}`}>
                <InputLaporanModal />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.head_village_profile_container} d-flex flex-column align-items-center justify-content-end gap-3`}
        >
          <div
            className={`${styles.head_village_title_profile_pic_container} d-flex flex-column align-items-center gap-2`}
          >
            <span>Kepala Desa Menjabat</span>
            <div className={`${styles.profile_picture_container}`}>
              <Image
                className={`${styles.profile_picture} img-fluid`}
                src={profile_pic}
                alt="head_village_photo"
                // width={150}
                priority={true}
              />
            </div>
          </div>
          <div
            className={`${styles.head_village_data_container} d-flex flex-column align-items-center gap-2`}
          >
            <span className={`${styles.head_village_name}`}>
              Andi Achmad Adjie
            </span>
            <div className={`${styles.update_data_with_icon_container}`}>
              <span>Update Data Kepala Desa</span>
              <MdOutlineKeyboardArrowRight
                className={`${styles.arrow_right}`}
              ></MdOutlineKeyboardArrowRight>
            </div>
            <div className={`${styles.rt_rw_container} d-flex gap-2`}>
              <span>Jumlah RW : 24</span>
              <span>Jumlah RT : 75</span>
            </div>
            <hr className={`${styles.rt_rw_line}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardContent;
