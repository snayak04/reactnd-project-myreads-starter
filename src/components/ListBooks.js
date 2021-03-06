import React, { Component } from 'react';
import Bookshelf from './Bookshelf';
import AddBook from './AddBook';

class ListBooks extends Component {
    
    render(){
        var state={
            reading:[],
            wantToRead:[],
            read:[]
        }
        this.props.books.forEach((book)=>{
            switch(book.shelf){
                case "currentlyReading":
                    state.reading.push(book);
                    break;
                case "wantToRead":
                    state.wantToRead.push(book)
                    break;
                case "read":
                    state.read.push(book);
                    break;
                default://Do nothign
                    break;
            }
            });

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf changeShelf={this.props.changeShelf} title="Currently Reading" books={state.reading}/>
                        <Bookshelf changeShelf={this.props.changeShelf} title="Want to Read" books={state.wantToRead}/>
                        <Bookshelf changeShelf={this.props.changeShelf} title="Read" books={state.read}/>
                    </div>
                </div>
                <AddBook />
            </div>
    );
    }
}

export default ListBooks;