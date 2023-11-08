import { useState } from 'react';
import { FiUser, FiArrowLeft, FiMail, FiLock } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background } from './styles';

export function SingUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSingUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos")
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Usuario cadastrado com sucesso");
        navigate("/")
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possivel cadastrar o usuario");
        }
      })
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>


        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Entrar" onClick={handleSingUp} />

        <Link to="/">
          <FiArrowLeft />
          Voltar para o login
        </Link>

      </Form>
      <Background />
    </Container>
  )
}