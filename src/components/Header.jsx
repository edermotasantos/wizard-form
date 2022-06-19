/* eslint-disable camelcase */
import React, { useContext } from 'react';
import { Select, Typography } from '@mui/material';
import { MenuItem } from '@material-ui/core';
import FormContext from '../context/FormContext';

const randomId = require('random-id');

function Header() {
  const { setNewId } = useContext(FormContext);
  const { usersArr } = useContext(FormContext);

  const genId = async () => {
    const len = 30;
    const pattern = 'aA0';
    const id = await randomId(len, pattern);
    await setNewId(id);
  };

  const { setCurrentStep } = useContext(FormContext);
  const { selectedValue, setSelectedValue } = useContext(FormContext);
  const Next = ({ target: { value } }) => {
    const num = parseInt(value, 10);
    setCurrentStep(() => num);
  };

  const listUsers = () => {
    usersArr.map(({ id, full_name }) => `${id} ${full_name}\n`);
  };

  const setvalue = (e) => {
    const { target: { value } } = e;
    Next(e);
    genId(e);
    setSelectedValue(value);
    setSelectedValue(0);
    if (value === 5) {
      listUsers();
    }
  };

  return (
    <header>
      <Typography sx={{ m: '1rem' }} variant="h6" component="div" gutterBottom>
        Wizard Form
      </Typography>
      <div>
        <Select
          sx={{ m: '2rem' }}
          labelId="menu"
          id="menu"
          value={selectedValue}
          label="menu"
          onChange={(e) => {
            setvalue(e);
            Next(e);
            genId(e);
          }}
        >
          <MenuItem value={0} disabled>Menu</MenuItem>
          <MenuItem value={1}>Novo Cliente</MenuItem>
          <MenuItem value={5}>Lista de Clientes</MenuItem>
        </Select>
      </div>
    </header>
  );
}

export default Header;
