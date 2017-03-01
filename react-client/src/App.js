import React, {Component} from 'react';
import './App.css';
import NavigationBar from './NavigationBar'
import TopSearch from './topSearch'
import SortDropdownButton from './SortDropdownButton'
import RecommendedTags from './RecommendedTags'
import Gallery from './Gallery'
import UploadComponent from './UploadComponent'
import UploadDropzone from './UploadDropzone'
import PageNavigation from './PageNavigation'
import SearchBar from './SearchBar'
import UserIcon from './UserIcon'

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className = "Navi-Bar">
                    <NavigationBar/>
                </div>
                <div className="App-header">
                    <br/>
                    <br/>
                    <SearchBar/>
                    <br/>
                </div>

                <div className = "Sorting">
                    <PageNavigation/>
                </div>
                <p className="App-intro">
                    {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
                </p>
                <RecommendedTags/>
                <TopSearch/>
                 <div className = "Sorting">
                    <SortDropdownButton/>
                </div>
                <UploadComponent/>
                <Gallery/>
                {/*<SortDropdownButton/>*/}
		        {/*<Gallery/>*/}
                {/*<SortDropdownButton/>*/}
		        {/*<Gallery/>*/}
                {/*<SortDropdownButton/>*/}

                {/*<PageNavigation/>*/}
                {/*<SortDropdownButton/>*/}
		        {/*<Gallery/>*/}
            </div>

        );
    }


}

export default App;
