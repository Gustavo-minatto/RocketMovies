import { Container } from './styles';
import { AiFillStar } from "react-icons/ai";
import { Section } from "../../components/Section";
import { Link } from 'react-router-dom';

export function Movie(){
  return(
    <Container>

      <h1>Interestellar</h1>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>

      <Link to="/Preview">
      <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se ...</p>
        
    
      <div id='section'>
      <Section title="Ficção Cientifica"/>
      <Section title="Drama"/>
      <Section title="Familia"/>
      </div>
      </Link>
    </Container>
  )
}