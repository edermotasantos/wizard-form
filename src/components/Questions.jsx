/* eslint-disable no-unused-expressions */
import React, { useContext } from 'react';
import Stepper from 'react-stepper-horizontal';
import FormContext from '../context/FormContext';
import PersonalInfo1 from './PersonalInfo1';
import Address from './Address';
import PersonalInfo2 from './PersonalInfo2';

function Questions() {
  const { currentStep, setCurrentStep } = useContext(FormContext);

  const sections = [
    { title: 'Informações Pessoais' },
    { title: 'Endereço' },
    { title: 'Data de Nascimento' },
    { title: 'Review' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const Next = () => setCurrentStep((prevState) => prevState + 1);

  const previous = () => setCurrentStep((prevState) => prevState - 1);

  return (
    <>
      <h1>Dynamic Form Fields in React</h1>
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
            <p>{currentStep}</p>
            <button type="button" onClick={(e) => Next(e)}>Next</button>
          </>
        )}

        {currentStep === 2 && (
          <>
            <Address />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button type="button" onClick={previous}>Back</button>
              <button type="button" onClick={(e) => Next(e)}>Next</button>
            </div>
          </>
        )}

        {currentStep === 3 && (
          <>
            <PersonalInfo2 />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button type="button" onClick={previous}>Back</button>
              <button type="button" onClick={handleSubmit && Next}>Submit</button>
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
