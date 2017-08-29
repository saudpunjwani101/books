import React from 'react'
import * as BooksApi from '../BooksAPI'
import '../App.css';
import { Link } from 'react-router-dom';

import Books from './books';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      allBooks: []
    }

    this.getAllBooks = this.getAllBooks.bind(this)
  }

  getAllBooks() {
    console.log("getting books")
    BooksApi.getAll()
    .then(res=>res.json())
    .then(data=> {
      this.setState({allBooks: data.books})
    })
  }

  componentWillMount() {
    this.getAllBooks()
  }

  newBooks()  {
    console.log("news")
  }


  onUpdateStatus(event, book) {
    BooksApi.update(book, event.target.value)
    .then(res => res.json())
    .then(data => {
      window.location.reload()
    })
  }


  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    <Books books={this.state.allBooks}
                    shelf={"currentlyReading"}
                    onUpdateStatus={this.onUpdateStatus}/>
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    <Books books={this.state.allBooks}
                    shelf={"wantToRead"}
                    onUpdateStatus={this.onUpdateStatus}/>
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    <Books books={this.state.allBooks}
                    shelf={"read"}
                    onUpdateStatus={this.onUpdateStatus} />
                  </ol>
                </div>
              </div>
            </div>
          </div>
            <p className="open-search">
              <Link to="/search">Search</Link>
            </p>
        </div>
      </div>
    )
  }

}

export default Home;
