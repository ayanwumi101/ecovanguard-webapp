import React from "react";
import styles from "./page404.module.css";
import errSrc from "../../assets/error-404.svg";
import ButtonLink from "../../components/Button/button";
const Page404 = () => {
  return (
    <section>
      <main>
        <div className={styles.error__container}>
          <div className="center">
            <h3>Sorry! This page is currently unavailable</h3>
            <ButtonLink href="/" className={styles.error__button1} link>
              Home Page
            </ButtonLink>
            <br />
            <br />
            <ButtonLink
              className={styles.error__button2}
              onClick={() => window.history.back()}
            >
              Previous Page
            </ButtonLink>
          </div>
          <div className={styles.error__image}>
            <img
              src={errSrc}
              alt="illustration for the error 404 page"
              width={600}
              height={600}
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Page404;
