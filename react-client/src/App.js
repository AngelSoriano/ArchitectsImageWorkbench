import React, {Component} from 'react';
import './styles/App.css';
import NavigationBar from './components/NavigationBar'
import TopSearch from './components/topSearch'
import SortDropdownButton from './components/SortDropdownButton'
import RecommendedTags from './components/RecommendedTags'
import Gallery from './components/Gallery'
import UploadComponent from './components/UploadComponent'
import PageNavigation from './components/PageNavigation'
import SearchBar from './components/SearchBar'

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
                <UploadComponent/>
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
