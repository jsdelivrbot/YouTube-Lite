import React, { Component } from 'react';

// New class functionality (state awareness, communcating with other components, etc) of component class
class SearchBar extends Component {
  //Initialize state in a class based component. all JS classes have a special method called constructor.
  //This is the first and only called whneever a new instance of a class is created.
  //Initialize variables, state, etc.
  constructor(props) {
    // Component has its own constructor method callable by super in child elements.
    super(props);

    // state is a plain js object exists on any class based component. each instance of class based component has a copy of state.
    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
         value={this.state.term}
         onChange={(event) => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

// const SearchBar = () => {
//   return <input />;
// };

export default SearchBar;