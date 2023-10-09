"use client";

import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { VscDiffAdded } from "react-icons/vsc";
import { useForm } from "react-hook-form";
import { Poppins } from "next/font/google";

import styles from "./InputModalLaporan.module.css";

function InputLaporanModal() {
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
    "Hans Julio M.",
    "Dony Prastiya",
    "Syifa Tri Gardini",
    "Ahsan Mubariz",
  ];
  return (
    <>
      <button className={`${styles.laporan_input_btn} `} onClick={handleShow}>
        <span>Input Laporan</span>
        <VscDiffAdded className={`${styles.add_icon}`}></VscDiffAdded>
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        className={` ${styles.modal_container}`}
      >
        <div className={`${styles.modal_header}`}>
          <Modal.Header closeButton>
            <Modal.Title>Input Laporan</Modal.Title>
          </Modal.Header>
        </div>
        <div className={`${styles.modal_body}`}>
          <Modal.Body>
            <form
              className={`${styles.input_laporan_container} d-flex flex-column gap-3`}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div
                className={`${styles.laporan_name_container} d-flex flex-column`}
              >
                <span>Nama Laporan</span>
                <input
                  placeholder="CURANMOR Beat Pak Sumardi RT 006/RW 007"
                  {...register("laporan_name")}
                  type="text"
                  className={`${styles.input_laporan_form}`}
                />
              </div>
              <div className={`d-flex flex-column`}>
                <span>Linmas Pelapor</span>
                <select
                  className={`${styles.select_linmas_pelapor}`}
                  {...register("linmas_reporter")}
                >
                  <>
                    {reportLinmasName.map((linmasName) => {
                      return <option key={linmasName}>{linmasName}</option>;
                    })}
                  </>
                </select>
              </div>
              <div className={`d-flex flex-column`}>
                <span>Tanggal Permasalahan</span>
                <input
                  className={`${styles.input_laporan_form}`}
                  placeholder="08 Juni 2023"
                  type="date"
                  {...register("linmas_birth_date")}
                />
              </div>
              <div className={`d-flex flex-column`}>
                <span>Detail Permasalahan</span>
                <textarea
                  className={`${styles.input_laporan_form}`}
                  placeholder="Lorem ipsum dolor sit amet consectetur. Dolor condimentum morbi sit ornare suscipit nisi dignissim. Accumsan neque enim massa morbi tellus quis placerat viverra. Et magna dignissim habitasse sed magna orci tincidunt blandit scelerisque. Et laoreet hendrerit aliquam tincidunt. Nunc tristique lectus euismod facilisis. Tincidunt aliquam fermentum sed adipiscing eget quis est aenean aliquet.
				  Lacus imperdiet nunc potenti enim. Aliquam facilisis amet tempus lacus aliquam dictum sit blandit. Scelerisque quisque augue platea nam dignissim mauris ac nisl id. Sapien interdum sagittis iaculis varius etiam in."
                  rows={13.5}
                  {...register("laporan_desc")}
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
                  className={`${styles.input_laporan_form} ${styles.upload_document_form}`}
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

export default InputLaporanModal;
