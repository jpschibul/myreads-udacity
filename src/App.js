import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Route} from 'react-router-dom'
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

  
  updateShelf = (book, shelf) => {
    BooksAPI.update(book,shelf);
  }

  componentWillUpdate() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({
          books
        });
        console.log(books);
      });
  }

  resetSearch = () => {
    this.setState({ searchBooks: [] });
  };


  render() {
    return (
      <div className="app">
          <Route exact path="/" render={() =>(
            <BookCase
              books={this.state.books}
              updateShelf={this.updateShelf}
            />
          )} />
          <Route path="/search" render={() =>(
            <BookSearch
              books={this.state.books}
              updateShelf={this.updateShelf}
              resetSearch={this.resetSearch}
            />
          )} />
      </div>
    )
  }
}

export default BooksApp
