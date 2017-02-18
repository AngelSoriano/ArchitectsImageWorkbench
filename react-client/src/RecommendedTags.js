var React = require('react');
import {Button, ButtonToolbar} from 'react-bootstrap';


var RecommendedTags = React.createClass({
    getDefaultProps: function() {
        // At some point we would have a backend route to get the recommended tags and store them in array
        return {text: ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6"]}
    },
    render: function() {

        return (
            <div>
                <ButtonToolbar>
                    <Button bsStyle="primary">{this.props.text[0]}</Button>
                    <Button bsStyle="success">{this.props.text[1]}</Button>
                    <Button bsStyle="info">{this.props.text[2]}</Button>
                    <Button bsStyle="warning">{this.props.text[3]}</Button>
                    <Button bsStyle="danger">{this.props.text[4]}</Button>
                    <Button bsStyle="default">{this.props.text[5]}</Button>
                </ButtonToolbar>
            </div>
        )
    }
});


module.exports = RecommendedTags;