"use client";

import React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import delete_icon from "../../assets/icons/X-Icon.svg";
import eyes_icon from "../../assets/icons/eyes-Icon.svg";
import Link from "next/link";
import { Poppins, Inter } from "next/font/google";

import styles from "./LoginForm.module.css";



const pops = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
});

function LoginForm() {

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div
      className={`${styles.login_container} d-flex justify-content-center container-fluid ${pops.className}`}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`container-fluid p-0 d-flex flex-column align-items-center gap-3`}
      >
        <div className={`${styles.email_container}`}>
          <input
            className={`${styles.email_box}`}
            placeholder="Masukkan Email"
            type="email"
            {...register("Email")}
          />
          <div className={`${styles.delete_icon_container} d-inline-block`}>
            <Image
              className={`${styles.delete_icon}`}
              src={delete_icon}
              alt="delete-icon"
            />
          </div>
        </div>
        <div className={`${styles.password_container}`}>
          <input
            className={`${styles.password_box} ${inter.className}`}
            type="password"
            {...register("Password", { required: true })}
            placeholder="........"
          />
          <div className={`${styles.eyes_icon_container} d-inline-block`}>
            <Image
              className={`${styles.eyes_icon}`}
              src={eyes_icon}
              alt="eyes-icon"
            />
          </div>
        </div>
        {/* {errors.Password && <span>This field is required</span>} */}
        <Link href="#" className={`${styles.forget_password_text}`}>
          Lupa Kata Sandi ?
        </Link>
        <div className={`${styles.submit_container} d-flex container-fluid justify-content-center`}>
          <input className={`${styles.submit_button}`} type="submit" value="Masuk"/>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
