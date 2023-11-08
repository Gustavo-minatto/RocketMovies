import { Container } from './styles';
import { AiFillStar } from "react-icons/ai";
import { Section } from "../../components/Section";
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api'
import { useState, useEffect } from 'react';

export function Movie({ data, ...rest }) {
  const [tags, setTags] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data)
    }

    fetchTags();
  }, []);

  function handleDetails(note_id) {
    navigate(`/details/${note_id}`);
  }

  return (
    <Container {...rest}
      onClick={() => handleDetails(data.id)}
    >

      <h1>{data.title}</h1>
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />

      <p className="description" >{data.description}</p>

      <div className="section">

        {tags &&
          tags.map(tag => {
            if (tag.note_id === data.id) {
              return (
                <li key={String(tag.id)}>
                  <Section title={tag.name} />
                </li>
              );
            }
            return null;
          })}
      </div>

    </Container>
  )
}