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

    // -- one-line code
    return <input onChange = { event => console.log(event.target.value)} />
  }

  // onInputChange(event) {
  //   console.log(event.target.value)
  // }
}

export default SearchBar;
