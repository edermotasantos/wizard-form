import React from 'react';
import Header from '../components/Header';
import FormProvider from '../context/FormProvider';
import ConditionalRenderingInterface from '../components/ConditionalRenderingInterface';

function Form() {
  return (
    <FormProvider>
      <Header />
      <ConditionalRenderingInterface />
    </FormProvider>
  );
}

export default Form;
