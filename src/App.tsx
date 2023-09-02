import { styled } from "styled-components";
import Header from "./Components/Header";

const Main = styled.main`
  border: solid red;
`;

function App() {
  return (
    <Main>
      <Header />
    </Main>
  );
}

export default App;
