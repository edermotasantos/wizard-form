/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-expressions */

import React, { useContext } from 'react';
// import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormContext from '../context/FormContext';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/edermotasantos/wizard-form">
        github
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

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
            Endereço
          </Typography>
          <Box component="div" sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-address_1"
                  name="address_1"
                  required
                  fullWidth
                  id="add1"
                  label="Endereço 1"
                  autoFocus
                  value={address_1}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="cep1"
                  label="CEP 1"
                  name="cep_1"
                  autoComplete="given-cep_1"
                  value={cep_1}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-address_2"
                  name="address_2"
                  required
                  fullWidth
                  id="add2"
                  label="Endereço 2"
                  autoFocus
                  value={address_2}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="cep2"
                  label="CEP 2"
                  name="cep_2"
                  autoComplete="given-cep_2"
                  value={cep_2}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

export default Address;
