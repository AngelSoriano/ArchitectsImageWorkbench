import React, {Component} from 'react';
import './App.css';
import NavigationBar from './NavigationBar'
import SortDropdownButton from './SortDropdownButton'
import Gallery from './Gallery'
import FilterButton from './FilterButton'
import PageNavigation from './PageNavigation'
import SearchBar from './SearchBar'

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavigationBar/>
                <SearchBar/>
                <FilterButton/>
                <PageNavigation/>
		        <Gallery/>
                <SortDropdownButton/>
		        <Gallery/>
                <SortDropdownButton/>
		        <Gallery/>
                <SortDropdownButton/>
		        <Gallery/>
            </div>

        );
    }
}

export default App;
