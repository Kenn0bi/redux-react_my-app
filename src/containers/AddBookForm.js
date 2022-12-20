import { connect } from "react-redux";
import AddBookForm from "../components/AddBookForm";
import {addBook} from '../actionCreators';

function mapStateToProps(state){
    const {addBookForm} = state;
    return {...addBookForm}
}

function mapDispatchToProps(dispatch){
    return {
        remove: (book) => dispatch(addBook(book))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBookForm)