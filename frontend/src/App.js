import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Row, Col, Form } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>The Best 'Best' Search on the Internet</Form.Label>
          <Form.Control type="email" placeholder="Enter topic" />
          <Form.Text className="text-muted">
            Search the web to compile from the top 'n' lists of your topic.
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
