import { Container, Header } from './style'

import logotipo from "../../Imgs/Logo.svg";

export default function  HeaderTodo() {
  return (
    <Container>
        <Header>
          <img src={logotipo} alt="Logotipo" />
        </Header>
    </Container>
  )
}
