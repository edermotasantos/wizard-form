import React from 'react';
import Header from '../components/Header';
import FormProvider from '../context/FormProvider';
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
