/**
 * Created by naelin on 2/18/17.
 */

import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class UploadButton extends Component {
    render() {
        return (
            <div className="UploadButton">
                <Button onClick={ this.upload }>Upload</Button>
            </div>
        )
    }

    constructor(props) {
        super(props);
        this.state = { open: false }
        this.upload = this.upload.bind(this)

    }

    upload() {

    }
}

export default UploadButton
