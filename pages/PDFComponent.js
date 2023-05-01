import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/form.module.css";
import PhotoUploader from "../components/PhotoUploader";
import ReactToPrint from "react-to-print";
import Link from "next/link";
import { useRouter } from "next/router";

const PDFComponent = () => {
  const router = useRouter();
  const [cvRef, setCvRef] = useState(null);
  const componentRef = useRef(null);
  const removeHandle = () => {
    localStorage.removeItem("cv");
    router.push("/form");
  };
  useEffect(() => {
    // LocalStorage'da kaydedilen bilgiyi getirin
    const storedRef = localStorage.getItem("cv");

    if (storedRef) {
      // JSON formatındaki veriyi ayrıştırın ve state'e atayın
      setCvRef(JSON.parse(storedRef));
    }
  }, []);
  return (
    <>
      <div className="flex justify-between mt-10">
        <Link href="/form">
          <button onClick={removeHandle} className="ml-20">
            Temizle
          </button>
        </Link>
        <div className="mr-20">
          <ReactToPrint
            trigger={() => <button>PDF İndir</button>}
            content={() => componentRef.current}
          />
        </div>
      </div>

      {cvRef && (
        <div className={styles.pdf} ref={componentRef}>
          <div className="flex justify-between mt-10">
            <h1 className="capitalize text-3xl font-bold  text-[#ff4e00]">
              {cvRef.name}
            </h1>
            <PhotoUploader />
          </div>
          <div>
            <div>
              <h1 className={styles.section}>E-Posta Adresi:</h1>
              <p>{cvRef.email}</p>
            </div>
            <div>
              <h1 className={styles.section}>Telefon:</h1>
              <p>{cvRef.phone}</p>
            </div>
            <div>
              <h1 className={styles.section}>Adres:</h1>
              <p>{cvRef.address}</p>
            </div>
            <div>
              <h1 className={styles.section}>Egitim:</h1>
              <p>{cvRef.education}</p>
            </div>
            <div>
              <h1 className={styles.section}>Is Tecrubesi:</h1>
              <p>{cvRef.experience}</p>
            </div>
            <div>
              <h1 className={styles.section}>Yetenekler:</h1>
              <p>{cvRef.skills}</p>
            </div>
            <div>
              <h1 className={styles.section}>Ek Bilgiler:</h1>
              <p>{cvRef.descriptions}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PDFComponent;
