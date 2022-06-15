/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-expressions */
import React, { useContext } from 'react';
import FormContext from '../context/FormContext';

function PersonalInfo1() {
  const { firstName, setFirstName } = useContext(FormContext);
  const { lastName, setLastName } = useContext(FormContext);
  const { email, setEmail } = useContext(FormContext);
  const { phone, setPhone } = useContext(FormContext);

  return (
    <div>
      <div>
        <label htmlFor="fname">Nome</label>
        <input
          placeholder="Escreva o seu nome"
          id="fname"
          name="fname"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lname">Sobrenome</label>
        <input
          id="lname"
          name="lname"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">E-Mail</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="phone">telefone</label>
        <input
          id="phone"
          name="phone"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
    </div>
  );
}

export default PersonalInfo1;
