"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import linmas_logo from "../../assets/logo/Linmas_Logo-1.svg";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
  MdDashboard,
} from "react-icons/md";
import { HiOutlineClipboardList } from "react-icons/hi";
import { IoLogOutOutline } from "react-icons/io5";
import { BsFolder2Open, BsBarChartLine } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import peruri_logo from "../../assets/logo/powered-by-peruri.svg";
import ChangePassword from "../change-password/ChangePassword";
import { pops } from "@/app/utils/font";

import styles from "./SideBar.module.css";

// const ChangePassword = dynamic(() => import('../change-password/ChangePassword'))

const linmasMenu = [
  "RT/RW",
  "PKK",
  "Karang Taruna",
  "POSYANDU",
  "LPM",
  "LAD",
  "BPD",
  "Kerja Sama",
];

const mainMenu = [
  { id: 1, icon: MdDashboard, name: "Dashboard", menuLink: "/" },
  {
    id: 2,
    icon: HiOutlineClipboardList,
    name: "List Linmas",
    menuLink: "/pages/list-linmas",
  },
  {
    id: 3,
    icon: BsFolder2Open,
    name: "List Laporan",
    menuLink: "/pages/list-laporan",
  },
  {
    id: 4,
    icon: BsBarChartLine,
    name: "Statistik Desa",
    menuLink: "/pages/statistik-desa",
  },
  { id: 5, icon: ChangePassword, name: "", menuLink: "" },
];

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const [toggle, setToggle] = useState(0);

  const updateToggle = (id) => {
    setToggle(id);
  };

  return (
    <div
      className={`${styles.sidebar_container} ${pops.className} d-flex flex-column justify-content-between`}
    >
      <div
        className={`${styles.logo_menu_container} d-flex flex-column justify-content-center gap-5`}
      >
        <div
          className={`${styles.logo_welcome_container} d-flex flex-column justify-content-center gap-3`}
        >
          <div
            className={`${styles.logo_dropdown_container} d-flex align-items-center gap-2`}
          >
            <Image
              className={`${styles.logo} img-fluid`}
              src={linmas_logo}
              alt="linmas-logo"
            />
            <div
              onClick={handleClick}
              className={`${styles.linmas_dropdown_container} position-relative container-fluid p-0`}
            >
              <span className={`${styles.linmas_title}`}>Portal Linmas</span>
              {isOpen ? (
                <MdOutlineKeyboardArrowDown
                  className={`${styles.arrow_icon}`}
                ></MdOutlineKeyboardArrowDown>
              ) : (
                <MdOutlineKeyboardArrowRight
                  className={`${styles.arrow_icon}`}
                ></MdOutlineKeyboardArrowRight>
              )}
              <div
                className={`${styles.dropdown_containter} position-absolute `}
              >
                {isOpen && (
                  <ul>
                    {linmasMenu.map((menu) => {
                      return (
                        <li key={menu} className={`${styles.menu_items}`}>
                          {menu}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div
            className={`${styles.welcome_avatar_container} d-flex align-items-center justify-content-center`}
          >
            <div className={`${styles.avatar_container} d-flex`}>
              {/* <RxAvatar></RxAvatar> */}
              <RxAvatar className={`${styles.avatar_image}`}></RxAvatar>
            </div>
            <div className={`${styles.welcome_container} d-flex flex-column`}>
              <span className={`${styles.welcome_text}`}>
                Selamat Datang Admin,
              </span>
              <span className={`${styles.village_text}`}>Desa Canggu</span>
            </div>
          </div>
        </div>
        <div
          className={`${styles.main_menu_container} d-flex flex-column gap-5`}
        >
          {mainMenu.map((menu) => {
            return (
              <Link href={menu.menuLink} key={menu.id}>
                <div
                  onClick={() => updateToggle(menu.id)}
                  className={`${
                    styles.main_menu_item
                  } d-flex align-items-center ${
                    toggle === menu.id ? styles.active : ""
                  }`}
                >
                  <menu.icon className={`${styles.menu_icon}`} />
                  <div className={`${styles.menu_name}`}>{menu.name}</div>
                  {/* <menu.name /> */}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div
        className={`${styles.signout_logo_container} d-flex flex-column justify-content-center gap-2`}
      >
        <Link
          href="/pages/login"
          className={`${styles.signout_container} d-flex align-items-center gap-2`}
        >
          <IoLogOutOutline
            className={`${styles.signout_icon}`}
          ></IoLogOutOutline>
          <span className={`${styles.signout_text}`}>Keluar</span>
        </Link>
        <Image
          className={`${styles.peruri_logo}`}
          src={peruri_logo}
          alt="powered-by-peruri-logo"
        />
      </div>
    </div>
  );
}

export default SideBar;
