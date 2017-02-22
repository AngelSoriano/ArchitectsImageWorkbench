/**
 * Created by naelin on 2/13/17.
 */

import React, { Component } from 'react'
import { Collapse, Well } from 'react-bootstrap';

class FilterMenu extends Component {
    render() {
        return (
            <div className="FilterMenu">
                <Collapse in={ false }>
                    <div>
                        <Well>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                            Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </Well>
                    </div>
                </Collapse>
            </div>
        )
    }
}

export default FilterMenu