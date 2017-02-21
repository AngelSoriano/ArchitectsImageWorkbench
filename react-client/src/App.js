import React, {Component} from 'react';
import './App.css';
import NavigationBar from './NavigationBar'
import TopSearch from './topSearch'
import SortDropdownButton from './SortDropdownButton'
import RecommendedTags from './RecommendedTags'
import Gallery from './Gallery'
import FilterButton from './FilterButton'
import UploadDropzone from './UploadDropzone'
import PageNavigation from './PageNavigation'
import SearchBar from './SearchBar'

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavigationBar/>
                
                <div className="App-header">
                    {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                    {/*<h2>Welcome to React</h2>*/}
                    <br/>
                    <br/>
                    <SearchBar/>
                </div>

                <div className = "Sorting">
                    <PageNavigation/>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <RecommendedTags/>
                <TopSearch/>
                 <div className = "Sorting">
                    <SortDropdownButton/>
                </div>
                <FilterButton/>
                
		        <Gallery/>
                {/*<SortDropdownButton/>*/}
		        {/*<Gallery/>*/}
                {/*<SortDropdownButton/>*/}
		        {/*<Gallery/>*/}
                {/*<SortDropdownButton/>*/}

                <UploadDropzone/>
                {/*<PageNavigation/>*/}
                {/*<SortDropdownButton/>*/}
		        {/*<Gallery/>*/}
            </div>

        );
    }
}

export default App;
