/**
 * Created by Scott Ligon on 2/14/17.
 */
import React, {Component} from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';

class SortDropdownButton extends Component {

    render() {
        return (
            <div className="SortDropdownButton">
                <DropdownButton title="Sort">
                    {this.renderMenuItems()}
                </DropdownButton>
            </div>
        )
    }

    constructor(props) {
        super(props);
        this.state = {
            menuItems: ['Popularity', 'Relevance', 'Most Recent'],
            activeItem: 'Relevance'
        }

        this.handleChange = this.handleChange.bind(this)
    }

    renderMenuItems() {
        return this.state.menuItems.map(item => (
            <MenuItem key={item} active={this.state.activeItem === item ? true : false} onSelect={this.handleChange}>{item}</MenuItem>
        ));
    }

    handleChange() {
        this.setState({activeItem: 'Popularity'})
    }

}

export default SortDropdownButton;
