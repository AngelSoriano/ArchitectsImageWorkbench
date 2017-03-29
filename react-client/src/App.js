import React, {Component} from 'react';
import './styles/App.css';
import NavigationBar from './components/NavigationBar'
import TopSearch from './components/topSearch'
import {Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink} from 'react-router'
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
                <Router history={hashHistory}>
                    <Route path="/" component={Container}>
                        <IndexRoute component={Home}/>
                            <Route path='/Link1' component={Link1}/>
                            <Route path="/Link2" component={Link2}/>
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
                    </Route>
                </Router>

            </div>

        );
    }
}

const Link1 = () => <h1>Hello from Link1!</h1>
const Link2 = () => <h1> Hello from Link2!</h1>

const Home = (props) => <div>
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
    {props.children}
</div>

const Container = (props) => <div>
    <NavigationBar />
    {props.children}
</div>
export default App;
