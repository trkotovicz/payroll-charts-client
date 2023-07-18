import { Button, Container, Icon, Paper, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
     <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Typography variant='h1' sx={{ my: 4, color: 'primary.main', textAlign: 'center' }}>
        Payroll Charts
      </Typography>

      <Paper elevation={4} sx={{ p: 8, my: 8, width: '80%', background: '#f8f9fa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {showHidden ? (
            <TextField
              error
              id="standard-error-helper-text"
              type="email"
              label="Email"
              helperText="Digite o email para busca"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              sx={{ flex: '0.7', m: 2 }}
            />
          ) : (
            <TextField
              variant="outlined"
              type="email"
              label="Digite o email para busca"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              sx={{ flex: '0.7', m: 2 }}
            />
          )}

          <Button variant='contained' sx={{ m: 2, p: 2, bgcolor: 'primary.light', textTransform: 'none', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }} onClick={handleSearch}>
            <Icon>
              <SearchIcon />
            </Icon>
          </Button>
        </Paper>

    </Container>
  );
}

export default Home;