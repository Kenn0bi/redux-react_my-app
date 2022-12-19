import {
    CHANGE_AUTHOR,
    CHANGE_TITLE,
    CHANGE_PRICE
} from '../actions'
// import store from '../storeFabric';

// store.dispatch({type: CHANGE_AUTHOR, author: 'John Doe'})
// store.dispatch({type: CHANGE_TITLTE, title: 'JS за 24 часа'})
// store.dispatch({type: CHANGE_PRICE, price: 350.50})

export const addBookForm = function(state = {}, action) {
    switch (action.type) {
        case CHANGE_AUTHOR:
            return {
                ...state,
                author: action.author
            }
        case CHANGE_TITLE:
            return {
                ...state,
                title: action.title
        }
        case CHANGE_PRICE:
            return {
                ...state,
                price: action.price
            }
        default:
            return state
      }
}
