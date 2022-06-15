/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-expressions */
import React from 'react';

function PersonalInfo1() {
  return (
    <div>
      <div>
        <label htmlFor="fname">Nome</label>
        <input id="fname" name="fname" type="text" />
      </div>
      <div>
        <label htmlFor="lname">Sobrenome</label>
        <input id="lname" name="lname" type="text" />
      </div>
      <div>
        <label htmlFor="email">E-Mail</label>
        <input id="email" name="email" type="email" />
      </div>
      <div>
        <label htmlFor="phone">telefone</label>
        <input id="phone" name="phone" type="text" />
      </div>
    </div>
  );
}

export default PersonalInfo1;
