/**
 * Created by naelin on 3/12/17.
 */

import React, {Component} from 'react'
import SortDropdownButton from './SortDropdownButton'
import ImageGallery from './ImageGallery'
import SearchBar from './SearchBar'
import RecommendedTags from './RecommendedTags'

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
                    <RecommendedTags imageList={this.props.searchResults}/>
                </div>

                <ImageGallery searchResults={this.props.searchResults}/>
            </div>
        )
    }

    constructor(props) {
        super(props)
        this.state = {
            jsonImageResults: '',
            sortType: 'relevance',
            searchResults: ''
        }

        this.setSortType = this.setSortType.bind(this)
    }

    setSortType(sortType) {
        this.setState({sortType: sortType})
    }

}

export default ResultsComponent