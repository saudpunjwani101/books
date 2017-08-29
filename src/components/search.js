import React from 'react';
import Books from './books';
import * as BooksApi from '../BooksAPI';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
      searchQuery: ''
    }
    this.onUpdateStatus = this.onUpdateStatus.bind(this)
    this.onChangeText = this.onChangeText.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  onUpdateStatus(event, book) {
    BooksApi.update(book, event.target.value)
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      BooksApi.search(this.state.searchQuery, 7)
      .then(res => res.json())
      .then(data => {
        this.setState({books: data.books})
      })
    } else {return;}
  }

  onChangeText(event) {
    this.setState({searchQuery: event.target.value})
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          {/* <p className="close-search"><Link to="/">Close</Link></p> */}
          <div className="search-books-input-wrapper">
            <input
              onChange={this.onChangeText}
              onKeyPress={this.handleKeyPress}
              value={this.state.searchQuery}
              type="text"
              placeholder="Search by title or author" />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <Books
            books={this.state.books}
            onUpdateStatus={this.onUpdateStatus}/>
          </ol>
        </div>
      </div>
    )
  }
}

export default Search;
