/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, { useContext } from 'react';
import Stepper from 'react-stepper-horizontal';
import {
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';
import PersonalInfo from './PersonalInfo';
import Address from './Address';
import BasicInfo from './BasicInfo';
import FormContext from '../context/FormContext';
import Copyright from './Copyright';
import Next from './Next';
import Previous from './Previous';
import HandleSubmit from './HandleSubmit';

const theme = createTheme();

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
  mt: 3,
  marginTop: 8,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

function Questions() {
  const { currentStep, setCurrentStep } = useContext(FormContext);
  const { newForm, setNewForm } = useContext(FormContext);
  const { dataList, setDataList } = useContext(FormContext);
  const { selectedValue, setSelectedValue } = useContext(FormContext);
  const { countUsersData, setCountUsersData } = useContext(FormContext);
  const { emptyList, setEmptyList } = useContext(FormContext);
  const { userPage, setUserPage } = useContext(FormContext);

  const sections = [
    { title: 'Informações Pessoais' },
    { title: 'Endereço' },
    { title: 'Data de Nascimento' },
    { title: 'Review' },
  ];

  const labelsArr = [
    'nome completo:',
    'e-mail:',
    'telefone:',
    'endereço 1:',
    'CEP 1:',
    'endereço 2:',
    'CEP 2:',
    'data de nascimento:',
    'CPF:',
    'salário mensal:',
  ];

  const next = () => setCurrentStep((prevState) => prevState + 1);

  const showUserData = (value) => {
    const arrStorage = JSON.parse(localStorage.getItem('lista_de_usuários'));
    console.log(arrStorage);
    const user = Object.values(arrStorage).find(({ id }) => id === value);
    const userSpliced = Object.values(user).splice(2, 9);

    setUserPage(userSpliced);
    next();
  };

  return (
    <form>

      {currentStep === 1 && (<BasicInfo />)}

      {currentStep === 2 && (<Address />)}

      {currentStep === 3 && (<PersonalInfo />)}

      {currentStep === 4 && (
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography sx={{ m: '1rem' }} variant="h4" component="div" gutterBottom>
            cadastro concluído com sucesso!
          </Typography>
        </Box>
      )}

      {currentStep === 5 && (
      <div>
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
                Usuários Cadastrados
              </Typography>
              <List
                component="nav"
                aria-label="mailbox folders"
                sx={style}
              >
                <Grid container spacing={2}>
                  <>
                    <ListItem
                      button
                      divider
                    >
                      <ListItemText sx={{ fontWeight: 'bold' }} primary="Nome" />
                      <ListItemText primary="id" />
                    </ListItem>
                    <Divider />
                  </>
                  { emptyList
                    ? <h3>Lista vazia</h3>
                    : (Object.values(dataList).map(({ id, full_name }) => (
                      <>
                        <ListItem
                          button
                          divider
                          value={id}
                          key={Object.values(id)[9]}
                          onClick={() => showUserData(id)}
                        >
                          <ListItemText primary={full_name} />
                          <ListItemText primary={id} />
                        </ListItem>
                        <Divider />
                      </>
                    )))}
                </Grid>
              </List>
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Container>
        </ThemeProvider>
      </div>
      )}

      {currentStep === 6 && (
        <div>
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: -11,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Typography component="h1" variant="h5" sx={{ marginTop: 11, marginBottom: -8 }}>
                  Dados do usuário
                </Typography>
                <List
                  component="nav"
                  aria-label="mailbox folders"
                  sx={style}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      { emptyList
                        ? <h3>Lista vazia</h3>
                        : (userPage.map((item, index) => (
                          <>
                            <ListItem
                              divider
                              value={Object.values(item)}
                              item
                              key={Object.values(item)[9]}
                              xs={12}
                            >
                              <ListItemText primary={`${labelsArr[index]} ${Object.values(item)}`.replace(/,/g, '')} />
                            </ListItem>
                            <Divider />
                          </>
                        )))}
                    </Grid>
                  </Grid>
                </List>
              </Box>
              <Copyright sx={{ mt: 5 }} />
            </Container>
          </ThemeProvider>
        </div>
      )}
    </form>
  );
}

export default Questions;
