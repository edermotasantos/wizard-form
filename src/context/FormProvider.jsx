/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import FormContext from './FormContext';

// eslint-disable-next-line react/prop-types
function FormProvider({ children }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [newForm, setNewForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address_1: '',
    cep_1: '',
    address_2: '',
    cep_2: '',
    birth_day: '',
    cpf: '',
    income: '',
  });
  const [usersArr, setUsersArr] = useState([]);
  const [dataList, setDataList] = useState([]);
  const [newId, setNewId] = useState(0);
  const [selectedValue, setSelectedValue] = useState(0);
  const [countUsersData, setCountUsersData] = useState(0);
  const [emptyList, setEmptyList] = useState(true);
  const [userPage, setUserPage] = useState();

  const data = {
    currentStep,
    setCurrentStep,
    newForm,
    setNewForm,
    usersArr,
    setUsersArr,
    dataList,
    setDataList,
    newId,
    setNewId,
    selectedValue,
    setSelectedValue,
    countUsersData,
    setCountUsersData,
    emptyList,
    setEmptyList,
    userPage,
    setUserPage,
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
