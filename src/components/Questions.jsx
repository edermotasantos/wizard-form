/* eslint-disable no-unused-expressions */
import React, { useContext } from 'react';
import Stepper from 'react-stepper-horizontal';
import FormContext from '../context/FormContext';
import PersonalInfo1 from './PersonalInfo1';
import Address from './Address';
import PersonalInfo2 from './PersonalInfo2';

function Questions() {
  const { currentStep, setCurrentStep } = useContext(FormContext);
  const { newForm, setNewForm } = useContext(FormContext);
  const { setFirstNameList } = useContext(FormContext);
  // eslint-disable-next-line no-unused-vars
  const { dataList, setDataList } = useContext(FormContext);
  const { firstName } = useContext(FormContext);
  const { lastName } = useContext(FormContext);
  const { email } = useContext(FormContext);
  const { phone } = useContext(FormContext);
  const { add1 } = useContext(FormContext);
  const { cep1 } = useContext(FormContext);
  const { add2 } = useContext(FormContext);
  const { cep2 } = useContext(FormContext);
  const { bday } = useContext(FormContext);
  const { cpf } = useContext(FormContext);
  const { income } = useContext(FormContext);

  const sections = [
    { title: 'Informações Pessoais' },
    { title: 'Endereço' },
    { title: 'Data de Nascimento' },
    { title: 'Review' },
  ];

  const handleSubmit = () => {
    setNewForm(() => ({
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
    }));

    setFirstNameList((prevState) => ({
      ...prevState,
      firstName,
    }));

    setDataList((prevState) => ({
      ...prevState,
      newForm,
    }));
  };

  const Next = () => setCurrentStep((prevState) => prevState + 1);

  const previous = () => setCurrentStep((prevState) => prevState - 1);

  return (
    <>
      <h1>Wizard Form</h1>
      <form onSubmit={handleSubmit}>
        <Stepper
          steps={sections}
          activeStep={currentStep}
          activeColor="red"
          defaultBarColor="red"
          completeColor="green"
          completeBarColor="green"
        />

        {currentStep === 1 && (
          <>
            <PersonalInfo1 />
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
            <PersonalInfo2 />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button type="button" onClick={previous}>Back</button>
              <button type="button" onClick={handleSubmit}>Submit</button>
            </div>
          </>
        )}
        {currentStep === 4 && (
          <p>cadastro concluído com sucesso</p>
        )}
      </form>
    </>
  );
}

export default Questions;
