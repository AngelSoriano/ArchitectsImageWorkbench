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
                        validationState={this.getValidationState()}>
                        <ControlLabel>Title</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.titleValue}
                            placeholder="(Title)"
                            onChange={this.handleTitleChange}
                        />
                        <FormControl.Feedback />
                    </FormGroup>

                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Description</ControlLabel>
                        <FormControl
                            componentClass="textarea"
                            value={this.state.descriptionValue}
                            placeholder="(Description)"
                            onChange={this.handleDescriptionChange}
                        />
                    </FormGroup>
                </form>

            </div>
        )
    }

    constructor(props) {
        super(props);
        this.state = {
            titleValue: '',
            descriptionValue: ''
        }
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
        this.getValidationState = this.getValidationState.bind(this)
    }

    getValidationState() {
        const length = this.state.titleValue.length;
        if (length > 1) {
            return 'success'
        } else if (length > 0) {
            return 'error'
        }
    }

    handleTitleChange(e) {
        this.setState({titleValue: e.target.value}, () => {
            this.props.setValidationState(this.getValidationState())
            if (this.getValidationState() !== 'error') {
                this.props.setImageMeta(this.state.titleValue, this.state.descriptionValue)
            }
        });
    }

    handleDescriptionChange(e) {
        this.setState({descriptionValue: e.target.value}, () => {
            if (this.getValidationState() !== 'error') {
                this.props.setImageMeta(this.state.titleValue, this.state.descriptionValue)
            }
        })
    }
}

export default UploadDetailsForm