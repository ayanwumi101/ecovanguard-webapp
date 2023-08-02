import React from "react";
import styles from "./gallery.module.css";
import InputComponent from "../../components/Input/input";
const Gallery = () => {
  return (
    <section className={styles.gallery}>
      <h1 className={styles.gallery__text}>Gallery</h1>
      <div className={styles.gallery__container}>
        <InputComponent
          placeholder="Search Photo by event"
          bgImage="fluent_image-search-20-regular.svg"
        />

        <InputComponent placeholder="Search by date" bgImage="search.svg" />
      </div>
      <br />
      <br />
      <div className={styles.gallery__event}>
        <p>3rd May, 2022</p>
        <p>Event details </p>
      </div>
      <br />
      <h3>World Water Day, 2022</h3>
    </section>
  );
};

export default Gallery;
