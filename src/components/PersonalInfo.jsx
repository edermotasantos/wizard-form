/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-expressions */
import React, { useContext } from 'react';
import FormContext from '../context/FormContext';

function PersonalInfo() {
  const { newForm, setNewForm } = useContext(FormContext);
  const { bday, setBday } = useContext(FormContext);
  const { cpf, setCpf } = useContext(FormContext);
  const { income, setIncome } = useContext(FormContext);
  const { dataList, setDataList } = useContext(FormContext);

  const handleChange = ({ target: { value, name } }) => {
    setNewForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setDataList((prevState) => ({
      ...prevState,
      newForm,
    }));
    console.log(dataList);
  };

  return (
    <div>
      <div>
        <label htmlFor="bday">Data de Nascimento</label>
        <input
          id="bday"
          name="bday"
          type="text"
          value={bday}
          onChange={(e) => {
            handleChange(e);
            setBday(e.target.value);
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
            setCpf(e.target.value);
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
            setIncome(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default PersonalInfo;
