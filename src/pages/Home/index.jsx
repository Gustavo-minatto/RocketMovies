import { Header } from '../../components/Header';
import { Movie } from '../../components/Movie';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';


import { Container, Content } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
        <h1>Meus filmes</h1>
        
        <button>
        <FiPlus/>
        <Link to="/new">
        Adicionar Filme
        </Link>
        </button>

        </Content>
      </main>

      <Movie/>
      <Movie/>
      <Movie/>


    </Container>
  )
}