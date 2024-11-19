import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importando o hook de navegação
import './login.css';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook de navegação

  const handlesubmit = (event) => {
    event.preventDefault();

    alert("Enviando os dados: " + username + "-" + password);
    
    // Após o login, redireciona para a Home
    navigate("/home");
  };

  return (
    <div className="login-container">
      <form onSubmit={handlesubmit}>
        <h1>Acesse o sistema</h1>
        <div>
          <input 
            type="email" 
            placeholder="E-mail" 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <i className="bi bi-person-fill"></i>
        </div>
        <div>
          <input 
            type="password" 
            placeholder="Senha" 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <i className="bi bi-lock-fill"></i>
        </div>
        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembrar de mim?
          </label>
          <a href="#">Esqueceu a senha?</a>
        </div>
        <button type="submit">Entrar</button>
        <div className="signup-link">
          <p>Não tem uma conta? <a href="#">Registrar</a></p>
        </div>
      </form>
    </div>
  );
}

export default Login;
