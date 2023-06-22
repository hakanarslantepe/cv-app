/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect, useRef } from "react";
import styles from "../styles/form.module.css";
import PhotoUploader from "../components/PhotoUploader";
import Link from "next/link";
import { useRouter } from "next/router";
import ReactToPrint from "react-to-print";

const document = () => {
  const [document, setDocument] = useState(null);
  const router = useRouter();
  const removeHandle = () => {
    localStorage.removeItem("values");
    router.push("/newForm");
  };
  const componentRef = useRef();

  useEffect(() => {
    const savedDocument = localStorage.getItem("values");
    if (savedDocument) {
      setDocument(JSON.parse(savedDocument));
    }
  }, []);

  return (
    <>
      <div className="flex justify-between mt-10">
        <Link href="/form">
          <button
            onClick={removeHandle}
            className="ml-20 bg-zinc-500 px-4 py-2 rounded-sm text-zinc-200"
          >
            CLEAR
          </button>
        </Link>
        <div className="mr-20">
          <ReactToPrint
            trigger={() => (
              <button className="bg-[#ff4e00] px-4 py-2 rounded-sm text-orange-200">
                DOWNLOAD PDF
              </button>
            )}
            content={() => componentRef.current}
          />
        </div>
      </div>

      {document && (
        <div className={styles.pdf} ref={componentRef}>
          <div className="flex justify-between mt-10">
            <h1 className="capitalize text-3xl font-bold  text-[#ff4e00]">
              {document.name} {document.surname}
            </h1>
            <PhotoUploader />
          </div>
          <div>
            <div>
              <h1 className={styles.section}>Age:</h1>
              <p>{document.age}</p>
            </div>
            <div>
              <h1 className={styles.section}>Email:</h1>
              <p>{document.email}</p>
            </div>
            <div>
              <h1 className={styles.section}>Phone:</h1>
              <p>{document.phone}</p>
            </div>
            <div>
              <h1 className={styles.section}>Address:</h1>
              <p>{document.address}</p>
            </div>
            <div>
              <h1 className={styles.section}>Education:</h1>
              <p>{document.education}</p>
            </div>
            <div>
              <h1 className={styles.section}>Experience:</h1>
              <p>{document.experience}</p>
            </div>
            <div>
              <h1 className={styles.section}>Skills:</h1>
              <p>{document.skills}</p>
            </div>
            <div>
              <h1 className={styles.section}>About:</h1>
              <p>{document.others}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default document;
