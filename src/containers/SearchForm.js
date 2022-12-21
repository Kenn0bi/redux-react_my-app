import { connect } from "react-redux";
import SearchForm from "../components/SearchForm";
import {changeSearch} from '../actionCreators';

function mapStateToProps(state){
    const {searchForm} = state;
    return {searchForm}
}

function mapDispatchToProps(dispatch){
    return {
        changeSearch: (value) => dispatch(changeSearch(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)