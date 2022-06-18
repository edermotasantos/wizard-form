/* eslint-disable import/no-named-as-default */
import React from 'react';
import Header from '../components/Header';
import FormProvider from '../context/FormProvider';
// eslint-disable-next-line import/no-named-as-default-member
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
