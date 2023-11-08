import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FiPlus } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { Movie } from '../../components/Movie';
import { Teste } from '../../components/Teste'
import { api } from '../../services/api'
import { Container, Content } from "./styles";

export function Home() {

  const [search, setSearch] = useState("");
  const [notes, SetNotes] = useState([]);

  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  function handleNew() {
    navigate("/new");
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`);
      SetNotes(response.data);
    }

    fetchNotes();
  }, [notes]);

  return (
    <Container>
      <Header />

      <main>
        <Content>
          <h1>Meus filmes</h1>

          <button onClick={handleNew}>
            <FiPlus />
            Adicionar Filme
          </button>

        </Content>
      </main>


      <Teste>

        {
          notes.map(note => (
            <Movie
              key={String(note.id)}
              data={note}
              onClick={() => handleDetails(note_id)}
            />
          ))
        }

      </Teste>


    </Container>
  )
}