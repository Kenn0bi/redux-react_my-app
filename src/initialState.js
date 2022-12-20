import data from './components/data'

export default {
    dataBook: data, // наборе книг
    items: {}, // состояние корзины
    addBookForm: { //состояние формы добавления книги
        id: 0,
        title: "",
        author: "",
        price: 0
    },
    // searchForm: { // состояние формы поиска
    //     value: ""
    // }
}