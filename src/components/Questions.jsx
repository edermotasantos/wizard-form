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
  const { firstNameList, setFirstNameList } = useContext(FormContext);
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
    console.log(setNewForm);
    console.log(firstNameList);
    console.log(dataList);
  };

  const Next = () => setCurrentStep((prevState) => prevState + 1);

  const previous = () => setCurrentStep((prevState) => prevState - 1);

  return (
    <>
      <h1>Wizard Form</h1>
      <form>
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
            {/* <PersonalInfo2 /> */}
            <PersonalInfo />
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
