import React, {Component} from 'react';
import './styles/App.css';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import Home from './components/Home'
import Container from './components/Container'
import ResultsComponent from './components/ResultsComponent'

const Link1 = () => <h1>Hello from Link1!</h1>
const Link2 = () => <h1> Hello from Link2!</h1>

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router history={browserHistory}>
                    <Route path="/" component={Container}>
                        <IndexRoute component={Home} loadResults={this.loadResults} />
                        <Route path="/Link1" component={Link1}/>
                        <Route path="/Link2" component={Link2}/>
                        <Route path="/results" component={ResultsComponent}/>
                    </Route>

                    { this.state.loadResults ? browserHistory.push("/results") : null }
                </Router>
            </div>

        );
    }

    constructor(props) {
        super(props);
        this.state = {
            loadResults: false
        }

        this.loadResults = this.loadResults.bind(this)
    }

    loadResults() {
        this.setState({loadResults: true})
    }

}



export default App;
