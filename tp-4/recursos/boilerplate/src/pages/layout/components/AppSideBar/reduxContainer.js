import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import AppSideBar from './AppSideBar';

import * as appActions from '../../../../redux/app/appActions';

function mapStateToProps(state) {
  return {
    trabajandoEnServidor: state.app.trabajandoEnServidor
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(appActions, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppSideBar));
