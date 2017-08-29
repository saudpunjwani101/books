import React from 'react'
import * as BooksApi from '../BooksAPI'
import '../App.css';
import { Link } from 'react-router-dom';

import Shelf from './shelfs';

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
            <Shelf allBooks={this.state.allBooks}
            title={"Currently Reading"}
            shelf={"currentlyReading"}
            onUpdateStatus={this.onUpdateStatus} />

            <Shelf allBooks={this.state.allBooks}
            title={"Want to Read"}
            shelf={"wantToRead"}
            onUpdateStatus={this.onUpdateStatus} />

            <Shelf allBooks={this.state.allBooks}
            title={"Read"}
            shelf={"read"}
            onUpdateStatus={this.onUpdateStatus} />
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
