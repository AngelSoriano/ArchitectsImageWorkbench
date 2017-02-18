/**
 * Created by naelin on 2/13/17.
 */

import React, { Component } from 'react'
import { Button, Collapse, Well } from 'react-bootstrap'

class FilterButton extends Component {
    render() {
        return (
            <div className="FilterButton">
                <Button onClick={ this.showFilterMenu }>Filter</Button>
                <Collapse in={ this.state.open }>
                    <div>
                        <Well>
                            (Filter options)
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
