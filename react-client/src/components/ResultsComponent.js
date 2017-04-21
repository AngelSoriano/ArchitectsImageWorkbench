/**
 * Created by naelin on 3/12/17.
 */

import React, {Component} from 'react'
import SortDropdownButton from './SortDropdownButton'
import ImageGallery from './ImageGallery'
import SearchBar from './SearchBar'

class ResultsComponent extends Component {
    render() {
        return (
            <div className="ResultsComponent">
                <div className="MenuContainer">
                    <div className="SearchBar">
                        <SearchBar searchResults={this.searchResults}/>
                    </div>
                    <SortDropdownButton setSortType={this.setSortType}/>
                </div>
                {/*<RecommendedTags/>*/}
                <ImageGallery searchResults={this.props.searchResults}/>
            </div>
        )
    }

    constructor(props) {
        super(props)
        this.state = {
            jsonImageResults: '',
            sortType: 'relevance'
        }

        this.setSortType = this.setSortType.bind(this)
    }

    setSortType(sortType) {
        this.setState({sortType: sortType})
    }
}

export default ResultsComponent