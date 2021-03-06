import React, { PureComponent } from 'react';
import App from '../App/App';
import fetchHotelListAction from './actions/fetchHotelListAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { URL } from '../../uls';
const mapStateToProps = (state, props) => {
  return {
    hotelList: state.MainContainerState.hotelList,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchHotelList: bindActionCreators(fetchHotelListAction, dispatch),
});
class MainContainer extends PureComponent {
  componentDidMount = () => {
    this.props.fetchHotelList(URL);
  };
render() {
    const { hotelList } = this.props;
    return (
      <div className="">
        <App hotelList={hotelList} />
      </div>
    );
  }
}
//export MainContainer;
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(MainContainer);
const ReduxComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainContainer);
 
export { ReduxComponent as default, MainContainer as PureMainContainer };
