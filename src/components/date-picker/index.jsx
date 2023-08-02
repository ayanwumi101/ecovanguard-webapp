import React from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import DialogComponent from "../Dialog/index";
import ButtonLink from "../Button/button";
import "./index.css";

const DayPickerComponent = ({ setInputDate, showModal, setShowModal }) => {
  const [selectedDay, setSelectedDay] = React.useState();
  const handleSelect = (value) => {
    setSelectedDay(value);
    const formattedValue = format(value, `PP`);
    setInputDate(formattedValue);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  let footer = !selectedDay ? (
    <p>Please pick a day.</p>
  ) : (
    <p>You picked {format(selectedDay, "PP")}.</p>
  );

  return (
    <>
      {showModal && (
        <DialogComponent
          label="Datepicker for the Events page"
          closeDialog={closeModal}
        >
          <DayPicker
            mode="single"
            selected={selectedDay}
            onSelect={handleSelect}
            showOutsideDays
            fixedWeeks
            footer={footer}
          />
          <div className="center">
            <ButtonLink onClick={closeModal}>Return</ButtonLink>
          </div>
        </DialogComponent>
      )}
    </>
  );
};

export default DayPickerComponent;
