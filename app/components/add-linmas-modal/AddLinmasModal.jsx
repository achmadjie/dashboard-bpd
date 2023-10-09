"use client";

import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { IoAddSharp } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { Poppins } from "next/font/google";
import { IoIosAdd } from "react-icons/io";

import styles from "./AddLinmasModal.module.css";

function AddLinmasModal() {
  const [show, setShow] = useState(false);

  const [toggle, setToggle] = useState(1);

  const updateToggle = (id) => {
    setToggle(id);
  };

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
      <button className={`${styles.linmas_input_btn} `} onClick={handleShow}>
        <span>Tambah</span>
        <IoAddSharp className={`${styles.add_icon}`} />
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        className={` ${styles.modal_container}`}
      >
        <div className={`${styles.modal_header}`}>
          <Modal.Header closeButton>
            <Modal.Title>Input Linmas</Modal.Title>
          </Modal.Header>
        </div>
        <div className={`${styles.modal_body}`}>
          <Modal.Body>
            <div className={`${styles.switch_input_container} d-flex gap-3`}>
              <button
                className={`${styles.individu_btn} ${
                  toggle === 1 ? styles.active : ""
                }`}
                onClick={() => updateToggle(1)}
              >
                Individu
              </button>
              <button
                className={`${styles.batch_sk_btn} ${
                  toggle === 2 ? styles.active : ""
                }`}
                onClick={() => updateToggle(2)}
              >
                Batch SK
              </button>
            </div>
            <form
              className={`${styles.input_individu_linmas_container} ${
                toggle === 1 ? styles.show_input : styles.hide_input
              } flex-column gap-3 `}
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
            <form
              className={`${styles.input_linmas_batch_sk_container} ${
                toggle === 2 ? styles.show_input : styles.hide_input
              } flex-column gap-3`}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div
                className={`${styles.document_upload_container} d-flex flex-column`}
              >
                <span>Upload Dokumen SK</span>
                <input
                  placeholder="SK_HARIS_PUTRATAMA.pdf"
                  {...register("document_upload")}
                  type="file"
                  accept=".pdf"
                  className={`${styles.input_linmas_form}`}
                />
              </div>
              <div className={`d-flex flex-column`}>
                <span>Nomor SK</span>
                <input
                  className={`${styles.input_linmas_form}`}
                  placeholder="SKEP/51/159-1"
                  {...register("linmas_name")}
                />
              </div>
              <div className={`d-flex flex-column`}>
                <span>Kepala Desa Menjabat</span>
                <input
                  className={`${styles.input_linmas_form}`}
                  placeholder="Romy Amartyo"
                  type="text"
                  {...register("linmas_name")}
                />
              </div>
              <div className={`d-flex flex-column`}>
                <span>Nama Linmas</span>
                <input
                  className={`${styles.input_linmas_form}`}
                  placeholder="Haris Putratama"
                  type="text"
                  {...register("linmas_name")}
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
                <span>Tanggal Diangkat</span>
                <input
                  className={`${styles.input_linmas_form}`}
                  placeholder="08 Juni 2023"
                  type="date"
                  {...register("linmas_rise_date")}
                />
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
                <span>Tanggal Lahir</span>
                <input
                  className={`${styles.input_linmas_form}`}
                  placeholder="10 Juni 1999"
                  type="date"
                  {...register("linmas_birth_date")}
                />
              </div>
              <div className={`${styles.add_linmas_container}`}>
                <span>Tambah Linmas</span>
                <IoIosAdd></IoIosAdd>
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

export default AddLinmasModal;
