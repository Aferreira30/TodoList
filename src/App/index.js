import { ThemeProvider } from "styled-components";
import defaultTheme from "../styles/default";

import { ContainerTotal , Container} from "./style";

import HeaderTodo from "../Components/Header";
import TasksTodo from "../Components/Tasks";
import { UserContext } from "../Components/Tasks/Task";

export default function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
      <ContainerTotal>
          <HeaderTodo />
        <Container> 
          <TasksTodo />
        </Container>
      </ContainerTotal>
      </ThemeProvider>
    </div>
  );
}


