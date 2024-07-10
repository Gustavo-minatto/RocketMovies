import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

import { Container, Profile, Input } from './styles';
import { Link } from 'react-router-dom';

export function Header() {
  const { signOut, user } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  function handleBack() {
    signOut();
    navigate('/');
  }
  return (

    <Container>
      <h1>RocketMovies</h1>

      <Input
        placeholder='Pesquisar pelo titulo'
      />

      <Link to="/profile">
        <Profile>
          <div>
            <h2>{user.name}</h2>
            <span onClick={handleBack}>sair</span>
          </div>
          <img src={avatarUrl}
            alt={user.name} />
        </Profile>
      </Link>


    </Container>
  );
}