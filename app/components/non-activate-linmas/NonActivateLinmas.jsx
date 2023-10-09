"use client";

import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { Poppins } from "next/font/google";

import styles from "./NonActivateLinmas.module.css";

const pops = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

function NonActiveLinmas() {
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
        className={`${styles.non_active_linmas_btn} ${pops.className}`}
        onClick={handleShow}
      >
        <span>Non-Aktif</span>
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        className={`${pops.className} ${styles.modal_container}`}
      >
        <div className={`${styles.modal_header}`}>
          <Modal.Header closeButton>
            <Modal.Title>Aktifkan Linmas</Modal.Title>
          </Modal.Header>
        </div>
        <div className={`${styles.modal_body}`}>
          <Modal.Body>
            <form
              className={`${styles.input_laporan_container} d-flex flex-column gap-3`}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className={`d-flex flex-column`}>
                <span>Tanggal Diangkat</span>
                <input
                  className={`${styles.input_laporan_form}`}
                  placeholder="10 Juni 2023"
                  type="date"
                  {...register("linmas_stop_date")}
                />
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

export default NonActiveLinmas;