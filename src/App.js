import React from 'react';
import './App.css';
import AddBookForm from './containers/AddBookForm';
import Basket from './containers/Basket';
import Book from './components/Book';
import BookWithoutPrice from './components/BookWithoutPrice';
import SearchForm from './containers/SearchForm';
import { Button } from 'reactstrap';
import Footer from './components/Footer';


class App extends React.Component{
 
  render(){
    const book = this.props.dataBook.filter(
      
      item => item.title.toLowerCase().startsWith(this.props.searchForm.value.toLowerCase())

    ).map( item => (                         
    item["price"] ?   <Book
    id={item["id"]}
    key={item["id"]}
    title={item["title"]}
    author={item["author"]}
    price={item["price"]}
    handleAddToBasket={this.props.addBookToBasket}
    /> :
    <BookWithoutPrice
    key={item["id"]}
    title={item["title"]}
    author={item["author"]}
    price={item["price"]}
    />
    )
    )
    return <div>
      <Button color="danger">Danger!</Button>
      <Button color="success">Success!</Button>
      <Basket />
      <AddBookForm />
      <SearchForm />
     {book}
    </div>;
  }
}

export default App;
