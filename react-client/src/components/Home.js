/**
 * Created by naelin on 4/5/17.
 */

import React, {Component} from 'react';
import ImageGallery from './ImageGallery'
import SearchBar from './SearchBar'

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
                <ImageGallery searchResults={this.state.imageIdsAndConfidenceLevels}/>

            </div>

        );
    }

    constructor(props) {
        super(props);

        // TODO: Get most popular images based on clicks (hard-coded with image IDs for now)
        var imageIdsAndConfidenceLevels = {
            "b7d0a852-6d46-4d90-9a6e-80a3d37cf501": 1,
            "87c9b2d8-0939-44aa-9bdc-6e2558d6417f": 1,
            "18e76dea-c688-4c12-b2a5-166f88b1661d": 1
        };
        imageIdsAndConfidenceLevels = JSON.stringify(imageIdsAndConfidenceLevels);

        this.state = {
            imageIdsAndConfidenceLevels: imageIdsAndConfidenceLevels
        }

        this.searchResults = this.searchResults.bind(this)
    }

    searchResults(searchResults) {
        this.props.route.searchResults(searchResults)
    }
}

export default Home;