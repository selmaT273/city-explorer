import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Search.css';
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBarText: '',
    }
  }

  handleText = (e) => {
    this.setState({
      searchBarText: e.target.value,
    });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.handleSearch(this.state.searchBarText);
  }

  render() {
    return (
      <Form className="search-form" onSubmit={this.handleFormSubmit}>
        <Form.Control type="text" onChange={this.handleText} value={this.state.searchBarText} />
        <Button className="button" type="submit" variant="secondary">Explore!</Button>
      </Form>
    )
  }
}

export default Search;