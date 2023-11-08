import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { Container, Content } from './style';
import { AiFillStar, AiOutlineStar, AiOutlineClockCircle } from "react-icons/ai";

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';

import { ButtonText } from '../../components/ButtonText';
import { Section } from '../../components/Section';
import { Header } from '../../components/Header';

export function Details() {
  const { user } = useAuth();
  const [data, setData] = useState(null);
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data);
    }
    fetchNote()
  }, [])

  return (
    <Container>
      <Header />
      {
        data &&
        <main>
          <Content>
            <ButtonText title="Voltar"
              onClick={handleBack}
            />

            <h1>
              {data.title}
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </h1>

            <strong>
              <img
                src={avatarUrl}
                alt={user.name}
              />
              Por {user.name}
              <AiOutlineClockCircle /> {data.created_up}
            </strong>

            <div>
              {data.tags.map(tag => (
                <Section key={tag.id} title={tag.name} />
              ))}
            </div>

            <p>
             {data.description}
            </p>

          </Content>
        </main>
      }

    </Container>
  )
}