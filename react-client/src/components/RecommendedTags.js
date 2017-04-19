import React, {Component} from 'react'
import {Button, ButtonToolbar} from 'react-bootstrap';
import TagService from '../service/TagService'


class RecommendedTags extends Component {
    render() {
        return (
            <div className="RecommendedTags">
                <ButtonToolbar className="tagsBar">
                    {this.renderTags()}
                    {this.getImageIds()}
                </ButtonToolbar>
            </div>
        )
    }

    constructor(props) {
        super(props);
        this.state = {
            tags: ['victorian', 'building', 'architecture', 'office', 'chair', 'indoors'],
            imageIds: ''
        };


        this.getTagList = this.getTagList.bind(this);
        this.getImageIds = this.getImageIds.bind(this);
    }

    getImageIds() {
        // console.log("HERE")
        // console.log("HERE" + this.props.searchResults)
        // var imageIdsAndConfidenceLevels = JSON.parse(this.props.searchResults)
        //
        // var imageIds = [];
        // for(var imageId in imageIdsAndConfidenceLevels) {
        //     imageIds.push(imageId)
        // }
        //
        // console.log(imageIds)
        // this.setState({imageIds: imageIds});
    }

    getTagList() {
        // TagService.retrieve();
    }

    renderTags() {
        return this.state.tags.map(name => (
            <Button
                key={name}
                name={name}
            >{name}</Button>
        ))
    }

}

export default RecommendedTags