import { styled } from "styled-components";
import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard";
import Graph from "./Components/Graph";

const Main = styled.main`
  border: solid black 1px;
  border-radius: 8px;
  background: #edf7ff;
`;

function App() {
  return (
    <Main>
      <Header />
      <Dashboard />
      <Graph />
    </Main>
  );
}

export default App;
