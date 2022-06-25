import React, { useContext } from 'react';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormContext from '../context/FormContext';
import Copyright from './Copyright';

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

function UserList() {
  const { setCurrentStep } = useContext(FormContext);
  const { setUserPage } = useContext(FormContext);
  const { dataList } = useContext(FormContext);
  const { emptyList } = useContext(FormContext);

  const next = () => setCurrentStep((prevState) => prevState + 1);

  const showUserData = (value) => {
    const arrStorage = JSON.parse(localStorage.getItem('lista_de_usuários'));
    const user = Object.values(arrStorage).find(({ id }) => id === value);
    const userSpliced = Object.values(user).splice(2, 9);

    setUserPage(userSpliced);
    next();
  };

  return (
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
  );
}

export default UserList;
