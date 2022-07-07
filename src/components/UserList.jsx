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
import { useNavigate } from 'react-router-dom';
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
  const { dataList } = useContext(FormContext);
  const { emptyList } = useContext(FormContext);
  const { setIsLoading } = useContext(FormContext);

  const navigate = useNavigate();

  const showUserData = (value) => {
    setIsLoading(true);
    navigate(`/usuario/${value}`);
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
