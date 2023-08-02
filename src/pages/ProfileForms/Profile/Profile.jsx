import React, { useContext } from "react";
import styles from "./styles.module.css";
import editIcon from "../../../assets/edit.svg";
import avatar from "../../../assets/boy.png";
import { FormContext } from "../../../context/FormContext";
import InputComponent from "./../../../components/Input/input";

const Profile = () => {
  const [formData] = useContext(FormContext);
  return (
    <>
      <div className={styles.profile_container}>
        <div className={styles.heading}>
          <h2>Your Profile</h2>
          <img src={editIcon} className={styles.editIcon} alt="edit-icon" />
        </div>

        <section className={styles.columns_container}>
          <div className={styles.first_column}>
            <h3 className={styles.text}>Personal Details</h3>
            <div className={styles.profile_image}>
              <img src={avatar} alt="user-avatar" className={styles.avatar} />
            </div>
            <form action="">
              <div className={styles.form_control}>
                <label htmlFor="Level">Full Name</label>
                <InputComponent
                  type="text"
                  value={formData.firstName}
                  disabled
                />
              </div>

              <div className={styles.form_control}>
                <label htmlFor="Faculty">Email</label>
                <InputComponent type="text" value={formData.email} disabled />
              </div>

              <div className={styles.form_control}>
                <label htmlFor="Department">Age</label>
                <InputComponent type="text" value={formData.age} disabled />
              </div>

              <div className={styles.form_control}>
                <label htmlFor="Faculty">City </label>
                <InputComponent type="text" value={formData.city} disabled />
              </div>
            </form>
          </div>

          <div className={styles.second_column}>
            <h3 className={styles.text}>Educational Details</h3>
            <form action="">
              <div className={styles.form_control}>
                <label htmlFor="Faculty">Institution</label>
                <InputComponent
                  type="text"
                  value={formData.institution}
                  disabled
                />
              </div>

              <div className={styles.form_control}>
                <label htmlFor="Department">Faculty</label>
                <InputComponent type="text" value={formData.faculty} disabled />
              </div>

              <div className={styles.form_control}>
                <label htmlFor="Level">Department</label>
                <InputComponent
                  type="text"
                  value={formData.department}
                  disabled
                />
              </div>

              <div className={styles.form_control}>
                <label htmlFor="Faculty">Level</label>
                <InputComponent type="text" value={formData.level} disabled />
              </div>

              <div className={styles.form_control}>
                <label htmlFor="admission year">Year of Admission</label>
                <InputComponent
                  type="text"
                  value={formData.admission}
                  disabled
                />
              </div>

              <div className={styles.form_control}>
                <label htmlFor="graduation year">
                  Expected year of Graduation{" "}
                </label>
                <InputComponent
                  type="text"
                  value={formData.graduation}
                  disabled
                />
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Profile;
