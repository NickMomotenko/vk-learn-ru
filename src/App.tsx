import { Card } from "./components/Card";
import { Container } from "./components/Container";
import { Menu } from "./components/Menu";

function App() {
  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <Container>
      <Menu />
      {[...new Array(5)].map((item) => (
        <Card />
      ))}
    </Container>
  );
}

export default App;
