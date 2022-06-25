import React from 'react';
import Header from '../components/Header';
import FormProvider from '../context/FormProvider';
import Interface from '../components/Interface';

function Form() {
  return (
    <FormProvider>
      <Header />
      <Interface />
    </FormProvider>
  );
}

export default Form;
