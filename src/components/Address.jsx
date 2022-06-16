/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-expressions */
import React, { useContext } from 'react';
import FormContext from '../context/FormContext';

function Address() {
  const { newForm, setNewForm } = useContext(FormContext);

  const {
    address_1,
    cep_1,
    address_2,
    cep_2,
  } = newForm;

  const handleChange = ({ target: { value, name } }) => {
    setNewForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(newForm);
  };

  return (
    <div>
      <div>
        <label htmlFor="add1">Endereço 1</label>
        <input
          id="add1"
          name="address_1"
          type="text"
          value={address_1}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
      <div>
        <label htmlFor="cep1">CEP 1</label>
        <input
          id="cep1"
          name="cep_1"
          type="text"
          value={cep_1}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
      <div>
        <label htmlFor="add2">Endereço 2</label>
        <input
          id="add2"
          name="address_2"
          type="text"
          value={address_2}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
      <div>
        <label htmlFor="cep2">CEP 2</label>
        <input
          id="cep2"
          name="cep_2"
          type="text"
          value={cep_2}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
    </div>
  );
}

export default Address;
