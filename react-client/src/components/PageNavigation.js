/**
 * Created by anaperez on 2/18/17.
 */
import React, { Component } from 'react'
import { Pagination } from 'react-bootstrap';

class PageNavigation extends Component {
    constructor(props) {
        super(props)
        this.state = {activePage:1}
    }
    render() {
        return (
            <div className="PageNavigation">
                <Pagination
                    prev
                    next
                    first
                    last
                    ellipsis
                    boundaryLinks
                    items={20}
                    maxButtons={5}
                    activePage={this.state.activePage}
                    onSelect={this.handleSelect.bind(this)}/>
            </div>
        )
    }
    handleSelect(eventKey) {
        console.log(`active page is ${eventKey}`)
        this.setState({ activePage: eventKey });
    }
}
export default PageNavigation;