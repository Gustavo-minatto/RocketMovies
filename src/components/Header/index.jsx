import { Container, Profile, Input } from './styles';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input
        placeholder='Pesquisar pelo titulo'
      />

      <Link to="/profile">

        <Profile>
          <div>
            <strong>Gustavo Minatto</strong>
            <span> sair </span>
          </div>
          <img src="https://github.com/gustavo-minatto.png"
            alt="Foto do usuario" />


        </Profile>

      </Link>

    </Container>
  );
}