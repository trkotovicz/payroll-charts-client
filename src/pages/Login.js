import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// const BASE_URL = 'https://z64iardwce.execute-api.us-east-1.amazonaws.com/dev/api/v1/payroll/';

function Login() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = ({ target }) => {
    const { value } = target;
    setEmail(value);
  };

  const handleSearch = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);

    if (!isValidEmail) {
      alert('Digite um email válido');
      return;
    }

    navigate('/charts', { state: email });
    // try {
    //   const response = await fetch(`${BASE_URL}${email}`);
    //   if (response.ok) {
    //     const data = await response.json();

    //     console.log(data);

    //     navigate('/charts', { state: { data, email } });
    //   } else {
    //     alert('Erro: email não encontrado.')
    //   }
    // } catch (error) {
    //   console.error(error.message);
    // }
  };

  return (
    <div>
      <h1>Página de Busca</h1>
      <input
        type="email"
        placeholder="Digite seu email"
        value={ email }
        onChange={ handleEmailChange }
      />
      <button onClick={ handleSearch }>Buscar</button>
    </div>
  );
}

export default Login;