/* eslint-disable react/display-name */
import React from "react";
import styles from "../styles/form.module.css";
import PhotoUploader from "./PhotoUploader";

const PDFComponent = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={styles.pdf}>
      <div className="flex justify-between mt-10">
        <h1 className="capitalize text-3xl font-bold  text-[#ff4e00]">
          {ref.current.name?.value}
        </h1>
        <PhotoUploader />
      </div>
      <div>
        <div>
          <h1 className={styles.section}>E-Posta Adresi:</h1>
          <p>{ref.current.email?.value}</p>
        </div>
        <div>
          <h1 className={styles.section}>Telefon:</h1>
          <p>{ref.current.phone?.value}</p>
        </div>
        <div>
          <h1 className={styles.section}>Adres:</h1>
          <p>{ref.current.address?.value}</p>
        </div>
        <div>
          <h1 className={styles.section}>Egitim:</h1>
          <p>{ref.current.education?.value}</p>
        </div>
        <div>
          <h1 className={styles.section}>Is Tecrubesi:</h1>
          <p>{ref.current.experience?.value}</p>
        </div>
        <div>
          <h1 className={styles.section}>Yetenekler:</h1>
          <p>{ref.current.skills?.value}</p>
        </div>
        <div>
          <h1 className={styles.section}>Ek Bilgiler:</h1>
          <p>{ref.current.descriptions?.value}</p>
        </div>
      </div>
    </div>
  );
});

export default PDFComponent;
