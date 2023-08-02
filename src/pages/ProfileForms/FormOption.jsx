import React, { useState } from "react";
import styles from "./styles.module.css";
import { AiOutlineUser, AiOutlineUsergroupAdd } from "react-icons/ai";
import { Link } from "react-router-dom";
import ButtonLink from "./../../components/Button/button";

const FormOption = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>Become a Registered EcoVanguard Member</h1>
          <p>
            Are you interested in protecting the one thing you have in common
            with everyone? Are you ready to take a step ahead and be a part of
            the greener environment movement? Or you are intrigued by the beauty
            of nature? Why not seize the moment and take the environment to the
            next level?
          </p>
          <h3>Be a member today!</h3>
        </div>

        <h2>Register As</h2>
        <div className={styles.options}>
          <Link to="/create_account/secondary_school">
            <div className={styles.option}>
              <div>
                <AiOutlineUsergroupAdd className={styles.option_icon} />
              </div>
              <ButtonLink>High school student</ButtonLink>
            </div>
          </Link>

          <Link to="/create_account/higher_institution">
            <div className={styles.option}>
              <div>
                <AiOutlineUser className={styles.option_icon} />
              </div>
              <ButtonLink>University student</ButtonLink>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FormOption;
