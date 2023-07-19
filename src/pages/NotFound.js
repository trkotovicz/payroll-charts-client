import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  
  return (
    <Box>
      <Navbar />

      <Container sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>

        <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', height: '500px', alignItems: 'center' }}>
          <Typography sx={{ my: 6 }} variant="h2" gutterBottom>
            Página não encontrada
          </Typography>
          <Typography sx={{ my: 4 }} variant="h4" gutterBottom>
            Parece que você se perdeu...
          </Typography>
          <Button sx={{ my: 4 }} size='large' variant="contained" onClick={ () => navigate('/') } color="primary">
            Voltar para página inicial
          </Button>
        </Box>
      </Container>

      <Footer position={'absolute'} bottom={0} width={'100%'} />
    </Box>
  );
}

export default NotFound;
