/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-expressions */
import React, { useContext } from 'react';
import FormContext from '../context/FormContext';

function BasicInfo() {
  const { firstName, setFirstName } = useContext(FormContext);
  const { lastName, setLastName } = useContext(FormContext);
  const { email, setEmail } = useContext(FormContext);
  const { phone, setPhone } = useContext(FormContext);
  const { newForm, setNewForm } = useContext(FormContext);
  const { firstNameList, setFirstNameList } = useContext(FormContext);
  const { newId, setNewId } = useContext(FormContext);

  const handleChange = ({ target: { value, name } }) => {
    if (firstName !== undefined && lastName !== undefined) {
      const fullName = `${firstName} ${lastName}`;
      const userObj = { newId, fullName };
      const formObj = { ...newForm };
      setFirstNameList((prevState) => ({
        ...prevState,
        userObj,
      }));
      setNewForm(() => userObj);
    }

    setNewForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <div>
        <label htmlFor="firstName">Nome</label>
        <input
          placeholder="Escreva o seu nome"
          id="firstName"
          name="firstName"
          type="text"
          value={firstName}
          onChange={(e) => {
            handleChange(e);
            setFirstName(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="lastName">Sobrenome</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          value={lastName}
          onChange={(e) => {
            handleChange(e);
            setLastName(e.target.value);
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
            setEmail(e.target.value);
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
            setPhone(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default BasicInfo;
