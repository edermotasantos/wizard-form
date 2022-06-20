/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-expressions */
import React, { useContext } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormContext from '../context/FormContext';
import Copyright from './Copyright';
import Next from './Next';

const theme = createTheme();
// const randomId = require('random-id');

function BasicInfo() {
  const { newForm, setNewForm } = useContext(FormContext);
  const { usersArr, setUsersArr } = useContext(FormContext);
  const { newId } = useContext(FormContext);
  const { countUsersData } = useContext(FormContext);
  const { setNewId } = useContext(FormContext);
  const { countField, setCountField } = useContext(FormContext);
  const {
    first_name,
    last_name,
    email,
    phone,
  } = newForm;

  const count = () => setCountField((prevState) => prevState + 1);

  // const genId = async () => {
  //   const len = 30;
  //   const pattern = 'aA0';
  //   const id = await randomId(len, pattern);
  //   await setNewId(id);
  //   console.log('id', id);
  // };

  const handleChange = async (e) => {
    const { target: { value, name } } = e;
    // if (countField === 1) {
    //   await genId(e);
    // }
    if (first_name !== undefined && last_name !== undefined) {
      const fullName = `${first_name} ${last_name}`;
      const userObj = { id: newId, full_name: fullName };
      setUsersArr((prevState) => ({
        ...prevState,
        [countUsersData]: userObj,
      }));

      setNewForm((prevState) => ({
        ...prevState,
        user_info: userObj,
        id: userObj.id,
        full_name: userObj.full_name,
      }));
    }

    count();

    setNewForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Dados Básicos
          </Typography>
          <Box component="div" sx={{ mt: 3, margin: 'auto' }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-first_name"
                  name="first_name"
                  required
                  fullWidth
                  id="firstName"
                  label="Nome"
                  autoFocus
                  value={first_name}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-last_name"
                  name="last_name"
                  required
                  fullWidth
                  id="firstName"
                  label="Sobrenome"
                  autoFocus
                  value={last_name}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-email"
                  name="email"
                  required
                  fullWidth
                  id="email"
                  label="E-Mail"
                  autoFocus
                  value={email}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-phone"
                  name="phone"
                  required
                  fullWidth
                  id="phone"
                  label="Telefone"
                  autoFocus
                  value={phone}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Grid>
            </Grid>
            <Next />
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

export default BasicInfo;
