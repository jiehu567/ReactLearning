import React, { Component } from 'react';


// user type input, then we query API

class SearchBar extends Component {

    constructor(props) {
      super(props);   // call parent constructor
      this.state = {term: ''};  //create a new obj, when user insert, we want to update term
    }

    render(){
      return <input onChange={ event => this.onInputChange(event.target.value)} />;
    }

    onInputChange(term){
      this.setState({term});
      this.props.onSearchTermChange(term);
    }

}

export default SearchBar; // any files import SearchBar, will get SearchBar component
