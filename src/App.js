import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      developers: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({ developers: users }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { developers, searchField } = this.state;
    const filteredDevelopers = developers.filter(developer => developer.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
    return (
      <div className="App">
        <h1>Dev<span>hub</span></h1>
        <SearchBox placeholder="Search developers" handleChange={this.handleChange} />
        <CardList developers={filteredDevelopers} />
      </div>
    )
  }
}

export default App;
