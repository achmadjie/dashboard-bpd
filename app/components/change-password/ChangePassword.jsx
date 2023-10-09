"use client";

import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { Poppins } from "next/font/google";
import { FiEyeOff, FiSettings } from "react-icons/fi";

import styles from "./ChangePassword.module.css";

const pops = Poppins({
  weight: ["400", "500","600"],
  subsets: ["latin"],
});

function ChangePassword() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <button
        className={`${styles.active_linmas_btn} ${styles.main_menu_item} ${pops.className} d-flex align-items-center`}
        onClick={handleShow}
      >
        <FiSettings className={`${styles.menu_icon}`}/>
		<div className={`${styles.menu_name}`}>Ubah Password</div>
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        className={`${pops.className} ${styles.modal_container}`}
      >
        <div className={`${styles.modal_header}`}>
          <Modal.Header closeButton>
            <Modal.Title>Ubah Password</Modal.Title>
          </Modal.Header>
        </div>
        <div className={`${styles.modal_body}`}>
          <Modal.Body>
            <form
              className={`${styles.input_laporan_container} d-flex flex-column gap-1`}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div
                className={`${styles.password_container} d-flex flex-column gap-2`}
              >
                <span>Password Lama</span>
                <input
                  className={`${styles.password_box} ${pops.className}`}
                  type="password"
                  {...register("Password", { required: true })}
                  placeholder="........"
                />
                <div className={`${styles.eyes_icon_container} d-inline-block`}>
                  <FiEyeOff className={`${styles.eyes_icon_close}`} />
                </div>
              </div>
              <div
                className={`${styles.password_container} d-flex flex-column gap-2`}
              >
                <span>Password Baru</span>
                <input
                  className={`${styles.password_box} ${pops.className}`}
                  type="password"
                  {...register("Password", { required: true })}
                  placeholder="........"
                />
                <div className={`${styles.eyes_icon_container} d-inline-block`}>
                  <FiEyeOff className={`${styles.eyes_icon_close}`} />
                </div>
              </div>
              <div
                className={`${styles.password_container} d-flex flex-column gap-2`}
              >
                <span>Konfirmasi Password Baru</span>
                <input
                  className={`${styles.password_box} ${pops.className}`}
                  type="password"
                  {...register("Password", { required: true })}
                  placeholder="........"
                />
                <div className={`${styles.eyes_icon_container} d-inline-block`}>
                  <FiEyeOff className={`${styles.eyes_icon_close}`} />
                </div>
              </div>
			  <div className={`${styles.input_cancel_btn} ms-auto`}>
                <button show={show} onHide={handleClose}>
                  Cancel
                </button>
                <input type="submit" value="Input" />
              </div>
              {errors.exampleRequired && <span>This field is required</span>}
            </form>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
}

export default ChangePassword;
