import React from "react";

class SearchBar extends React.Component {
    state = { term: "" };

    onInputChange = event => {
        this.setState({ term: event.target.value });
    };

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (
          <div className="search-bar ui inverted segment">
            <form onSubmit={this.onFormSubmit} className="ui inverted form">
              <div className="field">
                <label style={{ fontSize: 20 }}>
                  Video Search
                  <i className="search icon" />
                </label>
                <input 
                placeholder="Search" 
                type="text" 
                value={this.state.term}
                onChange={this.onInputChange}
                />
              </div>
            </form>
          </div>
        );
    }
}

export default SearchBar;