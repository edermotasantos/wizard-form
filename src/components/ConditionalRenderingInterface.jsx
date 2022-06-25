import React, { useContext } from 'react';
import PersonalInfo from './PersonalInfo';
import Address from './Address';
import BasicInfo from './BasicInfo';
import FormContext from '../context/FormContext';
import UserList from './UserList';
import UserData from './UserData';
import UserRegisteredSuccessfully from './UserRegisteredSuccessfully';

function ConditionalRenderingInterface() {
  const { currentStep } = useContext(FormContext);
  const renderObj = {
    1: <BasicInfo />,
    2: <Address />,
    3: <PersonalInfo />,
    4: <UserRegisteredSuccessfully />,
    5: <UserList />,
    6: <UserData />,
  };

  return (
    <form>
      {renderObj[currentStep]}
    </form>
  );
}

export default ConditionalRenderingInterface;
