import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');

  const handleEmailChange = ({ target }) => {
    setEmail(target.value);
  };

  const handleSearch = () => {
    console.log('Email:', email);
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