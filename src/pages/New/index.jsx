import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { ButtonText } from '../..//components/ButtonText';
import { Textarea } from '../..//components/Textarea';
import { NoteItem } from '../..//components/NoteItem';
import { Header } from '../..//components/Header';
import { Button } from '../..//components/Button';
import { Input } from '../..//components/Input';
import { Link } from 'react-router-dom';

import { api } from '../../services/api';

import { Container, Form } from './styles';

export function New() {
  const [title, setTitle] = useState("");
  const [nota, setNota] = useState("");
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState([]);

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleAddTags() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleDeleteTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewNote() {
    if (!title) {
      return alert("Digite o titulo do Filme")
    }

    if (newTag.trim() !== "") {
      return alert("Você deixou um Marcador no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vázio.")
    }

    const notaNumber = Number(nota);
    if (isNaN(notaNumber) || notaNumber < 0 || notaNumber > 5) {
      return alert("Digite uma nota válida entre 0 e 5");
    }

    alert("Filme criado com sucesso!");
    handleBack('/');

    await api.post("notes", {
      title,
      description,
      nota,
      tags
    })

  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <ButtonText
            title="Voltar"
            onClick={handleBack}
          />

          <h1>Novo Filme</h1>

          <div className="title">
            <Input
              placeholder="Titulo"
              onChange={e => setTitle(e.target.value)}
            />
            <Input
              placeholder="Sua nota de 0 a 5"
              onChange={e => setNota(e.target.value)}
            />
          </div>

          <Textarea
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />

          <h3>Marcadores</h3>

          <div className="tags">
            {
              tags.map((tag, index) => (
                < NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleDeleteTag(tag)}
                />
              ))
            }

            <NoteItem
              isNew
              placeholder="Novo Marcador"
              onChange={e => setNewTag(e.target.value)}
              value={newTag}
              onClick={handleAddTags}
            />
          </div>

          <div className="button">
            <Button title="Excluir filme"
              onClick={handleBack}
            />

            <Button title="Salvar alterações"
              onClick={handleNewNote}
            />
          </div>
        </Form>
      </main>
    </Container>
  )
};