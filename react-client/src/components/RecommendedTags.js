import React from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';
var $ = require ('jquery');


export default class RecommendedTags extends React.Component{
    constructor(props){
        super(props);
        this.state = {text: ['1', '2', '3', '4', '5', '6']};
        this.tagList();
    }


    componentWillMount(){
        this.tagList();
    }

    tagList() {
        // At some point we would have a backend route to get the recommended tags and store them in array

        return $.getJSON('http://127.0.0.1:3001/retrieveTags/')
            .then((data) => {
            console.log(data);
            this.setState({text: JSON.parse(data.data)});
            });
    }

    render() {


        return (
            <div>
                <ButtonToolbar className = "tagsBar">
                    <Button bsStyle="primary">{this.state.text[0]}</Button>
                    <Button bsStyle="success">{this.state.text[1]}</Button>
                    <Button bsStyle="info">{this.state.text[2]}</Button>
                    <Button bsStyle="warning">{this.state.text[3]}</Button>
                    <Button bsStyle="danger">{this.state.text[4]}</Button>
                    <Button bsStyle="default">{this.state.text[5]}</Button>

                </ButtonToolbar>
            </div>
        )
    }
}

