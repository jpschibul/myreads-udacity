import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Route, Link } from 'react-router-dom'
import './App.css'
import BookCase from './components/BookCase';
import BookSearch from './components/BookSearch';


class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState ({books:books})
    })
  }

  render() {
    return (
      <div className="app">
          <BookCase
            books={this.state.books}
          />
      </div>
    )
  }
}

export default BooksApp
