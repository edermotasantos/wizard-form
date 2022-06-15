/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-expressions */
import React, { useContext } from 'react';
import FormContext from '../context/FormContext';

function PersonalInfo2() {
  const { bday, setBday } = useContext(FormContext);
  const { cpf, setCpf } = useContext(FormContext);
  const { income, setIncome } = useContext(FormContext);

  return (
    <div>
      <div>
        <label htmlFor="bday">Data de Nascimento</label>
        <input
          id="bday"
          name="bday"
          type="text"
          value={bday}
          onChange={(e) => setBday(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="cpf">CPF</label>
        <input
          id="cpf"
          name="cpf"
          type="text"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="income">Renda Mensal</label>
        <input
          id="income"
          name="income"
          type="text"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />
      </div>
    </div>
  );
}

export default PersonalInfo2;
