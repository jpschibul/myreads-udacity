import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Route, Switch} from 'react-router-dom'
import './App.css'
import BookCase from './components/BookCase'
import BookSearch from './components/BookSearch'
import NotAvailable from './components/NotAvailable'


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
    BooksAPI.update(book,shelf)
    .then(()=>{
      BooksAPI.getAll().then((books) => {
        this.setState ({books:books})
      })
    });
  }

  //Replaced the componentWillUpdate() Method as suggestion of project reviewer, used then part of update, so application will render only when books are moved between shelves
  /*componentWillUpdate() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({
          books
        });
        console.log(books);
      });
  }*/



   render() {
    return (
      <div className="app">
        <Switch>
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
                />
              )} />
              <Route component={NotAvailable} />
          </Switch>
       </div>
    )
  }
}

export default BooksApp
