import React, { useContext } from 'react';
import PersonalInfo from './PersonalInfo';
import Address from './Address';
import BasicInfo from './BasicInfo';
import FormContext from '../context/FormContext';
import UserList from './UserList';
import UserData from './UserData';
import UserRegisteredSuccessfully from './UserRegisteredSuccessfully';

function Questions() {
  const { currentStep } = useContext(FormContext);

  return (
    <form>
      {currentStep === 1 && (<BasicInfo />)}

      {currentStep === 2 && (<Address />)}

      {currentStep === 3 && (<PersonalInfo />)}

      {currentStep === 4 && (<UserRegisteredSuccessfully />)}

      {currentStep === 5 && (<UserList />)}

      {currentStep === 6 && (<UserData />)}
    </form>
  );
}

export default Questions;
