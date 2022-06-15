/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import FormContext from './FormContext';

// eslint-disable-next-line react/prop-types
function FormProvider({ children }) {
  const [currentStep, setCurrentStep] = useState(0);

  const data = {
    currentStep,
    setCurrentStep,
  };

  return (
    <FormContext.Provider value={data}>
      { children }
    </FormContext.Provider>
  );
}

FormContext.propTypes = ({
  children: PropTypes.element.isRequired,
});

export default FormProvider;
