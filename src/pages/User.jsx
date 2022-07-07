import React from 'react';
import Header from '../components/Header';
import FormProvider from '../context/FormProvider';
import UserData from '../components/UserData';

function User() {
  return (
    <FormProvider>
      <Header />
      <UserData />
    </FormProvider>
  );
}

export default User;
