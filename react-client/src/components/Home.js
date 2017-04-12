/**
 * Created by naelin on 4/5/17.
 */

import React, {Component} from 'react';
import ImageGallery from './ImageGallery'
import UploadComponent from './UploadComponent'
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
                        <SearchBar doSearch={this.doSearch} searchResults={this.searchResults}/>
                        { this.state.doSearch ? this.props.route.loadResults() : null }


                    </div>
                </div>
                <UploadComponent/>
                <ImageGallery/>
            </div>



        );
    }

    constructor(props) {
        super(props);
        this.state = {
            doSearch: false,
            loadResults: false,
            searchResults: null
        }

        this.doSearch = this.doSearch.bind(this)
        this.searchResults = this.searchResults.bind(this)

    }

    doSearch() {
        this.setState({doSearch: true})
    }

    searchResults(searchResults) {
        this.setState({searchResults: searchResults})
    }


}

export default Home;