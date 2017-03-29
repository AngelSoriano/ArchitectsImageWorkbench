import React, {Component} from 'react';
import ResultsComponent from './components/ResultsComponent'
import './styles/App.css';
import NavigationBar from './components/NavigationBar'
import {Router, Route, IndexRoute, hashHistory, DefaultRoute} from 'react-router'
import SortDropdownButton from './components/SortDropdownButton'
import RecommendedTags from './components/RecommendedTags'
import UploadComponent from './components/UploadComponent'
import SearchBar from './components/SearchBar'
import ImageGallery from './components/ImageGallery'
class App extends Component {
    render() {
        return (
            <div className="App">
                <Router history={hashHistory}>
                    <Route path="/" component={Container}>
                        <IndexRoute component={Home}/>
                            <Route path='/Link1' component={Link1}/>
                            <Route path="/Link2" component={Link2}/>

                    </Route>
                </Router>
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
    <ImageGallery/>
    <UploadComponent/>

    {props.children}
</div>

const Container = (props) => <div>
    <NavigationBar />
    {props.children}
</div>
export default App;
