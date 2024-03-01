"use client";

import React from "react";
import dynamic from "next/dynamic";
import { pops } from "@/app/utils/font";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselItem.css";
const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});
const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});
import styles from "./CarouselItem.module.css";

const CustomArrow = ({ currentSlide, slideCount, children, ...props }) => {
  return <div {...props}>{children}</div>;
};

function CarouselItem() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    cssEase: "linear",
    nextArrow: (
      <CustomArrow>
        <IoIosArrowForward />
      </CustomArrow>
    ),
    prevArrow: (
      <CustomArrow>
        <IoIosArrowBack />
      </CustomArrow>
    ),
  };

  // const slides = [
  //   { id: 1 },
  //   { id: 2 },
  //   { id: 3 },
  // ];

  return (
    <div
      className={`${styles.carousel_container} ${pops.className} container-fluid d-flex flex-column justify-content-center`}
    >
      <Slider {...settings}>
        {/* <InnerSlider slides={slides} /> */}
        <div
          className={`${styles.main_carousel_container} d-flex justify-content-center`}
        >
          <div
            className={`${styles.video_carousel_container} d-flex align-items-center`}
          >
            <ReactPlayer
              url="https://youtu.be/dw0fagEVNqI?si=BdLGPnkpvVUyl0fG"
              width={440}
              height={240}
              volume={1}
              muted={true}
              controls={true}
            ></ReactPlayer>
          </div>
          <div
            className={`${styles.title_desc_carousel_container} d-flex flex-column justify-content-center align-items-start`}
          >
            <h3>Ayo Ikuti Event Desa Bersih Nasional!</h3>
            <p>
              Sebanyak 50 desa wisata di seluruh NTB melakukan aksi
              bersih-bersih untuk menyambut hari peduli sampah nasional dan
              bersih destinasi wisata. Aksi gotong royong membersihkan sampah di
              setiap akses jalan dan sudut desa wisata tersebut untuk mendukung
              dan mempercepat terwujudnya NTB zero waste atau mewujudkan
              lingkungan bersih dan sehat.
            </p>
            <button className={`${styles.register_village_btn}`}>
              Daftarkan Desa
            </button>
          </div>
        </div>
        <div
          className={`${styles.main_carousel_container} d-flex justify-content-center`}
        >
          <div
            className={`${styles.video_carousel_container} d-flex align-items-center`}
          >
            <ReactPlayer
              url="https://youtu.be/dw0fagEVNqI?si=BdLGPnkpvVUyl0fG"
              width={440}
              height={240}
              volume={1}
              muted={true}
              controls={true}
            ></ReactPlayer>
          </div>
          <div
            className={`${styles.title_desc_carousel_container} d-flex flex-column justify-content-center align-items-start`}
          >
            <h3>Ayo Ikuti Event Desa Bersih Nasional!</h3>
            <p>
              Sebanyak 50 desa wisata di seluruh NTB melakukan aksi
              bersih-bersih untuk menyambut hari peduli sampah nasional dan
              bersih destinasi wisata. Aksi gotong royong membersihkan sampah di
              setiap akses jalan dan sudut desa wisata tersebut untuk mendukung
              dan mempercepat terwujudnya NTB zero waste atau mewujudkan
              lingkungan bersih dan sehat.
            </p>
            <button className={`${styles.register_village_btn}`}>
              Daftarkan Desa
            </button>
          </div>
        </div>
        <div
          className={`${styles.main_carousel_container} d-flex justify-content-center `}
        >
          <div
            className={`${styles.video_carousel_container} d-flex align-items-center`}
          >
            <ReactPlayer
              url="https://youtu.be/dw0fagEVNqI?si=BdLGPnkpvVUyl0fG"
              width={440}
              height={240}
              volume={1}
              muted={true}
              controls={true}
            ></ReactPlayer>
          </div>
          <div
            className={`${styles.title_desc_carousel_container} d-flex flex-column justify-content-center align-items-start`}
          >
            <h3>Ayo Ikuti Event Desa Bersih Nasional!</h3>
            <p>
              Sebanyak 50 desa wisata di seluruh NTB melakukan aksi
              bersih-bersih untuk menyambut hari peduli sampah nasional dan
              bersih destinasi wisata. Aksi gotong royong membersihkan sampah di
              setiap akses jalan dan sudut desa wisata tersebut untuk mendukung
              dan mempercepat terwujudnya NTB zero waste atau mewujudkan
              lingkungan bersih dan sehat.
            </p>
            <button className={`${styles.register_village_btn}`}>
              Daftarkan Desa
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default CarouselItem;
