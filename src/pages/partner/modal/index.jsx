import React from "react";
import ButtonLink from "../../../components/Button/button";
import DialogComponent from "../../../components/Dialog";
import "./index.css";

const Modal = () => {
  const [showModal, setShowModal] = React.useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  return (
    <>
      <ButtonLink onClick={openModal}>Become a Partner</ButtonLink>
      {showModal && (
        <DialogComponent label="Partner with us info" closeDialog={closeModal}>
          <h2>Want to partner with Us?</h2>
          <ul className="partner-modal">
            Interested in partnering with EcoVanguard Club, send an e-mail to{" "}
            <b>
              <a href="mailto:ecovanguard@gmail.com?subject=Mail to EcoVanguard">
                ecovanguardclub@gmail.com
              </a>
            </b>{" "}
            attaching the following documents{" "}
            <li>A letter explaining why you would like to partner with us</li>{" "}
            <li>
              Your certificate of registration with the Nigerian Government
            </li>
            <li>
              Documents/evidences showing how you’ve contributed to creating a
              better nature.
            </li>
            We await your mail. Thank you for making this decision in favour of
            nature.
          </ul>
          <br />
          <div className="center">
            <ButtonLink onClick={closeModal}>Return</ButtonLink>
          </div>
        </DialogComponent>
      )}
    </>
  );
};
export default Modal;
