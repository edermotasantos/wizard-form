/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-expressions */
import React, { useContext } from 'react';
import FormContext from '../context/FormContext';

function BasicInfo() {
  const { newForm, setNewForm } = useContext(FormContext);
  const { usersArr, setUsersArr } = useContext(FormContext);
  const { newId, setNewId } = useContext(FormContext);
  const { dataList, setDataList } = useContext(FormContext);
  const {
    first_name,
    last_name,
    email,
    phone,
  } = newForm;

  const handleChange = ({ target: { value, name } }) => {
    if (first_name !== undefined && last_name !== undefined) {
      const fullName = `${first_name} ${last_name}`;
      const userObj = { id: newId, full_name: fullName };

      setUsersArr((prevState) => ({
        ...prevState,
        user_info: userObj,
      }));

      setNewForm((prevState) => ({
        ...prevState,
        user_info: userObj,
      }));
    }

    setNewForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log('newForm', newForm);
    console.log('usersArr', usersArr);
    // console.log('dataList', dataList.length);
  };

  return (
    <div>
      <div>
        <label htmlFor="firstName">Nome</label>
        <input
          placeholder="Escreva o seu nome"
          id="firstName"
          name="first_name"
          type="text"
          value={first_name}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
      <div>
        <label htmlFor="lastName">Sobrenome</label>
        <input
          id="lastName"
          name="last_name"
          type="text"
          value={last_name}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
      <div>
        <label htmlFor="email">E-Mail</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
      <div>
        <label htmlFor="phone">telefone</label>
        <input
          id="phone"
          name="phone"
          type="text"
          value={phone}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
    </div>
  );
}

export default BasicInfo;
