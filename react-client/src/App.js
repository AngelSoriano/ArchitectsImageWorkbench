import React, {Component} from 'react';
import './App.css';
import NavigationBar from './NavigationBar'
import TopSearch from './topSearch'
import SortDropdownButton from './SortDropdownButton'
import RecommendedTags from './RecommendedTags'
import Gallery from './Gallery'
import UploadComponent from './UploadComponent'
import PageNavigation from './PageNavigation'
import SearchBar from './SearchBar'
class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="Navi-Bar">
                    <NavigationBar/>
                </div>
                <div className="App-header">
                    <div className="Intro-Message">
                        <h1>Gain insight for your next creative design</h1>
                    </div>
                    <div className="SearchBar">
                        <SearchBar/>
                    </div>
                </div>

                <div className="Sorting">
                    <PageNavigation/>
                </div>
                <div className="Sorting">
                    <SortDropdownButton/>
                </div>
                <RecommendedTags/>


            </div>

    );
    }


    }
export default App;
