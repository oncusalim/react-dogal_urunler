import React, {Component} from 'react';
import classes from './SearchBar.css';
import axios from '../../../axios-order';


class SearchBar extends Component {
    state = {
        query: "",
        data: [],
        filteredData: []
    };
    
    handleInputChange = event => {
      const query = event.target.value;
  
      this.setState(prevState => {
        const filteredData = prevState.data.filter(element => {
          return element.name.toLowerCase().includes(query.toLowerCase());
        });
  
        return {
          query,
          filteredData
        };
      });
    };

    getData = () => {
        axios.get('https://alisveris-6baec.firebaseio.com/urunler.json')
        .then(response => {
          console.log(response.data);
          const { query } = this.state;
          console.log(query);
          const veri = response.data.name;
          const filteredData = veri.filter(element => {
            return element.name.toLowerCase().includes(query.toLowerCase());
          });
  
          this.setState({filteredData:filteredData});
        });
    };

    componentDidMount() {
        this.getData();
    }

    render(){
        return(
            <React.Fragment>
            <div className={classes.SearchBar}>
                <form>
                    <input
                        placeholder="Search for..."
                        value={this.state.query}
                        onChange={this.handleInputChange}/>
                </form>
                <div>{this.state.filteredData.map(i => <p>{i.name}</p>)}</div>
            </div>
            </React.Fragment>
        );
    }

}


export default SearchBar;