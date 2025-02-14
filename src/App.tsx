import { Container } from "./components/Container";
import { Menu } from "./components/Menu";
import { CatsContainer } from "./containers/CatsContainer";
import { LikedCatsContainer } from "./containers/LikedCatsContainer";
import { Content } from "./components/Content";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Container>
      <Menu />
      <Content>
        <Routes>
          <Route path="/" element={<CatsContainer />} />
          <Route path="/liked" element={<LikedCatsContainer />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Content>
    </Container>
  );
}

export default App;
