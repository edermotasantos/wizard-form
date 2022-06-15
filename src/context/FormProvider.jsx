/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import FormContext from './FormContext';

// eslint-disable-next-line react/prop-types
function FormProvider({ children }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [add1, setAdd1] = useState();
  const [cep1, setCep1] = useState();
  const [add2, setAdd2] = useState();
  const [cep2, setCep2] = useState();
  const [bday, setBday] = useState();
  const [cpf, setCpf] = useState();
  const [income, setIncome] = useState();
  const [newForm, setNewForm] = useState({
    firstName,
    lastName,
    email,
    phone,
    add1,
    cep1,
    add2,
    cep2,
    bday,
    cpf,
    income,
  });
  const [firstNameList, setFirstNameList] = useState([]);
  const [dataList, setDataList] = useState([]);

  const data = {
    currentStep,
    setCurrentStep,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    phone,
    setPhone,
    add1,
    setAdd1,
    cep1,
    setCep1,
    add2,
    setAdd2,
    cep2,
    setCep2,
    bday,
    setBday,
    cpf,
    setCpf,
    income,
    setIncome,
    newForm,
    setNewForm,
    firstNameList,
    setFirstNameList,
    dataList,
    setDataList,
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
