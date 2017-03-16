import React, {Component} from 'react';
import ResultsComponent from './components/ResultsComponent'
import './styles/App.css';
import NavigationBar from './components/NavigationBar'
import UploadComponent from './components/UploadComponent'
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
                        <SearchBar doSearch={this.doSearch}/>
                    </div>
                </div>

                <UploadComponent/>
                {this.state.doSearch ? <ResultsComponent/> : null}

                
            </div>

        );
    }

    constructor(props) {
        super(props);
        this.state = {doSearch: false}

        this.doSearch = this.doSearch.bind(this)
    }

    doSearch() {
        this.setState({doSearch: true})
    }

}
export default App;
