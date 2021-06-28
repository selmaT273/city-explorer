import React from 'react';

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
            <form onSubmit={this.handleFormSubmit}>
                <input type="text" onChange={this.handleText} value={this.state.searchBarText} />
                <input type="submit" />
            </form>
        )
    }
}

export default Search;