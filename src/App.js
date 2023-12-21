import { Container, Form, Button } from "semantic-ui-react";
import "./App.css";
import Dashboard from "./layouts/Dashboard";
import "semantic-ui-css/semantic.min.css";
import Navi from "./layouts/Navi";

function App() {
  return (
    // Todo Kodları layouts içinde Dashboard'da
      <div className="App">
        <Navi />
        <Container className="main">
          <Dashboard />
        </Container>
      </div>
  );
}

export default App;
