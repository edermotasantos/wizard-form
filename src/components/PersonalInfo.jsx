import React, { useContext } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ButtonGroup } from '@mui/material';
import FormContext from '../context/FormContext';
import Copyright from './Copyright';
import HandleSubmit from './HandleSubmit';
import Previous from './Previous';

const theme = createTheme();
const randomId = require('random-id');

function PersonalInfo() {
  const { newForm, setNewForm } = useContext(FormContext);
  const { dataList, setDataList } = useContext(FormContext);
  const { countUsersData } = useContext(FormContext);
  const { setCountField } = useContext(FormContext);
  const { setNewId } = useContext(FormContext);
  const { noId, setNoId } = useContext(FormContext);
  const { setUsersArr } = useContext(FormContext);
  const {
    birth_day,
    cpf,
    income,
  } = newForm;

  const count = () => setCountField((prevState) => prevState + 1);

  const genId = async () => {
    const len = 30;
    const pattern = 'aA0';
    const id = await randomId(len, pattern);
    await setNewId(id);
    return id;
  };

  const handleChange = async (e) => {
    const { target: { value, name } } = e;
    setNewForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setDataList((prevState) => ({
      ...prevState,
      [countUsersData]: newForm,
    }));

    count();
    const everyFieldIsFilled = Object.values(newForm).every((field) => field.length !== 0);
    const someFieldIsFilled = Object.values(newForm).some((field) => field.length !== 0);
    if (someFieldIsFilled === true && noId === true) {
      const id = await genId(e);
      setNewForm((prevState) => ({
        ...prevState,
        id,
      }));
      setUsersArr((prevState) => ({
        ...prevState,
        id,
      }));
      setDataList((prevState) => ({
        ...prevState,
        [countUsersData]: newForm,
      }));
      setNoId(false);
    }

    if (everyFieldIsFilled === true) {
      const stringStorage = JSON.stringify(dataList);
      localStorage.setItem('lista_de_usuários', stringStorage);
    }
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
            Dados Pessoais
          </Typography>
          <Box component="div" sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-birth_day"
                  name="birth_day"
                  required
                  fullWidth
                  id="bday"
                  label="Data de Nascimento"
                  autoFocus
                  value={birth_day}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-cpf"
                  name="cpf"
                  required
                  fullWidth
                  id="cpf"
                  label="CPF"
                  autoFocus
                  value={cpf}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-income"
                  name="income"
                  required
                  fullWidth
                  id="income"
                  label="Renda Mensal"
                  autoFocus
                  value={income}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Grid>
            </Grid>
            <ButtonGroup
              orientation="horizontal"
              fullWidth
            >
              <Previous />
              <HandleSubmit />
            </ButtonGroup>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

export default PersonalInfo;
