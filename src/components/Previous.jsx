import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import FormContext from '../context/FormContext';

function Previous() {
  const { setCurrentStep } = useContext(FormContext);
  return (
    <Button
      type="button"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
      onClick={() => setCurrentStep((prevState) => prevState - 1)}
      color="error"
    >
      Previous
    </Button>
  );
}

export default Previous;
