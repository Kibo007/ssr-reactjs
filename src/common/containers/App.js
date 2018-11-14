import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import Counter from '../components/Counter';
import Home from '../components/Home';
// import * as CounterActions from '../actions';
import * as intl from '../actions/intl';

import '../css/App.css';

const mapStateToProps = state => ({
  intl: state.intl.default
});

function mapDispatchToProps(dispatch) {
  return { reduxAction: bindActionCreators({ ...intl }, dispatch), dispatch };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
