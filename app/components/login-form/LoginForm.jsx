"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { TiDeleteOutline } from "react-icons/ti";
import { BsEyeSlash, BsEye } from "react-icons/bs";
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
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {}, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClear = () => {
    setEmail("");
    setPassword("");
  };

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className={`${styles.delete_icon_container} d-inline-block`}>
            <TiDeleteOutline
              className={`${styles.delete_icon}`}
              onClick={handleClear}
            />
          </div>
        </div>
        <div className={`${styles.password_container}`}>
          <input
            className={`${styles.password_box} ${inter.className}`}
            type={isOpen ? "text" : "password"}
            {...register("Password", { required: true })}
            placeholder="........"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            className={`${styles.eyes_icon_container} d-inline-block`}
            onClick={handleClick}
          >
            {isOpen ? (
              <BsEye
                className={`${styles.eyes_icon}`}
                src={eyes_icon}
                alt="eyes-icon"
              ></BsEye>
            ) : (
              <BsEyeSlash
                className={`${styles.eyes_icon}`}
                src={eyes_icon}
                alt="eyes-icon"
              ></BsEyeSlash>
            )}
          </div>
        </div>
        {/* {errors.Password && <span>This field is required</span>} */}
        <Link href="#" className={`${styles.forget_password_text}`}>
          Lupa Kata Sandi ?
        </Link>
        <div
          className={`${styles.submit_container} d-flex container-fluid justify-content-center`}
        >
          <input
            className={`${styles.submit_button}`}
            type="submit"
            value="Masuk"
          />
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
