/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, { useContext } from 'react';
import FormContext from '../context/FormContext';

const randomId = require('random-id');

function Header() {
  const { newId, setNewId } = useContext(FormContext);
  const { newForm, setNewForm } = useContext(FormContext);

  const genId = () => {
    const len = 30;
    const pattern = 'aA0';

    const id = randomId(len, pattern);
    setNewId(id);
    setNewForm(newId);
    console.log('newId', newId);
  };

  const novoCliente = 1;
  const { currentStep, setCurrentStep } = useContext(FormContext);
  const Next = () => setCurrentStep(() => novoCliente);

  return (
    <header>
      <p>Wizard Form</p>
      <div>
        <select
          name="menu"
          onChange={
            (e) => {
              Next(e);
              genId(e);
            }
          }
        >
          <option value="" disabled selected>Menu</option>
          <option value={novoCliente}>Novo Cliente</option>
          <option value={novoCliente + 1}>Lista de Clientes</option>
        </select>
      </div>
    </header>
  );
}

export default Header;
