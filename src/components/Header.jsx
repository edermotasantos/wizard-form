import React, { useContext } from 'react';
import { Select, Typography } from '@mui/material';
import { MenuItem } from '@material-ui/core';
import FormContext from '../context/FormContext';

function Header() {
  const { usersArr } = useContext(FormContext);

  const { setCurrentStep } = useContext(FormContext);
  const { selectedValue, setSelectedValue } = useContext(FormContext);
  const Next = ({ target: { value } }) => {
    const num = parseInt(value, 10);
    setCurrentStep(() => num);
  };

  const listUsers = () => {
    usersArr.map(({ id, full_name }) => `${id} ${full_name}\n`);
  };

  const setvalue = async (e) => {
    const { target: { value } } = e;
    Next(e);
    setSelectedValue(value);
    setSelectedValue(0);
    if (value === 5) {
      listUsers();
    }
  };

  return (
    <header>
      <Typography sx={{ marginLeft: '1rem', marginTop: '1rem' }} variant="h6" component="div" gutterBottom>
        Wizard Form
      </Typography>
      <div>
        <Select
          sx={{ marginLeft: '2rem', marginTop: '1rem' }}
          labelId="menu"
          id="menu"
          value={selectedValue}
          label="menu"
          onChange={(e) => {
            setvalue(e);
            Next(e);
            // genId(e);
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
