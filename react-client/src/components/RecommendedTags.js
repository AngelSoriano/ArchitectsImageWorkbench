import React, {Component} from 'react'
import {Button, ButtonToolbar} from 'react-bootstrap';
import TagService from '../service/TagService';
import ImageService from '../service/ImageService';
import '../styles/App.css';

class RecommendedTags extends Component {
    render() {
        return (
            <div className="RecommendedTags">
                <div className="TagsBar">
                    {this.state.tagColors != null ? this.renderTags() : null}
                </div>
            </div>

        )
    }

    constructor(props) {
        super(props);

        this.state = {

            tags: ['architecture', 'building', 'modern', 'office', 'chair', 'indoors'],
            imageIds: '',
            tagColors: null,
            imageList: ''
        };

        this.getTagList = this.getTagList.bind(this);
        this.getImageIds = this.getImageIds.bind(this);
        this.getImageColors = this.getImageColors.bind(this);

        this.getTagList()
        this.getImageColors()
    }

    getImageIds() {
        var imageIdsAndConfidenceLevels = JSON.parse(this.props.imageList)

        var imageIds = [];
        for (var imageId in imageIdsAndConfidenceLevels) {
            imageIds.push(imageId)
        }

        return imageIds
    }

    getTagList() {
        TagService.retrieve(this.getImageIds(), (tags) => {
            this.setState({tags: JSON.parse(tags)})
        })
    }

    buttonStyle() {
        return {
            background: this.getRandomColor(),
            color: "#FFFFFF"
        }
    }

    getRandomColor() {
        const tagColors = this.state.tagColors
        return '#' + tagColors[Math.floor(Math.random() * tagColors.length)]
    }

    getImageColors() {
        const imageIds = this.getImageIds();
        // for(var i = 0; i < imageIds.length; i++) {
            var imageUrl = 'https://s3-us-west-2.amazonaws.com/aiw-bucket/' + imageIds[0]
            ImageService.detectColors(imageUrl, (colors) => {
                this.setState({tagColors: JSON.parse(colors)}, () => {
                    console.log("colors")
                    console.log(this.state.tagColors)
                })
            })
        // }
    }

    renderTags() {
        return this.state.tags.map(name => (
            <Button className="RecommendedTag"
                    key={name}
                    name={name}
                    onClick={() => this.props.tagSearch(name)}
                    style={this.buttonStyle()}
            >{name}</Button>

        ))
    }

}

export default RecommendedTags