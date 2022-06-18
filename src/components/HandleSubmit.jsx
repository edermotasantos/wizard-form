/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import FormContext from '../context/FormContext';

function HandleSubmit() {
  const { currentStep, setCurrentStep } = useContext(FormContext);
  const { newForm, setNewForm } = useContext(FormContext);
  const { usersArr, setUsersArr } = useContext(FormContext);
  const { dataList, setDataList } = useContext(FormContext);
  const { selectedValue, setSelectedValue } = useContext(FormContext);
  const { countUsersData, setCountUsersData } = useContext(FormContext);
  const { emptyList, setEmptyList } = useContext(FormContext);
  const { userPage, setUserPage } = useContext(FormContext);
  const clearNewForm = () => {
    const formArr = [
      'first_name',
      'last_name',
      'email',
      'phone',
      'address_1',
      'cep_1',
      'address_2',
      'cep_2',
      'birth_day',
      'cpf',
      'income',
    ];

    formArr.forEach((name) => {
      setNewForm((prevState) => ({
        ...prevState,
        [name]: '',
      }));
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSelectedValue(0);

    setDataList((prevState) => ({
      ...prevState,
      [countUsersData]: newForm,
    }));

    clearNewForm();
    setEmptyList(false);

    console.log(countUsersData);
    setCountUsersData((prevState) => prevState + 1);

    const stringStorage = JSON.stringify(dataList);
    localStorage.setItem('lista_de_usuários', stringStorage);
    const arrStorage = JSON.parse(localStorage.getItem('lista_de_usuários'));

    console.log('dataList', dataList);
    console.log('arrStorage', arrStorage);
    // localStorage.clear();
    console.log('usersArr', usersArr);
    setCurrentStep((prevState) => prevState + 1);
  };
  return (
    <Button
      type="button"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
      onClick={handleSubmit}
    >
      Enviar
    </Button>
  );
}

export default HandleSubmit;
