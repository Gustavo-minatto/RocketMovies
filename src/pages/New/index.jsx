import { ButtonText } from '../..//components/ButtonText';
import { Textarea } from '../..//components/Textarea';
import { NoteItem } from '../..//components/NoteItem';
import { Header } from '../..//components/Header';
import { Button } from '../..//components/Button';
import { Input } from '../..//components/Input';
import { Container, Form } from './styles';
import { Link } from 'react-router-dom';

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <Link to="/">
            <ButtonText title="Voltar" />
            </Link>
  
            <h1>Novo Filme</h1>
          </header>

          <div className="aa">
          <Input placeholder="Titulo" />
          <Input placeholder="Sua nota de 0 a 5" />
          </div>
          <Textarea placeholder="Observações" />

          <h2>Marcadores</h2>

          <div className="tags">
            <NoteItem value="React" />
            <NoteItem isNew placeholder="Novo Marcador" />
          </div>

          <div className="button">
            <Button title="Excluir filme" />

            <Button title="Salvar alterações" />
          </div>
        </Form>
      </main>
    </Container>
  )
};