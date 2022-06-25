import React from 'react';
import { Typography, Box } from '@mui/material';

function Header() {
  return (
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
  );
}

export default Header;
