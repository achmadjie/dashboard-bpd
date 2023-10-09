"use client";

// import Image from "next/image";
// import profile_pic from "../../assets/avatars/profile_picture.png";
// import avatar from "../../assets/avatars/avatar-image.svg";
// import pic_1 from "../../assets/image/pexels-bayram-musayev-15625100.jpg";
// import pic_2 from "../../assets/image/pexels-boys-in-bristol-photography-17967575.jpg";
// import pic_3 from "../../assets/image/pexels-mathias-reding-17837373.jpg";
import React from "react";
import Slider from "react-slick";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselItem.css";
import styles from "./CarouselItem.module.css";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});

const CustomArrow = ({ currentSlide, slideCount, children, ...props }) => {
  return <div {...props}>{children}</div>;
};

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

const slides = [
  {
    id: 1,
    title: "Ayo Ikuti Event Desa Bersih Nasional!",
    content: `Sebanyak 50 desa wisata di seluruh NTB melakukan aksi
  bersih-bersih untuk menyambut hari peduli sampah nasional dan
  bersih destinasi wisata. Aksi gotong royong membersihkan sampah di
  setiap akses jalan dan sudut desa wisata tersebut untuk mendukung
  dan mempercepat terwujudnya NTB zero waste atau mewujudkan
  lingkungan bersih dan sehat.`,
    video: "https://youtu.be/dw0fagEVNqI?si=BdLGPnkpvVUyl0fG",
  },
  {
    id: 2,
    title: "Ayo Ikuti Event Desa Bersih Nasional!",
    content: `Sebanyak 50 desa wisata di seluruh NTB melakukan aksi
  bersih-bersih untuk menyambut hari peduli sampah nasional dan
  bersih destinasi wisata. Aksi gotong royong membersihkan sampah di
  setiap akses jalan dan sudut desa wisata tersebut untuk mendukung
  dan mempercepat terwujudnya NTB zero waste atau mewujudkan
  lingkungan bersih dan sehat.`,
    video: "https://youtu.be/dw0fagEVNqI?si=BdLGPnkpvVUyl0fG",
  },
  {
    id: 3,
    title: "Ayo Ikuti Event Desa Bersih Nasional!",
    content: `Sebanyak 50 desa wisata di seluruh NTB melakukan aksi
  bersih-bersih untuk menyambut hari peduli sampah nasional dan
  bersih destinasi wisata. Aksi gotong royong membersihkan sampah di
  setiap akses jalan dan sudut desa wisata tersebut untuk mendukung
  dan mempercepat terwujudnya NTB zero waste atau mewujudkan
  lingkungan bersih dan sehat.`,
    video: "https://youtu.be/dw0fagEVNqI?si=BdLGPnkpvVUyl0fG",
  },
];

function CarouselItem() {
  return (
    <div
      className={`${styles.carousel_container}  container-fluid d-flex flex-column justify-content-center`}
    >
      <Slider {...settings}>
        {/* <InnerSlider slides={slides} /> */}
        {slides.map((slide) => (
          <div
            className={`${styles.main_carousel_container} d-flex justify-content-center`}
            key={slide.id}
          >
            <div
              className={`${styles.video_carousel_container} d-flex align-items-center`}
            >
              <ReactPlayer
                url={slide.video}
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
              <h3>{slide.title}</h3>
              <p>{slide.content}</p>
              <button className={`${styles.register_village_btn}`}>
                Daftarkan Desa
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselItem;
