import React from 'react';
import BookItem from '../bookItem';

class Books extends React.Component {
  render()  {
    return (
      <div style={{display:'flex', justifyContent:'flex-start', flexWrap:'wrap'}}>
        {this.renderBooks(this.props.books)}
      </div>
    )
  }

  renderBooks(books) {
    if(books.length===0) { return <div></div> }
    return books.map(book=>{
      return this.checkIfSearch(book)
    })
  }

  checkIfSearch(book) {
    if(book.shelf)  {
      return (
        book.shelf===this.props.shelf ?
        <BookItem key={book.id}
        book={book}
        onUpdateStatus={this.props.onUpdateStatus}/> : null
      )
    }

    return (
      <BookItem key={book.id}
      book={book}
      onUpdateStatus={this.props.onUpdateStatus} />
    )
  }

}

export default Books
