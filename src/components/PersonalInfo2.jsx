/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-expressions */
import React from 'react';

function PersonalInfo2() {
  return (
    <div>
      <div>
        <label htmlFor="fname">Data de Nascimento</label>
        <input id="fname" name="fname" type="text" />
      </div>
      <div>
        <label htmlFor="lname">CPF</label>
        <input id="lname" name="lname" type="text" />
      </div>
      <div>
        <label htmlFor="fname">Renda Mensal</label>
        <input id="fname" name="fname" type="text" />
      </div>
    </div>
  );
}

export default PersonalInfo2;
