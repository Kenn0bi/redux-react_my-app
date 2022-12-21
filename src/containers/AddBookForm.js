import { connect } from "react-redux";
import AddBookForm from "../components/AddBookForm";
import {addBook, changeAuthor, changeTitle, changePrice} from '../actionCreators';

function mapStateToProps(state){
    const {addBookForm} = state;
    return {...addBookForm}
}

function mapDispatchToProps(dispatch){
    return {
        addBook: (book) => dispatch(addBook(book)),
        changeAuthor: (value) => dispatch(changeAuthor(value)),
        changeTitle: (value) => dispatch(changeTitle(value)),
        changePrice: (value) => dispatch(changePrice(value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBookForm)