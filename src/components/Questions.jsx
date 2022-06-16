/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, { useContext } from 'react';
import Stepper from 'react-stepper-horizontal';
import FormContext from '../context/FormContext';
import BasicInfo from './BasicInfo';
import Address from './Address';
import PersonalInfo from './PersonalInfo';

function Questions() {
  const { currentStep, setCurrentStep } = useContext(FormContext);
  const { newForm, setNewForm } = useContext(FormContext);
  const { usersArr, setUsersArr } = useContext(FormContext);
  const { dataList, setDataList } = useContext(FormContext);
  const { selectedValue, setSelectedValue } = useContext(FormContext);

  const arrayStorage = [];

  const sections = [
    { title: 'Informações Pessoais' },
    { title: 'Endereço' },
    { title: 'Data de Nascimento' },
    { title: 'Review' },
  ];

  const Next = () => setCurrentStep((prevState) => prevState + 1);

  const previous = () => setCurrentStep((prevState) => prevState - 1);

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
    clearNewForm();
    arrayStorage.push(newForm);
    const stringStorage = JSON.stringify(arrayStorage);
    localStorage.setItem('lista_de_usuários', stringStorage);
    const arrStorage = JSON.parse(localStorage.getItem('lista_de_usuários'));
    console.log('arrayStorage', arrStorage);

    localStorage.clear();
    Next(e);
  };

  return (
    <form onSubmit={handleSubmit}>
      {(currentStep > 0 && currentStep < 5) && (
      <div>
        <h1>Novo Usuário</h1>
        <Stepper
          steps={sections}
          activeStep={currentStep}
          activeColor="red"
          defaultBarColor="red"
          completeColor="green"
          completeBarColor="green"
        />
      </div>
      )}

      {currentStep === 1 && (
      <>
        <BasicInfo />
        <button type="button" onClick={Next}>Next</button>
      </>
      )}

      {currentStep === 2 && (
      <>
        <Address />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button type="button" onClick={previous}>Back</button>
          <button type="button" onClick={Next}>Next</button>
        </div>
      </>
      )}

      {currentStep === 3 && (
      <>
        <PersonalInfo />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button type="button" onClick={previous}>Back</button>
          <button type="button" onClick={handleSubmit}>Submit</button>
        </div>
        { currentStep }
      </>
      )}

      {currentStep === 4 && (
      <h2>cadastro concluído com sucesso!</h2>
      )}
    </form>
  );
}

export default Questions;
