import React from "react";
import LoginForm from "../../components/login-form/LoginForm";
import Image from "next/image";
import main_logo from "../../assets/logo/logo.svg";
import dirjen_bpd_logo from "../../assets/logo/logo-dirjen-bpd.svg";
import { Poppins } from "next/font/google";
import peruri_logo from "../../assets/logo/powered-by-peruri.svg";

import styles from "./Login.module.css";

function Login() {
  return (
    <div className={`${styles.login_section} container-fluid`}>
      <div
        className={`${styles.login_container} position-relative container-fluid`}
      >
        <Image
          className={`${styles.main_logo} img-fluid`}
          src={main_logo}
          alt="kemendagri-logo"
          priority={true}
        />
        <div
          className={`${styles.login_main_section} d-flex flex-column align-items-center`}
        >
          <Image
            className={`${styles.dirjen_bpd_logo} img-fluid`}
            src={dirjen_bpd_logo}
            alt="dirjen-bpd-logo"
            priority={true}
          />
          <h1 className={`${styles.login_heading} container-fluid text-center`}>
            Masuk
          </h1>
          <LoginForm />
          <p
            className={`${styles.login_paragraf} container-fluid d-flex justify-content-center`}
          >
            Masukkan alamat email dan kata sandi yang telah diberikan Kemendagri
            apabila anda pertama kali melakukan login
          </p>
        </div>
        <div
          className={`${styles.peruri_logo_container} d-flex container-fluid justify-content-center`}
        >
          <Image
            className={`${styles.peruri_logo} img-fluid`}
            src={peruri_logo}
            alt="powered-by-peruri-logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
