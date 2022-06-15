/* eslint-disable no-unused-expressions */
import React, { useContext } from 'react';
import FormContext from '../context/FormContext';

function Header() {
  const novoCliente = 1;
  const { currentStep, setCurrentStep } = useContext(FormContext);
  const Next = () => setCurrentStep(() => novoCliente);

  return (
    <header>
      <p>Wizard Form</p>
      {(currentStep === 0 || currentStep === 4) && (
        <div>
          <select name="menu" onChange={(e) => Next(e)}>
            <option value="" disabled selected>Menu</option>
            <option value={novoCliente}>Novo Cliente</option>
            <option value={novoCliente + 1}>Lista de Clientes</option>
          </select>
        </div>
      )}
    </header>
  );
}

export default Header;
