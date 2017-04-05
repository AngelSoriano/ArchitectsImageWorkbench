/**
 * Created by naelin on 4/5/17.
 */

/**
 * Created by naelin on 4/5/17.
 */

import React, {Component} from 'react';
import NavigationBar from './NavigationBar'


class Container extends Component {
    render() {
        return (
            <div className="Container">
                <NavigationBar/>
                {this.props.children}
            </div>

        );
    }

}

export default Container;