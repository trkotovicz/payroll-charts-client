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
    <div>
      <h1>Payroll Charts</h1>

      {showHidden ? (
        <span className="span-email-invalid">
          Digite um email válido
        </span>
      ) : ''}

      <input
        type="email"
        placeholder="Digite seu email"
        value={ email }
        onChange={ ({ target }) => setEmail(target.value) }
      />
      <button onClick={ handleSearch }>Buscar</button>
    </div>
  );
}

export default Home;