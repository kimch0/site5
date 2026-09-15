"use client";
import { useState, useRef, useEffect } from "react";
import styles from "../styles/ContactForm.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactForm() {
  const contactTextRef = useRef(null);
  const contactFormRef = useRef(null);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [emailError, setEmailError] = useState("");
  const maxChars = 500;
  const charCount = text.length;

  const validateEmail = (value) => {
    return /^[^s@]+@[^s@]+.[^s@]+$/.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setEmailError("");
  };

  const handleEmailChange = (value) => {
    setEmail(value);

    if (!value) {
      setEmailError("");
      return;
    }

    if (!validateEmail(value)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handleFullnameChange = (value) => {
    setFullname(value);
  };

  useEffect(() => {
    if (contactTextRef.current) {
      gsap.fromTo(
        contactTextRef.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contactTextRef.current,
            start: "top 80%",
          },
        },
      );
    }
  }, []);

  useEffect(() => {
    if (contactFormRef.current) {
      gsap.fromTo(
        contactFormRef.current,
        { opacity: 0, y: -100 },
        {
          opacity: 1,
          y: 0,
          duration: 3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contactFormRef.current,
            start: "top 80%",
          },
        },
      );
    }
  }, []);

  return (
    <div className="section" id="contact">
      <form onSubmit={handleSubmit} className={styles.form}>
        <div
          className="sectionTextContainer"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          ref={contactTextRef}
        >
          <h2 className="sectionTitles">Let’s Talk Precision</h2>
          <p className="sectionDescriptions">
            Do you have any questions about our timepieces or would you like to
            learn more about AUREN? Our team will be happy to assist you.
          </p>
          <p className="sectionDescriptions">
            Discover the world of mechanical watchmaking.
          </p>
        </div>

        <div className={styles.formContainer} ref={contactFormRef}>
          <div className={styles.formGroup}>
            <label htmlFor="fullname">Fullname</label>

            <input
              id="fullname"
              type="text"
              value={fullname}
              onChange={(e) => handleFullnameChange(e.target.value)}
              placeholder="John Doe"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>

            <input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
              placeholder="name@example.com"
            />
            {emailError && <p className={styles.errorMessage}>{emailError}</p>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">
              Message
            </label>

            <textarea
              id="message"
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={5}
              maxLength={maxChars}
            ></textarea>

            <div>
              <span className={styles.charCount}>
                {charCount}/{maxChars} characters
              </span>
            </div>
          </div>

          <button type="submit" className={styles.submitButton}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
