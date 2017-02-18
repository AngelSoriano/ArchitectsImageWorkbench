import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './NavigationBar'

import SortDropdownButton from './SortDropdownButton'
<<<<<<< HEAD:architects-image-workbench/src/App.js
import RecommendedTags from './RecommendedTags'
=======
import FilterButton from './FilterButton'
>>>>>>> 321f237a8d8e306f1ed3f46d264da6443b70df78:react-client/src/App.js

class App extends Component {
    render() {
        return (
            <div className="App">

                <NavigationBar/>
                <SortDropdownButton/>
                <FilterButton/>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <RecommendedTags/>
            </div>
        );
    }
}

export default App;
