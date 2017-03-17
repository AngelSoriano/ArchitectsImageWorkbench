/**
 * Created by naelin on 3/12/17.
 */

import React, {Component} from 'react'
import SortDropdownButton from './SortDropdownButton'
import RecommendedTags from './RecommendedTags'
import ImageGallery from './ImageGallery'
import PageNavigation from './PageNavigation'

class ResultsComponent extends Component {
    render() {
        return (
            <div className="ResultsComponent">
                <SortDropdownButton setSortType={this.setSortType}/>

                <RecommendedTags/>

                <ImageGallery/>

                <PageNavigation/>
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