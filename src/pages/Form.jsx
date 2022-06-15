/* eslint-disable import/no-named-as-default */
import React from 'react';
import Header from '../components/Header';
import FormProvider from '../context/FormProvider';
// eslint-disable-next-line import/no-named-as-default-member
import Questions from '../components/Questions';

function Form() {
  return (
    <FormProvider>
      <Header />
      <Questions />
    </FormProvider>
  );
}

export default Form;
