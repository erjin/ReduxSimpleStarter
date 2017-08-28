import React, {Component} from 'react';
// -- {} means Component = React.Component


// -- functional component
// const SearchBar = () =>{
//   return <input />;
// };

// -- class component
class SearchBar extends Component {
  // -- only class has state and constructor
  constructor(props) {
    super(props);

    this.state = { term: '' };

  }

  render() {
    // -- with separate defined method
    // return <input onChange = {this.onInputChange} />

    // refresh based on state change
    // Value of the input: {this.state.term}

    // IMPORTANT: controlled component
    // User input does not change value of input
    // It just triggers event,
    // because we update state with event
    // rerender component to update value
    return(
      <div className="search-bar">
        <input
        value = { this.state.term }
        onChange = { event => this.setState({ term : event.target.value}) } />

      </div>
    )
  }

  // onInputChange(event) {
  //   console.log(event.target.value)
  // }
}

export default SearchBar;
