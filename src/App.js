import React, { Component } from 'react'
import Header from './components/Head'
import MovieList from './components/MovieList';

class App extends Component {
  render() {
    return <div>
      <Header />
      <MovieList />
      </div>
  }
}

export default App
