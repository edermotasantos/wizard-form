/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-expressions */
import React, { useContext } from 'react';
import FormContext from '../context/FormContext';

function Address() {
  const { add1, setAdd1 } = useContext(FormContext);
  const { cep1, setCep1 } = useContext(FormContext);
  const { add2, setAdd2 } = useContext(FormContext);
  const { cep2, setCep2 } = useContext(FormContext);

  return (
    <div>
      <div>
        <label htmlFor="add1">Endereço 1</label>
        <input
          id="add1"
          name="add1"
          type="text"
          value={add1}
          onChange={(e) => setAdd1(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="cep1">CEP 1</label>
        <input
          id="cep1"
          name="cep1"
          type="text"
          value={cep1}
          onChange={(e) => setCep1(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="add2">Endereço 2</label>
        <input
          id="add2"
          name="add2"
          type="text"
          value={add2}
          onChange={(e) => setAdd2(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="cep2">CEP 2</label>
        <input
          id="cep2"
          name="cep2"
          type="text"
          value={cep2}
          onChange={(e) => setCep2(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Address;
