import React, { Component } from 'react';

class SearchBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: ''
    }
  }

  handleSearchChange = (e) => {
    this.setState({input: e.target.value});
    this.props.sendSearch({input: this.state.input});
    
  }

  render() { 
    return ( 
      <>
        <label value="filter">Filter By Title</label>
        <input 
        type="text" 
        id="filter"
        value={this.state.input}
        onChange={this.handleSearchChange}/>
      </>
     );
  }
}

export default SearchBox;