/**
 * Created by naelin on 4/5/17.
 */

import React, {Component} from 'react';
import ImageGallery from './ImageGallery'
import SearchBar from './SearchBar'
import ImageService from '../service/ImageService'


class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="App-header">
                    <div className="Intro-Message">
                        <h1>Gain insight for your next creative design</h1>
                    </div>
                    <div className="SearchBar">
                        <SearchBar searchResults={this.searchResults}/>
                    </div>
                </div>
                <ImageGallery searchResults={this.state.imageDisplay}/>
            </div>

        );
    }

    constructor(props) {
        super(props);

        // TODO: Get most popular images based on clicks (hard-coded with image IDs for now)
        // Default image display
        var imageDisplay = {
            "b7d0a852-6d46-4d90-9a6e-80a3d37cf501": 1,
            "87c9b2d8-0939-44aa-9bdc-6e2558d6417f": 1,
            "18e76dea-c688-4c12-b2a5-166f88b1661d": 1
        };
        imageDisplay = JSON.stringify(imageDisplay);

        this.state = {
            imageDisplay: imageDisplay
        }

        this.searchResults = this.searchResults.bind(this)
        this.getImageDisplay = this.getImageDisplay.bind(this)

        this.getImageDisplay()
    }

    searchResults(searchResults) {
        this.props.route.searchResults(searchResults)
    }

    getImageDisplay() {
        ImageService.search("indoors", (imageDisplay) => {
            this.setState({imageDisplay: imageDisplay})
        })
    }


}

export default Home;