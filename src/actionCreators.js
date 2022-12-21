import {
    ADD_BOOK_TO_BASKET,
    REMOVE_BOOK_FROM_BASKET,
    CHANGE_AUTHOR,
    CHANGE_TITLE, 
    CHANGE_PRICE,
    ADD_BOOK,
    REMOVE_BOOK,
    CHANGE_SEARCH,
  } from './actions.js'

export const addBookToBasket = (id) => (
    {type: ADD_BOOK_TO_BASKET, id}
);

export const removeBookFromBasket = (id) => (
    {type: REMOVE_BOOK_FROM_BASKET, id}
);

export const changeAuthor = (author) => (
    {type: CHANGE_AUTHOR, author}
);

export const changeTitle = (title) => (
    {type: CHANGE_TITLE, title}
);

export const changePrice = (price) => (
    {type: CHANGE_PRICE, price}
);

export const addBook = (book) => (
    {type: ADD_BOOK, book}
);

export const removeBook = (id) => (
    {type: REMOVE_BOOK, id}
);

export const changeSearch = (value) => (
    {type: CHANGE_SEARCH, value}
);