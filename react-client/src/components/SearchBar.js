/**
 * Created by Scott Ligon on 2/18/17.
 */
import React, {Component} from 'react';
import '../styles/App.css';
import ImageService from '../service/ImageService'

class SearchBar extends Component {

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
        event.preventDefault();
        ImageService.search(this.state.value, (searchResults) => {
            this.props.searchResults(searchResults)
        })

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="inner-addon right-addon">
                    <i className="glyphicon glyphicon-search"></i>
                    <input type="text" className="form-control" placeholder="Search for images" value={this.state.value}
                           onChange={this.handleChange}/>
                </div>
            </form>

        );
    }
}

export default SearchBar