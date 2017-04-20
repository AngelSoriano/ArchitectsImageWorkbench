import React, {Component} from 'react'
import {Button, ButtonToolbar} from 'react-bootstrap';
import TagService from '../service/TagService'

class RecommendedTags extends Component {
    render() {
        return (
            <div className="RecommendedTags">
                <ButtonToolbar className="TagsBar">
                    {this.renderTags()}
                </ButtonToolbar>
            </div>
        )
    }

    constructor(props) {
        super(props);

        this.state = {
            tags: ['architecture', 'building', 'modern', 'office', 'chair', 'indoors']
        };

        this.getTagList = this.getTagList.bind(this);
        this.getImageIds = this.getImageIds.bind(this);
        this.getTagList()
    }

    getImageIds() {
        var imageIdsAndConfidenceLevels = JSON.parse(this.props.imageList)

        var imageIds = [];
        for (var imageId in imageIdsAndConfidenceLevels) {
            imageIds.push(imageId)
        }

        console.log(imageIds)
        return imageIds
    }

    getTagList() {
        TagService.retrieve(this.getImageIds(), (tags) => {
            this.setState({tags: JSON.parse(tags)})
        })
    }

    renderTags() {
        return this.state.tags.map(name => (
            <Button className="TagsBarItem"
                    key={name}
                    name={name}
            >{name}</Button>
        ))
    }

}

export default RecommendedTags