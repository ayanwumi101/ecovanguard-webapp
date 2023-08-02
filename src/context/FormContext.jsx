import React from "react";

export const FormContext = React.createContext();
const FormContextProvider = ({ children }) => {
  const [formData, setFormData] = React.useState({});
  const updateForm = (newObject) => {
    setFormData((prev) => {
      return { ...prev, ...newObject };
    });
  };
  return (
    <FormContext.Provider value={[formData, updateForm]}>
      {children}
    </FormContext.Provider>
  );
};
export default FormContextProvider;
