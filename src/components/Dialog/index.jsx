import React from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import PropTypes from "prop-types";
import "@reach/dialog/styles.css";

const DialogComponent = ({ children, label, closeDialog }) => {
  return (
    <>
      <DialogOverlay isOpen={true} onDismiss={() => closeDialog()}>
        <DialogContent
          aria-label={label}
          style={{
            borderRadius: "var(--heading-1)",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.15)",
            padding: "var(--heading-1)",
            width: "max(340px, 50vw)",
            maxWidth: "100%",
          }}
        >
          {children}
        </DialogContent>
      </DialogOverlay>
    </>
  );
};
DialogComponent.propTypes = {
  label: PropTypes.string.isRequired,
  closeDialog: PropTypes.func.isRequired,
};
export default DialogComponent;
