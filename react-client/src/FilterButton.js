/**
 * Created by naelin on 2/13/17.
 */

import React, { Component } from 'react'
import { Button, Collapse, Well } from 'react-bootstrap'
import UploadDropzone from './UploadDropzone'

class FilterButton extends Component {
    render() {
        return (
            <div className="FilterButton">
                <Button bsStyle="warning" onClick={ this.showFilterMenu }>Filter</Button>
                <Collapse in={ this.state.open }>
                    <div>
                        <Well>
                            {/*<UploadDropzone/>*/}
                        </Well>
                    </div>
                </Collapse>            </div>
        )
    }

    constructor(props) {
        super(props);
        this.state = { open: false }
        this.showFilterMenu = this.showFilterMenu.bind(this)

    }

    showFilterMenu() {
        this.setState({ open: !this.state.open })
    }
}

export default FilterButton
