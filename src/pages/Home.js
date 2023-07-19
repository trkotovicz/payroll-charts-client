import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Card, Container, Icon, Link, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import analyticsImage from '../img/analytics.PNG';
import Footer from '../components/Footer';

function Home() {
  const [email, setEmail] = useState('');
  const [showHidden, setShowHidden] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async () => {
    const emailRegex = /\S+@\S+\.\S+/;
    const isValidEmail = emailRegex.test(email);

    if (!isValidEmail) {
      setShowHidden(true);
      setEmail('');
      return;
    }
    navigate('/charts', { state: { email } });
  };

  return (
    <>
      <Navbar />
      <Container sx={{ display: 'flex', flexDirection: {xs: 'column', md: 'row'}, justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
        <Box>
        <Box sx={{ mt: { xs: 8, md: 'none' }, display: 'flex', alignItems: 'flex-start', textAlign: 'start', flexDirection: 'column' }}>
          <Typography variant='h2' sx={{ my: 4, color: 'primary.main', textAlign: 'center' }}>
            People Analytics
          </Typography>
          <Typography variant='h6'>
            Dashboards dinâmicos para monitoriar e atuar em todos os indicadores chave do RH: de controle de headcount, turnover e custos a índices de diversidade e inclusão.
          </Typography>
        </Box>

        <Box sx={{ mt: 2, width: '100%', display: 'flex', justifySelf: 'flex-start', alignItems: 'center', justifyContent: 'flex-start' }}>
            {showHidden ? (
              <TextField
                error
                id="standard-error-helper-text"
                type="email"
                label="Digite o email para busca"
                helperText="Digite um email válido"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                sx={{ flex: '0.7', mr: 2 }}
              />
            ) : (
              <TextField
                variant="outlined"
                type="email"
                label="Digite o email para busca"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                sx={{ flex: '0.7', mr: 2 }}
              />
            )}

            <Button variant='contained' sx={{ m: 2, p: 2, bgcolor: 'primary.light', textTransform: 'none', fontWeight: 'bold', display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center' }} onClick={handleSearch}>
              <Icon>
                <SearchIcon />
              </Icon>
            </Button>
          </Box>

        </Box>

        <Box component='img' sx={{ mt: { xs: 6, md: 'none' }, ml: {xs: 'none', md: 2 }}}
          src={analyticsImage} alt="analytics"
        />

      </Container>

      <Footer />
    </>
  );
}

export default Home;