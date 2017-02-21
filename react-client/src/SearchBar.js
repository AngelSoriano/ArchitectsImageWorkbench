/**
 * Created by Scott Ligon on 2/18/17.
 */
import React, {Component} from 'react';
import {FormGroup,FormControl,ControlLabel,HelpBlock,Button} from 'react-bootstrap';
import './App.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          
        </label>

       {/*<input type="submit" class="btn btn-default" value="Search"/>*/}
        <div className="inner-addon right-addon">
            <i className="glyphicon glyphicon-search"></i>
            <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} />
        </div>
       
      </form>
    );
  }
}

export default SearchBar
