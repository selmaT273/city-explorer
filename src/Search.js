import React from 'react';

class Search extends React.Component {
    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.handleSearch();
    }
    
    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <input type="text" />
                <input type="submit" />
            </form>
        )
    }
}

export default Search;