"use client";

import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FiEdit } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { pops } from "@/app/utils/font";

import styles from "./EditLinmasModal.module.css";

function EditLinmasModal() {
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
        className={`${styles.edit_input_btn} ${pops.className}`}
        onClick={handleShow}
      >
        <FiEdit className={`${styles.edit_icon}`}></FiEdit>
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        className={`${pops.className} ${styles.modal_container}`}
      >
        <div className={`${styles.modal_header}`}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Linmas</Modal.Title>
          </Modal.Header>
        </div>
        <div className={`${styles.modal_body}`}>
          <Modal.Body>
            <form
              className={`${styles.input_individu_linmas_container} flex-column gap-3 `}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div
                className={`${styles.linmas_name_container} d-flex flex-column`}
              >
                <span>Nama Linmas</span>
                <input
                  placeholder="Haris Putratama"
                  {...register("linmas_name")}
                  type="text"
                  className={`${styles.input_linmas_form}`}
                />
              </div>
              <div className={`${styles.select_gender_container} d-flex`}>
                <div className={`d-flex flex-column`}>
                  <span>Jenis Kelamin</span>
                  <select
                    className={`${styles.select_gender}`}
                    {...register("linmas_gender")}
                  >
                    <option value="Laki-Laki">Laki-Laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>
                <div className={`d-flex flex-column`}>
                  <span>Status</span>
                  <select
                    className={`${styles.select_gender}`}
                    {...register("linmas_status")}
                  >
                    <option value="female">Aktif</option>
                    <option value="male">Non-Aktif</option>
                  </select>
                </div>
              </div>
              <div className={`d-flex flex-column`}>
                <span>Nomor KTA</span>
                <input
                  className={`${styles.input_linmas_form}`}
                  placeholder="13058136083"
                  type="number"
                  {...register("linmas_KTA_num")}
                />
              </div>
              <div className={`d-flex flex-column`}>
                <span>Nomor SK</span>
                <input
                  className={`${styles.input_linmas_form}`}
                  placeholder="SKEP/51/159-1"
                  {...register("linmas_SK_num")}
                />
              </div>
              <div className={`d-flex flex-column`}>
                <span>Tanggal Lahir</span>
                <input
                  className={`${styles.input_linmas_form}`}
                  placeholder="10 Juni 1999"
                  type="date"
                  {...register("linmas_birth_date")}
                />
              </div>
              <div className={`d-flex flex-column`}>
                <span>Tanggal Diangkat</span>
                <input
                  className={`${styles.input_linmas_form}`}
                  placeholder="08 Juni 2023"
                  type="date"
                  {...register("linmas_rise_date")}
                />
              </div>
              <div className={`d-flex flex-column`}>
                <span>Kepala Desa Menjabat</span>
                <input
                  className={`${styles.input_linmas_form}`}
                  placeholder="Romy Amartyo"
                  {...register("linmas_SK_num")}
                />
              </div>
              <div
                className={`${styles.document_upload_container} d-flex flex-column`}
              >
                <span>Upload Dokumen SK</span>
                <input
                  placeholder="SK_HARIS_PUTRATAMA.pdf"
                  {...register("document_upload")}
                  type="file"
                  accept=".pdf"
                  className={`${styles.input_linmas_form} ${styles.upload_document_form}`}
                />
              </div>
              <div className={`${styles.input_cancel_btn} ms-auto `}>
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

export default EditLinmasModal;
