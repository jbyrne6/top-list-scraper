import './SearchBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Row, Col, Form, Spinner } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import { setSearchLoadingA, setSearchResultsA } from '../redux/Scraper/scraper.actions'
import { connect } from "react-redux";


function SearchBar(props) {
  const { setSearchLoadingRedux, searchIsLoading, setSearchResultsRedux, searchResults } = props

  const [searchTerm, setSearchTerm] = useState('');

  const onChange = (event) => {
    setSearchTerm(event.target.value);
  };


  const getSearchTermData = (term) => {
    setSearchLoadingRedux(true)
    axios.get(`http://localhost:5000/googleSearch/${term}`)
      .then(response => {
        setSearchLoadingRedux(false)
        setSearchResultsRedux(response.data)
      })
      .catch(function (error) {
        setSearchLoadingRedux(false)
        console.log(error);
      })
  }

  const handleSearchClick = (finalTerm) => {
    getSearchTermData(finalTerm)
  }

  const renderUrls = () => {
    Object.entries(searchResults).map(entry => {
      return(<Row className="text-center" key={entry[0]}>
          {<a href={entry[1]} target="_blank" rel="noopener noreferrer">{entry[1]}</a>}
        </Row>)
    })
  }

  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>The Best 'Best' Search on the Internet</Form.Label>
          <Form.Control value={searchTerm} onChange={onChange} placeholder="Enter topic" />
          <Form.Text className="text-muted">
            Search the web to compile from the top 'n' lists of your topic.
          </Form.Text>
        </Form.Group>

        <Button variant="primary" onClick={() => handleSearchClick(searchTerm)}>
          Submit
        </Button>
      </Form>
      {searchIsLoading ? <Spinner animation="border" /> : renderUrls()}
      <Col>
        {
          Object.entries(searchResults).map(entry => {
            return(<Row className="text-center" key={entry[0]}>
                {<a href={entry[1]} target="_blank" rel="noopener noreferrer">{entry[1]}</a>}
              </Row>)
          })
        }
      </Col>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setSearchLoadingRedux: (setTerm) => dispatch(setSearchLoadingA(setTerm)),
  setSearchResultsRedux: (searchResults) => dispatch(setSearchResultsA(searchResults)),
})

const mapStateToProps = (state) => ({
  searchIsLoading: state.scraper.searchLoading,
  searchResults: state.scraper.searchResults,
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
