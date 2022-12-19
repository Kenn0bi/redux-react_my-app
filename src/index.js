import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { createStore, combineReducers } from 'redux';
import store from './storeFabric';
// import { ADD_BOOK_TO_BASKET } from './actions';

import {
  addBookToBasket,
  removeBookFromBasket,
  changeAuthor,
  changeTitle,
  changePrice
} from './actionCreators'

/*
function SReducer(state = 0, action) {
  switch (action.type) {
    case 'set/s':
      return state + action.value
    default:
      return state
  }
}

function PReducer(state = 0, action) {
  switch (action.type) {
    case 'set/p':
      return state + action.value
    default:
      return state
  }
}

function NReducer(state = 0, action) {
  switch (action.type) {
    case 'set/n':
      return state + action.value
    default:
      return state
  }
}

let preloadedState = JSON.parse(localStorage.getItem('mortgage')) ?? {s: 1e6, P:7, N:10 }
let store = createStore(combineReducers({S: SReducer, P: PReducer, N: NReducer}), preloadedState);

store.subscribe(() => {
  console.log(store.getState())
  localStorage.setItem('mortgage', JSON.stringify(store.getState()))
})

store.dispatch({ type: 'set/p', value: 10 })
store.dispatch({ type: 'set/s', value: 1_000_000 })
store.dispatch({ type: 'set/n', value: 15 })

setTimeout(()=> { store.dispatch({ type: 'set/s', value: 5_000_000 }) }, 5000)
*/

store.subscribe(()=>{
  console.log(JSON.stringify(store.getState(), null, ' '));
})

store.dispatch(addBookToBasket(3))
store.dispatch(addBookToBasket(3))
store.dispatch(addBookToBasket(5))
store.dispatch(removeBookFromBasket(3))

store.dispatch(changeAuthor('John Doe'))
store.dispatch(changeTitle('JS за 24 часа'))
store.dispatch(changePrice(350.50))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    
    {/* <Provider store={store}>
      <App />
    </Provider> */}
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
