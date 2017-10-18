import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions';

class BookList extends Component {
  renderList() {
    const { selectBook } = this.props;

    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => selectBook(book)}
          className='list-group-item'>
          {book.title}
        </li>
      ); 
    });
  }

  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
