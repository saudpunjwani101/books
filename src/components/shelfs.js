import React from 'react';
import '../App.css';

import Books from './books';

const Shelf = (props) =>
<div className="bookshelf">
  <h2 className="bookshelf-title">{props.title}</h2>
  <div className="bookshelf-books">
    <ol className="books-grid">
      <Books books={props.allBooks}
      shelf={props.shelf}
      onUpdateStatus={props.onUpdateStatus}/>
    </ol>
  </div>
</div>

export default Shelf
