"use client";

import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { pops } from "@/app/utils/font";

import styles from "./ActivateLinmas.module.css";

function ActiveLinmas() {
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

  const reportLinmasName = [
    "Keinginan Pribadi",
    "Keinginan Pribadi",
    "Keinginan Pribadi",
    "Keinginan Pribadi",
  ];
  return (
    <>
      <button
        className={`${styles.active_linmas_btn} ${pops.className}`}
        onClick={handleShow}
      >
        <span>Aktif</span>
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        className={`${pops.className} ${styles.modal_container}`}
      >
        <div className={`${styles.modal_header}`}>
          <Modal.Header closeButton>
            <Modal.Title>Berhentikan Linmas</Modal.Title>
          </Modal.Header>
        </div>
        <div className={`${styles.modal_body}`}>
          <Modal.Body>
            <form
              className={`${styles.input_laporan_container} d-flex flex-column gap-3`}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className={`d-flex flex-column`}>
                <span>Tanggal Permasalahan</span>
                <input
                  className={`${styles.input_laporan_form}`}
                  placeholder="10 Juni 2023"
                  type="date"
                  {...register("linmas_stop_date")}
                />
              </div>
              <div className={`d-flex flex-column`}>
                <span>Alasan</span>
                <select
                  className={`${styles.select_linmas_pelapor}`}
                  {...register("reason_stop")}
                >
                  {reportLinmasName.map((linmasName) => {
                    return <option key={linmasName}>{linmasName}</option>;
                  })}
                </select>
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

export default ActiveLinmas;
