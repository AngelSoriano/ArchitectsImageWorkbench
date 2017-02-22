/**
 * Created by kami on 2/17/17.
 */
var React = require('react');
import { FormGroup, FormControl} from 'react-bootstrap';
import './App.css';

var TopSearch = React.createClass({
    getInitialState: function () {
        return {value: ''}
    },
    getValidationState: function() {
      const length = this.state.value.lenght;
        if(length > 10) return 'success';
        else if(length > 5) return 'warning';
        else if(length > 0) return 'error';
    },
    handleChange: function (e) {
        this.setState({value: e.target.value})
    },
    render: function () {
       return(
           <form>
               <FormGroup className="topQuery"
               controlID="search"
               validationState={this.getValidationState()}>
                   <FormControl type="text" value={this.state.value}
                            placeholder="Search" onChange={this.handleChange}/>
               </FormGroup>
           </form>
       )
   }


});



module.exports = TopSearch;