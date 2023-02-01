import Landing from "./Pages/Landing";
import styled from "styled-components";
const StyledButton = styled.button`
  background-color: black;
  font-size: 32px;
  color: white;
`;
function App() {
  return (
    <div>
      <StyledButton>Click ME!</StyledButton>
      <h1>IT SUPPORT APP</h1>
      <Landing />
    </div>
  );
}

export default App;
