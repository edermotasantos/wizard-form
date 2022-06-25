/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable camelcase */
import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PersonalInfo from './PersonalInfo';
import Address from './Address';
import BasicInfo from './BasicInfo';
import FormContext from '../context/FormContext';
import UserList from './UserList';
import UserData from './UserData';

function Questions() {
  const { currentStep } = useContext(FormContext);

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

      {currentStep === 5 && (<UserList />)}

      {currentStep === 6 && (<UserData />)}
    </form>
  );
}

export default Questions;
