import React from 'react';
import Header from '../components/Header';
import FormProvider from '../context/FormProvider';
import UserList from '../components/UserList';

function User() {
  return (
    <FormProvider>
      <Header />
      <UserList />
    </FormProvider>
  );
}

export default User;
