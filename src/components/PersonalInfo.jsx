/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-expressions */
import React, { useContext } from 'react';
import FormContext from '../context/FormContext';

function PersonalInfo() {
  const { newForm, setNewForm } = useContext(FormContext);
  const { dataList, setDataList } = useContext(FormContext);
  const {
    birth_day,
    cpf,
    income,
  } = newForm;

  const handleChange = ({ target: { value, name } }) => {
    setNewForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(dataList);
  };

  return (
    <div>
      <div>
        <label htmlFor="bday">Data de Nascimento</label>
        <input
          id="bday"
          name="birth_day"
          type="text"
          value={birth_day}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
      <div>
        <label htmlFor="cpf">CPF</label>
        <input
          id="cpf"
          name="cpf"
          type="text"
          value={cpf}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
      <div>
        <label htmlFor="income">Renda Mensal</label>
        <input
          id="income"
          name="income"
          type="text"
          value={income}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
    </div>
  );
}

export default PersonalInfo;
