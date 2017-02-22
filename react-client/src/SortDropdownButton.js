/**
 * Created by Scott Ligon on 2/14/17.
 */
import React, {Component} from 'react';
import {title,DropdownButton,MenuItem} from 'react-bootstrap';

class SortDropdownButton extends Component {

    render() {
        return (
            <div className="SortDropdownButton">
                <DropdownButton title="Sort">
                    <MenuItem eventKey="1">Action</MenuItem>
                    <MenuItem eventKey="2">Another action</MenuItem>
                    <MenuItem eventKey="3">Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4">Separated link</MenuItem>
                </DropdownButton>
            </div>
        )
    }

}

export default SortDropdownButton;
