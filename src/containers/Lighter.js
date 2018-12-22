import {connect} from 'react-redux'
import {onLighter} from "../actionCreators";
import Lighter from "../components/Lighter/Lighter";

export default connect(
    (state, props) => {

    },
    (dispatch,props) =>{
        onClick : () => dispatch(onLighter())
    }
)(Lighter)