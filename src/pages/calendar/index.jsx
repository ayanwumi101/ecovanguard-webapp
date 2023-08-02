import React from "react";
import "./index.css";
import InputComponent from "../../components/Input/input";
import ButtonLink from "../../components/Button/button";
import DayPickerComponent from "../../components/date-picker";
const Calendar = () => {
  const [inputDate, setInputDate] = React.useState("");
  const [modalState, setModalState] = React.useState(false);
  const CustomInput = ({ value, onChange, onClick }) => (
    <InputComponent
      placeholder="Select Date"
      type="text"
      bgImage="search.svg"
      readOnly
      onClick={onClick}
      value={value}
    />
  );
  return (
    <section className="calendar">
      <div className="center">
        <h1>Eco-Calendar</h1>
        <div className="calendar__date-picker">
          <CustomInput value={inputDate} onClick={() => setModalState(true)} />
        </div>
      </div>
      <div className="calendar__date">
        <h3>20 / 06 / 2022</h3>
        <h3>No events yet</h3>
        <h3>World Water Day</h3>
      </div>
      <div className="center">
        <DayPickerComponent
          setInputDate={setInputDate}
          showModal={modalState}
          setShowModal={setModalState}
        />
        <ButtonLink>Day Details</ButtonLink>
      </div>
    </section>
  );
};

export default Calendar;
