import React, {Component} from 'react';
import './styles/App.css';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import Home from './components/Home'
import Container from './components/Container'
import ResultsComponent from './components/ResultsComponent'

const About = () => <h1>Meet the Developers</h1>
const Panafold = () => <h1>About Panafold</h1>

class App extends Component {
    render() {

        return (
            <div className="App">
                <Router history={browserHistory}>
                    <Route path="/" component={Container}>
                        <IndexRoute component={Home} searchResults={this.searchResults}/>
                        <Route path="/about" component={About}/>
                        <Route path="/panafold" component={Panafold}/>
                        <Route path="/results"
                               component={() => (<ResultsComponent searchResults={this.state.searchResults}/>)}
                               refresh="true"
                        />

                    </Route>
                </Router>

            </div>

        );
    }


    constructor(props) {
        super(props);
        this.state = {
            searchResults: ''
        }

        this.searchResults = this.searchResults.bind(this)
    }

    searchResults(searchResults) {
        this.setState({searchResults: searchResults}, () => {
            browserHistory.push("/results")
        })
    }

}

export default App;

