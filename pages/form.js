/* eslint-disable react/display-name */
import React, { useRef, useState } from "react";
import styles from "../styles/form.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Form() {
  const router = useRouter();
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const educationRef = useRef();
  const experienceRef = useRef();
  const skillsRef = useRef();
  const descriptionsRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputRef = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      address: addressRef.current.value,
      education: educationRef.current.value,
      experience: experienceRef.current.value,
      skills: skillsRef.current.value,
      descriptions: descriptionsRef.current.value,
    };
    localStorage.setItem("cv", JSON.stringify(inputRef));
    router.push("/PDFComponent");
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Link href="/">
          <h1 className="uppercase font-bold text-4xl text-[#ff4e00]">
            Cv Olustur
          </h1>
        </Link>

        <label htmlFor="name">Ad Soyad:</label>
        <input
          className={styles.input}
          type="text"
          id="name"
          name="name"
          required
          ref={nameRef}
        />
        <label htmlFor="email">E-posta Adresiniz:</label>
        <input
          className={styles.input}
          type="email"
          id="email"
          name="email"
          required
          ref={emailRef}
        />
        <label htmlFor="phone">Telefon Numaranız:</label>
        <input
          className={styles.input}
          type="tel"
          id="phone"
          name="phone"
          required
          ref={phoneRef}
        />
        <label htmlFor="address">Adresiniz:</label>
        <input
          className={styles.input}
          type="text"
          id="address"
          name="address"
          required
          ref={addressRef}
        />
        <label htmlFor="education">Eğitim Durumunuz:</label>
        <textarea
          className={styles.textarea}
          type="text"
          id="education"
          name="education"
          required
          ref={educationRef}
        />
        <label htmlFor="experience">İş Tecrübeniz:</label>
        <textarea
          className={styles.textarea}
          id="experience"
          name="experience"
          required
          ref={experienceRef}
        ></textarea>
        <label htmlFor="skills">Yetekleriniz:</label>
        <textarea
          className={styles.textarea}
          id="skills"
          name="skills"
          required
          ref={skillsRef}
        ></textarea>
        <label htmlFor="descriptions">Ek Bilgiler:</label>
        <textarea
          className={styles.textarea}
          id="descriptions"
          name="descriptions"
          required
          ref={descriptionsRef}
        ></textarea>
        <button className={styles.button} type="submit">
          Devam
        </button>
      </form>
    </>
  );
}
