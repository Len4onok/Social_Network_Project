import  React  from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { onSendMessage } from '../../redux/dialogs-reducer';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import Dialogs from './Dialogs';

let mapStateToProps=(state)=>{
    return {
        state: state.dialogsPage,
    }
}



export default compose(
connect(mapStateToProps, {onSendMessage}),    
withAuthRedirect
)(Dialogs)