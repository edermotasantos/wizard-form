import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import FormContext from '../context/FormContext';

function HandleSubmit() {
  const { setCurrentStep } = useContext(FormContext);
  const { newForm, setNewForm } = useContext(FormContext);
  const { setDataList } = useContext(FormContext);
  const { setSelectedValue } = useContext(FormContext);
  const { countUsersData, setCountUsersData } = useContext(FormContext);
  const { setEmptyList } = useContext(FormContext);

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
    setCountUsersData((prevState) => prevState + 1);

    setCurrentStep((prevState) => prevState + 1);
  };
  return (
    <Button
      type="button"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
      onClick={handleSubmit}
      color="success"
    >
      Enviar
    </Button>
  );
}

export default HandleSubmit;
