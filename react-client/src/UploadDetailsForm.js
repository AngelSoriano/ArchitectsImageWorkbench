/**
 * Created by naelin on 2/23/17.
 */

import React, {Component} from 'react'
import {ControlLabel, FormControl, FormGroup} from 'react-bootstrap'

class UploadDetailsForm extends Component {
    render() {
        return (
            <div className="UploadDetailsForm">

                <form>
                    <FormGroup
                        controlId="formBasicText"
                        validationState={ this.getValidationState() }>
                        <ControlLabel>Title</ControlLabel>
                        <FormControl
                            type="text"
                            value={ this.state.inputValue }
                            placeholder="(Title)"
                            onChange={ this.handleChange }
                        />
                        <FormControl.Feedback />
                    </FormGroup>

                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Description</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="(Description)"/>
                    </FormGroup>
                </form>

            </div>
        )
    }

    constructor(props) {
        super(props);
        this.state = {inputValue: ''}
        this.handleChange = this.handleChange.bind(this)
        this.getValidationState = this.getValidationState.bind(this)
    }

    getValidationState() {
        const length = this.state.inputValue.length;
        if (length > 1) {
            return 'success'
        } else if (length > 0) {
            return 'error'
        }
    }

    handleChange(e) {
        this.setState({ inputValue: e.target.value}, function() {
            this.props.setValidationState(this.getValidationState())
        });

    }

}

export default UploadDetailsForm