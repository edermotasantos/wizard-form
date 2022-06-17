/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, { useContext } from 'react';
import FormContext from '../context/FormContext';

const randomId = require('random-id');

function Header() {
  const { newId, setNewId } = useContext(FormContext);
  const { newForm, setNewForm } = useContext(FormContext);
  const { dataList, setDataList } = useContext(FormContext);

  const genId = async (e) => {
    const len = 30;
    const pattern = 'aA0';

    const id = await randomId(len, pattern);
    await setNewId(id);
    console.log('e.target.value', e.target.value);
    console.log('newId', newId);
    const arrStorage = JSON.parse(localStorage.getItem('lista_de_usuários'));
    console.log('dataList', dataList);
    console.log('arrStorage', arrStorage);
  };

  const { currentStep, setCurrentStep } = useContext(FormContext);
  const { selectedValue, setSelectedValue } = useContext(FormContext);
  const Next = ({ target: { value } }) => {
    const num = parseInt(value, 10);
    setCurrentStep(() => num);
  };

  const setvalue = ({ target: { value } }) => {
    setSelectedValue(value);
    setSelectedValue(0);
  };

  return (
    <header>
      <p>Wizard Form</p>
      <div>
        <select
          name="menu"
          value={selectedValue}
          onChange={
            (e) => {
              setvalue(e);
              Next(e);
              genId(e);
            }
          }
        >
          <option value={0} disabled selected>Menu</option>
          <option value={1}>Novo Cliente</option>
          <option value={5}>Lista de Clientes</option>
        </select>
      </div>
    </header>
  );
}

export default Header;
