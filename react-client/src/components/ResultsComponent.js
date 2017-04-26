/**
 * Created by naelin on 3/12/17.
 */

import React, {Component} from 'react'
import SortDropdownButton from './SortDropdownButton'
import ImageGallery from './ImageGallery'
import SearchBar from './SearchBar'
import RecommendedTags from './RecommendedTags'
import ImageService from '../service/ImageService'

class ResultsComponent extends Component {
    render() {
        return (
            <div className="ResultsComponent">
                <div className="MenuContainer">
                    <div id="inline">
                        <SearchBar searchResults={this.searchResults}/>
                    </div>
                    <div id="Sorting">
                        <SortDropdownButton setSortType={this.setSortType}/>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div id ="Tags">
                        <RecommendedTags imageList={this.state.searchResults} tagSearch={this.tagSearch}/>
                    </div>
                </div>
                <br/>
                <br/>
                <ImageGallery searchResults={this.state.searchResults}/>
            </div>
        )
    }

    constructor(props) {
        super(props)
        this.state = {
            jsonImageResults: '',
            sortType: 'relevance',
            searchResults: this.props.searchResults
        }

        this.setSortType = this.setSortType.bind(this)
        this.searchResults = this.searchResults.bind(this)
        this.tagSearch = this.tagSearch.bind(this)
    }

    setSortType(sortType) {
        this.setState({sortType: sortType})
    }

    searchResults(searchResults) {
        this.setState({searchResults: searchResults})
    }

    tagSearch(tagToSearch) {
        ImageService.search(tagToSearch, (searchResults) => {
            this.setState({searchResults: searchResults})
        })
    }

}

export default ResultsComponent