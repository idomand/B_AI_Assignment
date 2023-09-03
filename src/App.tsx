import { styled } from "styled-components";
import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard";
import RawDataGraph from "./Components/RawDataGraph";
import AdjustmentsGraph from "./Components/InsightsGraph";

const Main = styled.main`
  border: solid black 1px;
  border-radius: 8px;
  background: #edf7ff;
  align-self: flex-start;
  position: relative;
`;

function App() {
  return (
    <Main>
      <Header />
      <Dashboard />
      <AdjustmentsGraph />
      <RawDataGraph />
    </Main>
  );
}

export default App;
