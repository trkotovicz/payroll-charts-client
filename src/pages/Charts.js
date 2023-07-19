import { Box, Container, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import HeadcountChart from '../components/HeadcountChart';
import TurnoverChart from '../components/Turnover';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Charts() {
  const [headcount, setHeadCount] = useState(null);
  const [turnover, setTurnover] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [isLoadingHeadcount, setIsLoadingHeadcount] = useState(true);
  const [isLoadingTurnover, setIsLoadingTurnover] = useState(true);
  const location = useLocation();
  const email = location.state.email;

  const BASE_URL = 'https://z64iardwce.execute-api.us-east-1.amazonaws.com/dev/api/v1/payroll/';

  useEffect(() => {
    try {
      fetchHeadcount();
      fetchTurnover();
      checkLoadingStatus();
    } catch (error) {
      console.error('Ocorreu um erro: ', error);
    }
  }, []);

  const checkLoadingStatus = () => {
    if (!isLoadingHeadcount && !isLoadingTurnover) {
      setIsLoading(false)
    }
  }

  const fetchHeadcount = async () => {
    const response = await fetch(`${BASE_URL}headcount/${email}`);
    const data = await response.json();
    setHeadCount(data);
    setIsLoadingHeadcount(false);
    checkLoadingStatus();
  }

  const fetchTurnover = async () => {
    const response = await fetch(`${BASE_URL}turnover/${email}`);
    const data = await response.json();
    setTurnover(data);
    setIsLoadingTurnover(false);
    checkLoadingStatus();
  }

  return (
    <>
      <Navbar />
      <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        
        <Typography variant='h3' sx={{  mt: { xs: 8, md: 'none' }, my: 4, color: 'primary.main', textAlign: 'center' }}>
          People Analytics Charts
        </Typography>
        
        { isLoading
          ? <div>Carregando...</div>
          : (
          <div>
            <Paper elevation={4} sx={{ my: 4, background: '#f8f9fa', alignItems: 'center', justifyContent: 'center' }}>
              <Box sx={{ my: 2, p: 1 }}>
                <Typography variant='h4' sx={{ mt: 2, textAlign: 'center' }}>Headcount</Typography>
                <HeadcountChart data={ headcount } />
              </Box>
            </Paper>

            <Paper elevation={4} sx={{ mt: 6, mb: 12, background: '#f8f9fa', alignItems: 'center', justifyContent: 'center' }}>
              <Box sx={{ my: 2, p: 1 }}>
                <Typography variant='h4' sx={{ mt: 2, textAlign: 'center' }}>Turnover</Typography>
                <TurnoverChart data={ turnover } />
              </Box>
            </Paper>
          </div>
          )
        }

      </Container>

      <Footer />
    </>
  );
}

export default Charts;