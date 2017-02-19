/**
 * Created by Scott Ligon on 2/14/17.
 */
import React, {Component} from 'react';
import {SplitButton,MenuItem} from 'react-bootstrap';

class SortDropdownButton extends Component {

    render() {
        return (
            <div className="SortDropdownButton">
                <SplitButton title="Sort" pullRight id="split-button-pull-right">
                    <MenuItem eventKey="1">Action</MenuItem>
                    <MenuItem eventKey="2">Another action</MenuItem>
                    <MenuItem eventKey="3">Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4">Separated link</MenuItem>
                </SplitButton>
            </div>
        )
    }

}

export default SortDropdownButton;
