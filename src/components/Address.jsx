/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-expressions */
import React from 'react';

function Address() {
  return (
    <div>
      <div>
        <label htmlFor="add1">Endereço 1</label>
        <input id="add1" name="add1" type="text" />
      </div>
      <div>
        <label htmlFor="cep1">CEP 1</label>
        <input id="cep1" name="cep1" type="text" />
      </div>
      <div>
        <label htmlFor="add2">Endereço 2</label>
        <input id="add2" name="add2" type="text" />
      </div>
      <div>
        <label htmlFor="cep2">CEP 2</label>
        <input id="cep2" name="cep2" type="text" />
      </div>
    </div>
  );
}

export default Address;
